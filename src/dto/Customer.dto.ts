import { IsEmail, IsEmpty, Length } from "class-validator";

export class CreateCustomerInput {

    @Length(3,16)
    name: string

    @IsEmail()
    email: string

    @Length(6,12)
    password: string

}

export interface CreateCustomerMedicalInformation {
    medicalConditions: string;
    mentalHistory: string;
    medicalHistory:string;
    newsUpdate: string;
    privacyPolicy:string
    customerId: number
}
