import mysql from "mysql2";

/**
 * NB: I wrote this function out like this because I was running Nodemon in dev mode.
 * To Be Used To Boot Up A MYSQL SERVICE (alternative to Docker Container)
 */

const connectionObj = {
  host: "127.0.0.1",
  user: "root",
  port: 3306,
  password: "",
};

let createdDb = false;
let buildSqlTables = false 

const setBuildSqlTables = () => {
    return  buildSqlTables = true
}


const createDb = async () => {
  if (!createdDb) {
    const connection = mysql.createConnection(connectionObj);
    try {
      //  Create Database
      connection.query(
        "CREATE DATABASE IF NOT EXISTS leviaClinic",
        (err, result) => {
          if (err) throw err;
          if (result) {
            setBuildSqlTables()
            console.log("Database Created");
          }
        }
      );
      createdDb = true;
   
    } catch (error) {
      console.log(error);
    }
  }
};

export const dbConnection =  async () => {
    
  createDb();

  if (createdDb) {
    //  Set Timeout To Give Opportunity for DB Creation as mysql DB creation/connection does not return a promise
    setTimeout(() => {
      const connection = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        port: 3306,
        password: "",
        database: "leviaClinic",
      });

      if(buildSqlTables){
        const createCustomersTableSql = "CREATE TABLE IF NOT EXISTS customers ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255) )";

        const createCustomersMedInfoTableSql = "CREATE TABLE IF NOT EXISTS customers_medical_info ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, medical_condtions JSON, medical_history JSON, news_updates VARCHAR(3), privacy_policy VARCHAR(3) )";

        connection.query(
          createCustomersTableSql,
          (err, result) => {
            if (err) throw err;
            console.log("Customers Table Created");
          }
        );

        connection.query(
          createCustomersMedInfoTableSql,
          (err, result) => {
            if (err) throw err;
            console.log("Customers Medical Info Table Created");
          }
        );
      }

      connection.connect((err) => {
        try {
          if (err) throw err;

          console.log("Error Connecting " + err);

          console.log("Connected As ID " + connection.threadId);
        } catch (error) {
          console.log(error);
        }
      });
    }, 3000);
  }
};

//  Standard DB Connection App Wide Usage
export const appDbConn = () => {

   return mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      port: 3306,
      password: "",
      database: "leviaClinic",
    })

   
}
