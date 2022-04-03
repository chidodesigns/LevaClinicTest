# Leva Clinic Test

Application built of the Leva Clinic Test

## Usage 
- `npm install` [Get Frontend Node Modeules ]
- `cd client`
- `npm install` [Get Frontend Node Modeules ]
- `npm run-script dev` [NPM Pkg Concurrently runs and boots up app (backend server/client dev site) and creates DB and DB tables. Make sure an instance of MYSQL is running on port 3306]
- Change `env.local` to `.env`

## Running The Test Suite
The test suite requires a DB, for this app, 
- `npm run-script dev`
- `npm test` [runs the jest test suite]
- Destroy database before running test, as to not have conflicting results from test.

## Notes
- Test suite can be improved - automating the setup/teardown of DB. Test Setup code was created for setup/teardown process, however found myself spending alot of time, trying to wire up and test, the setup process.
- Test suite could have more UNIT coverage. 
- The db teardown automation is not wired into the test suite, will have to manually drop db before beginning new test instances for this `describe("Medical History Signup")`  
