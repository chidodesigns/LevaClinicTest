import express , {Request, Response, NextFunction} from 'express';
import {CustomerRegisterMedicalHistory } from '../controllers';
const router = express.Router();

/**
 * SignUp /  Create Customer 
 */

// router.post("/signup", CustomerSignUp)

router.post("/medical-history", CustomerRegisterMedicalHistory)

router.get('/', (req: Request, res:Response, next:NextFunction) => {
    return res.status(200).json({message: "Hello From Leva Clinic"})
})

export { router as CustomerRoute}