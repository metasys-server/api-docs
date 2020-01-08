# Metasys Server API Changelog

Use the following information to view all API functional changes to the *Metasys* server API.

## 2.0.0 - 2019-09-27

### Added

- [API version 2 release documentation](https://metasys-server.github.io/api-landing/api/v2/#) with Metasys 10.1
- Objects
  - Lookup object ID
  - Get a single object attribute
  - Update an object
  - Get commands for an object
  - Send a command to an object<br><br>
- Schemas
  - Get a single enumeration schema

## Changed

- Objects
  - Added more information on the functionality of Get a single object.
    - Added common object attributes to response payload.
    - Included the 'schema' query parameter, which you can use to get optional schema in response payload.
    - Changed response payload 'enumSet' links to enum values. **Note**: Breaking change.
    - Changed 'attributes' link to 'trendedAttributesUrl'. **Note**: Breaking change.

## Removed

- Support for API version 1.

## 1.0.0 - 2018-11-29

### Added

- Initial [API version 1 release documentation](https://metasys-server.github.io/api-landing/api/v1/#) with Metasys 10.0
- Alarms
  - Get alarms
  - Get a single alarm
  - Get alarms for a network device
  - Get alarms for an object
- Annotations
  - Get alarm annotations
  - Get audit annotations
- Audits
  - Get audits
  - Get a single audit
  - Get audits for an object
- Authentication
  - Login
  - Refresh token
- Enumerations
  - Get enum sets
  - Get a single enum set
  - Get enum members
  - Get a single enum member
- Equipment
  - Get equipment instances
  - Get a single equipment instance
  - Get equipment served by an equipment instance
  - Get points defined by an equipment instance
  - Get equipment that serve an equipment instance
  - Get equipment hosted by a network device
  - Get equipment serving a space
- Network Devices
  - Get network devices
  - Get network device types
  - Get a single network device
  - Get network devices hosting an equipment instance
  - Get network device children
  - Get network devices serving a space
- Objects
  - Get objects
  - Get a single object
  - Get network device children objects
  - Get object children
  - Get equipment points mapped to an object
- Samples
  - Get network device with attributes with samples
  - Get samples for a network device attribute
  - Get object attributes with samples
  - Get samples for an object attribute
- Spaces
  - Get spaces
  - Get a single space
  - Get spaces served by an equipment instance
  - Get spaces served by a network device
  - Get space children
