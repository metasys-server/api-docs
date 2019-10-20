# Release notes 10.1

## Added
- Network devices
    - Get network devices serving a space<br><br>
- Objects
    - Lookup object ID
    - Get a single object attribute
    - Update an object
    - Get commands for an object
    - Send a command to an object<br><br>
- Schemas
    - Get a single enumeration schema
## Changes necessitating client refactor (breaking changes)
- Objects	
	- Changed response payload 'enumSet' links to fully qualified enums.
	- Changed 'attributes' link to 'trendedAttributesUrl'.
## Improvements and optimizations
- Introduction
	- Added Base URL, this describes the base endpoint for the API.
    - Removed the following details from API Version notes: 
        - URL examples
        - Accept header information
        - Version specification rules
    - Added an example for Version Response Behavior.
    - Added date times, which specify all date times in the document are ISO-8601 encoded.
    - Removed three error descriptions from Validation:
        - User not authenticated
        - Record not authorized
        - Identifier not found
    - Added seven error descriptions to Validation:
        - User not authenticated
        - Record not authorized
        - Identifier not found
        - The resource already exists
        - Internal server error
        - The device is not supported
        - The device is offline<br><br>
	- Removed Redirects. The client no longer handles inbound and outbound HTTP calls; a reverse proxy now handles this operation.<br><br>
- Objects
    - Added more information on the functionality of Get A Single Object. 
        - Added common object attributes to response payload. 
        - Included schema query parameter to get optional schema in response payload.<br><br>
## Removed
- Support for API version 1.   