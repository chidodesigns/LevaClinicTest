import mysql from "mysql2";

const connectionObj = {
  host: "127.0.0.1",
  user: "root",
  port: 3306,
  password: "",
};

let createdDb = false;

const createDb = async () => {
  if (!createdDb) {
    const connection = mysql.createConnection(connectionObj);
    try {
      //  Create Database
      connection.query(
        "CREATE DATABASE IF NOT EXISTS leviaClinic",
        (err, result) => {
          if (err) throw err;
          console.log("Database Created");
          createdDb = true;
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
};

export default async () => {

  await createDb();

  if(createdDb){
    const connection = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        port: 3306,
        password: "",
        database: "leviaClinic",
      });

      connection.connect((err) => {
        try {
          if (err) throw err;
    
          console.log("Error Connecting " + err);
    
          console.log("Connected As ID " + connection.threadId);
        } catch (error) {
          console.log(error);
        }
      });
  }


};
