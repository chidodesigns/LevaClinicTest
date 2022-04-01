import express, {Request, Response, NextFunction} from 'express'
import {validate} from 'class-validator'
import { plainToClass } from 'class-transformer'
import { CreateCustomerInput } from '../dto/Customer.dto'
import { AddNewUser } from "../models"

export const CustomerSignUp = async (req: Request, res: Response, next: NextFunction) => {

    //  Destructure Request Body 
    const customerInputs = plainToClass(CreateCustomerInput, req.body)
    //  Validate 
    const inputErrors = await validate(customerInputs, {
        validationError: {target:true}
    })

    if(inputErrors.length > 0){
        return res.status(400).json(inputErrors)
    }
    //  Call MODEL FN and Insert DTO
    const {email, name, password} = customerInputs;
}