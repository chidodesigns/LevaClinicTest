import { AddUserMedicalInfo } from "../models";

const userMedicalInfoDto = {
    medicalConditions: ["Abdominal Pain", "Facial Pain"],
    mentalHistory: "yes",
    medicalHistory: ["Kidney", "Liver"],
    newsUpdate: "true",
    privacy_policy: "true",
    customerId: 1
}

describe("Medical History Signup",  () => {
    it("Should resolve with a message", () => {
        return AddUserMedicalInfo(
          JSON.stringify(userMedicalInfoDto.medicalConditions),
          userMedicalInfoDto.mentalHistory,
          JSON.stringify(userMedicalInfoDto.medicalHistory),
          userMedicalInfoDto.newsUpdate,
          userMedicalInfoDto.privacy_policy,
          userMedicalInfoDto.customerId
          ).then((results) => {
            expect(results).toEqual({"affectedRows": 1, "fieldCount": 0, "info": "", "insertId": 1, "serverStatus": 2, "warningStatus": 0})
          })
    })
})
