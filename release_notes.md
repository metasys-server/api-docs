# Release notes 10.1

## Added
- Objects
    - Lookup object ID
    - Get a single object attribute
    - Update an object
    - Get commands for an object
    - Send a command to an object<br><br>
- Schemas
    - Get a single enumeration schema

## Changed
- Introduction
	- Added Base URL, this describes the base endpoint for the API.
    - Removed the following details from API Version notes:
        - URL examples
        - Accept header information
        - Version specification rules
    - Added an example for Version Response Behavior.
    - Added DateTimes, which specifies that all date and time values in the document are ISO-8601 encoded.
    - Added seven error descriptions to Validation:
        - User not authenticated
        - Record not authorized
        - Identifier not found
        - The resource already exists
        - Internal server error
        - The device is not supported
        - The device is offline<br><br>
	- Removed Redirects. The client ceases to handle inbound and outbound HTTP calls; a reverse proxy now handles this operation.<br><br>
- Objects
    - Added more information on the functionality of Get A Single Object.
        - Added common object attributes to response payload.
        - Included the 'schema' query parameter, which you can use to get optional schema in response payload.
        - Changed response payload 'enumSet' links to fully qualified enums. **Note**: Breaking change.
	    - Changed 'attributes' link to 'trendedAttributesUrl'. **Note**: Breaking change.
        
## Removed
- Support for API version 1.   