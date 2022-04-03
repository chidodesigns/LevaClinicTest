import mysql from "mysql2";


export const createTestDb = () => {
  try {
    let conn = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      port: 3306,
      password: "",
    });

    conn.query(
      "CREATE DATABASE IF NOT EXISTS levaClinic",
      (err, result) => {
        if (err) throw err;
      }
    );
    conn.end();
  } catch (error) {
      console.log(error)
  }
};

//  Standard DB Connection App Wide Usage
export const appDbConn = () => {
  return mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    port: 3306,
    password: "",
    database: "levaClinic",
  });
};

export const createTestDbTables = () => {
   try {
     let conn = appDbConn()
         //  Create Database
    const createCustomersTableSql =
    "CREATE TABLE IF NOT EXISTS customers ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255) ) DEFAULT CHARACTER SET utf8 ENGINE=InnoDB";

  const createCustomersMedInfoTableSql =
    "CREATE TABLE IF NOT EXISTS customers_medical_info ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, medical_condtions JSON, mental_history VARCHAR(10), medical_history JSON, news_updates VARCHAR(10), privacy_policy VARCHAR(10), customerid INT ) DEFAULT CHARACTER SET utf8 ENGINE=InnoDB";

  conn.query(createCustomersTableSql, (err, result) => {
    if (err) throw err;
  });

  conn.query(createCustomersMedInfoTableSql, (err, result) => {
    if (err) throw err;
  });
   } catch (error) {
     console.log(error)
   }
}

export const destroyTestDb = () => {
    try {
        let conn = appDbConn()
        //  Create Database
        conn.query(
          "DROP DATABASE levaClinic",
          (err, result) => {
            if (err) throw err;
          }
        );
        conn.end()
      }catch(error){
        console.log(error)
      }
}