# Metasys API

[![CircleCI](https://circleci.com/gh/metasys-server/api-docs.svg?style=svg)](https://circleci.com/gh/metasys-server/api-docs)

<!-- cSpell:ignore apiaryio -->

**Note** This is prerelease documentation and is subject to change.

The source code for the [Metasys Server API](https://metasys-server.github.io/api-docs)

## Quickstart

1. Clone this repository and checkout the alderaan branch

    ```shell
    git clone git@github.jci.com:g4-metasys-server/api.git
    git checkout alderaan
    ```

2. Install all the dependencies

    ```shell
    npm install
    ```

3. Generate a local preview for the documentation. This produces an index.html file which contains a preview of the whole documentation. The preview is generated to `build/previews/index.html`

    ```shell
    npm run preview
    ```

4. OR generate a preview for an individual section of the documentation. Does the same as above except it only renders the specified section. The preview is generated to `build/previews/<group>.html`

    ```shell
    npm run preview:group -- --group=spaces
    ```

    _The extra -- is intentional, that is just how NPM handles parameters_

## API Blueprint Rendering

The source is currently broken up into individual pages for each part of the API and needs to be combined before publishing to Apiary

### Build

Combines all the individual blueprints into a single file inside of the build directory. The built file has the same name as the base index file where the default is index.apib

```shell
npm run build
```

### Publish

Publishes the whole built and rendered API blueprint to Apiary. (Only people with access to the Apiary site have permission to publish)

```shell
npm run publish
```

### Preview

Renders an HTML file locally to allow viewing of the API documentation before publishing.

```shell
npm run preview
```

### Preview Section

This command allows you to preview a single section of the API blueprint. This is useful if you are making changes to a single section and don't want to have to scroll through the whole documenation.

The section specified is one of the directories within the groups directory. The rendered output resides at build/previews/<section&gt;.html

```shell
npm run preview:group -- --group=<section>
```

**Note:** The extra -- is intentional, that is just how NPM handles parameters

### Auto Build

Watches for changes to blueprint files within the api directory and automatically re-renders them.

```shell
npm run preview:watch
```

## Contributing

### Folder Structure

Each group of actions is housed in a separate file to keep their concerns solely to themselves.

* `groups/` - Contains a collection of groups of actions with each folder representing a separate section
    * `<group>.apib` - Contains the actions and details regarding the group itself
    * `<group>_structs.apib` - Contains all the data structures for the specified actions. These are separate since they have to be rendered all together
* `_templates/` - Contains the documentation templates such as the header and introduction sections along with the markdown required to render the data structure section
    * `layouts/` - The handlebar templates used for generating the html previews and mono blueprint file

### Pull Requests

When a pull request is submitted, CircleCI will automagically generate a full documentation preview which can be shown to reviewers before merging in the changes.

The preview can be accessed via the "Artifacts" tab when viewing the build in CircleCI and clicking on the index.html file.
