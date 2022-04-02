import { Length } from "class-validator";
import express, { Request, Response, NextFunction } from "express";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { CreateCustomerInput, CreateCustomerMedicalInformation } from "../dto";
import { GeneratePassword, GenerateSalt } from "../utility";
import { AddNewUser, CheckUserExist, AddUserMedicalInfo } from "../models";

export const CustomerSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //  Destructure Request Body
    const customerInputs = plainToClass(CreateCustomerInput, req.body);
    //  Validate
    const inputErrors = await validate(customerInputs, {
      validationError: { target: true },
    });

    if (inputErrors.length > 0) {
      return res.status(400).json(inputErrors);
    }
    //  Call MODEL FN and Insert DTO
    const { email, name, password } = customerInputs;

    //  Hash Incoming Password
    const salt = await GenerateSalt();
    const userPassword = await GeneratePassword(password, salt);

    //  Check If User Exists
    let userExists = false;
    CheckUserExist(email)
      .then((results) => {
        userSolve(results);
      })
      .catch((err) => {
        console.log("Promise Rejection Error:" + err);
      });

    const userSolve = (results) => {
      if (results.length >= 1) {
        userExists = true;
        return res
          .status(409)
          .json({ message: "A user with the provided email ID" });
      }
    };

    //  Add User To DB
    AddNewUser(name, email, userPassword, (result) => {
      const newCustomer = result.insertId;
      if (newCustomer && !userExists) {
        return res
          .status(201)
          .json({ message: "User Successfully Created", user: newCustomer });
      }
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({
        message:
          "We had an internal server error, we are so sorry, we will be back!",
      });
  }
};

export const CustomerRegisterMedicalHistory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    medicalConditions,
    mentalHistory,
    medicalHistory,
    newsUpdate,
    privacyPolicy,
    customerId,
  } = <CreateCustomerMedicalInformation>req.body;
  //console.log(req.body)
  // return
  AddUserMedicalInfo(
    JSON.stringify(medicalConditions),
    mentalHistory,
    JSON.stringify(medicalHistory),
    newsUpdate,
    privacyPolicy,
    customerId
  )
    .then((results) => {
      console.log("Add User Medical Info", results);
      return res
        .status(201)
        .json({ message: "Successfully Created Users Medical Information" });
    })
    .catch((err) => {
      console.log("Promise Rejection Error:" + err);
    });
};
