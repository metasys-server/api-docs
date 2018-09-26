const gulp = require('gulp');
const hb = require('gulp-hb');
const concat = require('gulp-concat');
const del = require('del');
const through = require('through2');
const argv = require('yargs').argv;
const path = require('path');
const handlebars = require('handlebars');
const apib2me = new (require('@apib/2me'))();

const apiaryApiName = process.env.APIARY_NAME;
const apiaryApiKey = process.env.APIARY_KEY;

const BLUEPRINT_FILES = ['./**/*.{apib,hbs}', '!./build/', '!./build/**/*'];
const OUTPUT_BLUEPRINT_FILE = 'index.apib';

const INDEX_TEMPLATE = '_templates/layouts/api_blueprint.hbs';
const PREVIEW_TEMPLATE = '_templates/layouts/api_preview.hbs';

gulp.task('build', function(cb) {
  const all = [];

  gulp.src(BLUEPRINT_FILES)
    .on('data', data => all.push(data))
    .on('end', () => {
      const structs = all.filter(x => path.basename(x.path).indexOf('_structs.') !== -1);

      gulp.src(INDEX_TEMPLATE)
        .pipe(apiTemplate(argv.revision, null, structs))
        .pipe(concat(OUTPUT_BLUEPRINT_FILE, { newLine: '\n' }))
        .pipe(gulp.dest('build/'))
        .on('end', cb);
    });
});

gulp.task('publish', function() {
  return gulp.src(`build/${OUTPUT_BLUEPRINT_FILE}`)
    .pipe(apib2me.publish('apiary', {
      apiName: apiaryApiName,
      apiaryToken: apiaryApiKey
    }));
});

const preview = gulp.series('build', function() {
  return gulp.src(`build/${OUTPUT_BLUEPRINT_FILE}`)
    .pipe(through.obj((file, enc, cb) => apiPreviewTemplate(file, 'index', cb)));
});

const previewGroup = function(cb) {
  const group = argv.group;
  const all = [];

  gulp.src([`groups/${group}/*.apib`, './**/*_structs.apib'])
    .on('data', data => all.push(data))
    .on('end', () => {
      const groups = all.filter(x => path.basename(x.path).indexOf('_structs.') === -1);
      const structs = all.filter(x => path.basename(x.path).indexOf('_structs.') !== -1);

      gulp.src(INDEX_TEMPLATE)
        .pipe(apiTemplate(argv.revision, groups, structs))
        .on('data', file => apiPreviewTemplate(file, group, cb));
    });
};

gulp.task('preview', preview);
gulp.task('preview:group', previewGroup);

gulp.task('watch:preview', gulp.series('preview', function() {
  return gulp.watch(BLUEPRINT_FILES, preview);
}));

gulp.task('watch:preview:group', gulp.series('preview:group', function() {
  return gulp.watch(BLUEPRINT_FILES, previewGroup);
}));

gulp.task('clean', function () {
  return del(['build']);
});

function apiTemplate(revision, groups, structs) {
  return hb()
    .partials(BLUEPRINT_FILES)
    .data({
      revision: revision ? revision : new Date().toUTCString(),
      groups: groups ? groups.map(x => path.relative('./', x.path).replace(/\\/g, '/').replace('.apib', '')) : null,
      structs: structs ? structs.map(x => path.relative('./', x.path).replace(/\\/g, '/').replace('.apib', '')) : null
    });
}

function apiPreviewTemplate(file, name, cb) {
  return gulp.src(PREVIEW_TEMPLATE)
    .pipe(hb().data({ source: JSON.stringify(file.contents.toString()) }))
    .pipe(concat(`${name}.html`))
    .pipe(gulp.dest('build/previews/'))
    .on('end', cb);
}

require.extensions['.apib'] = function (module, filename) {
  var fs = require('fs');
  var templateString = fs.readFileSync(filename, 'utf8');
  module.exports = handlebars.compile(templateString);
}
