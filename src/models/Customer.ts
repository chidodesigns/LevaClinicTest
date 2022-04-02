import { appDbConn } from "../services/Database";

export const AddNewUser = (name: string, email: string, password: string, callback ) => {
    try {
        let conn =  appDbConn();
        let user = {
            name: name,
            email: email,
            password: password
        }
        const queryResults = conn.query('INSERT INTO customers SET ?', user, (err, results) => {
            if (err){
                console.log(err);
                throw err;
            }
            return callback(results)
        })
        conn.end()
        return queryResults

    } catch (error) {
        console.log(error)   
        return false
    }
}

export const AddUserMedicalInfo = (medicalConditions: [string], mentalHistory: string, medicalHistory:[string], newsUpdate:string, privacyPolicy:string, customerId:number) => {
    try {
        let conn = appDbConn()
        let userMedicalHistory = {
            medical_condtions: medicalConditions,
            medical_history: medicalHistory,
            news_updates: newsUpdate,
            privacy_policy: privacyPolicy,
            customerid:customerId
        }
        //  @Todo Finish This Off
        const queryResults = conn.query('INSERT INTO customers_medical_info SET')
    } catch (error) {
        
    }
}

//  @NB:  Make The Email A Unique Property On DB
export const CheckUserExist =  (email:string) => {
    try {
        return new Promise((resolve, reject) => {
             let conn = appDbConn()
        let sql = "SELECT id, name, email FROM customers WHERE email = ?";
            const queryResults = conn.query(sql, email, (err, results) => {
                if(err) {
                    console.log(err)
                    throw err;
                }
                resolve(results)
            })
            conn.end()
        })
       
     } catch (error) {
        console.log(error)   
    }
}