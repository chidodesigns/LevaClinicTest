import express , {Request, Response, NextFunction} from 'express';
import { CustomerSignUp } from '../controllers';
const router = express.Router();

/**
 * SignUp /  Create Customer 
 */

router.post("/signup", CustomerSignUp)