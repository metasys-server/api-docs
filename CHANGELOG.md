# Metasys Server API Changelog

All API functional changes to the Metasys Server API will be documented in this file.

## [2.0.0] - 2019-09-27

### Added

- [API version 2 release documentation](https://metasys-server.github.io/api-landing/api/v2/#) with Metasys 10.1
- Rate limiting of API requests
- Object Service
  - Get A Single Object
    - Common object attributes to response payload
    - includeSchema query parameter to get optional schema in response payload
  - Lookup Object Id
  - Get A Single Object Attribute
  - Update An Object
  - Get Commands For An Object
  - Send Commands To An Object
- Schema Service
  - Get A Single Enumeration Schema

### Changed

- Response payload relative links to absolute links
- Response payload links have 'Url' suffix, except 'self', 'next', and 'prev'
- API request server side reverse proxy redirects to rewrites
- Object Service
  - 'attributes' response payload link to 'trendedAttributesUrl'
  - Get A Single Object
    - Response payload 'enumSet' links to fully qualified enums

### Removed

- Support for API version 1

## [1.0.0] - 2018-11-29

### Added

- Initial [API version 1 release documentation](https://metasys-server.github.io/api-landing/api/v1/#) with Metasys 10.0
- Authentication Service
  - Login
  - Refresh Token
- Alarm Service
  - Get Alarms
  - Get A Single Alarm
  - Get Alarms For A Network Device
  - Get Alarms For An Object
- Annotation Service
  - Get Alarm Annotations
  - Get Audit Annotations
- Audit Service
  - Get Audits
  - Get A Single Audit
  - Get Audits For An Object
- Enumeration Service
  - Get Enum Sets
  - Get A Single Enum Set
  - Get Enum Members
  - Get A Single Enum Member
- Equipment Service
  - Get Equipment Instances
  - Get A Single Equipment Instance
  - Get Equipment Served By An Equipment Instance
  - Get Points Defined By An Equipment Instance
  - Get Equipment That Serve An Equipment Instance
  - Get Equipment Hosted By A Network Device
  - Get Equipment Serving A Space
- Network Device Service
  - Get Network Devices
  - Get Network Device Types
  - Get A Single Network Device
  - Get Network Devices Hosting An Equipment Instance
  - Get Network Device Children
  - Get Network Devices Serving A Space
- Object Service
  - Get Objects
  - Get A Single Object
  - Get Network Device Children Objects
  - Get Object Children
  - Get Equipment Points Mapped To An Object
- Sample Service
  - Get Network Device With Attributes With Samples
  - Get Samples For A Network Device Attribute
  - Get Object Attributes With Samples
  - Get Samples For An Object Attribute
- Space Service
  - Get Spaces
  - Get A Single Space
  - Get SpacesServed By An Equipment Instance
  - Get Spaces Served By A Network Device
  - Get Space Children
