import { appDbConn } from "../services/Database";

export const AddNewUser = async (name: string, email: string, password: string, ) => {
    try {
        let conn = await appDbConn();
        let user = {
            name: name,
            email: email,
            password: password
        }
      
        const queryResults = conn.query('INSERT INTO customers SET ?', user, (err, result) => {
            if (err){
                console.log(err);
                throw err;
            }
        })
        console.log(queryResults)
        return queryResults

    } catch (error) {
        
    }
}