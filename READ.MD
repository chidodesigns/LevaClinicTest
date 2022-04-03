# Leva Clinic Test

Application built of the Leva Clinic Test

## Usage 
- `npm install`
- `npm run-script dev` [boots up app and creates DB and DB tables. Make sure an instance of MYSQL is running on port 3306]

<!-- ## Start Development Server
- `npm run-script dev` 
- Go to [localhost:8000] to access Api. -->

## Running The Test Suite
The test suite requires a DB, for this app, 
- `npm run-script dev`
- `npm test` [runs the jest test suite]
- Destroy DB before running test, as to not have conflicting results from test.

## Notes
- Test suite can be improved - automating the setup/teardown of DB. Test Setup code was created for setup/teardown process, however found myself spending alot of time, trying to wire up and test, the setup process.
- Test suite could have more UNIT coverage. 
