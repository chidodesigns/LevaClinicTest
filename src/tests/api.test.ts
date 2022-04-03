let request = require("supertest");
const express = require("express");
const app = express();

request = request("http://localhost:8000");

describe("GET /api/customer TEST CUSTOMER ROUTE", function () {
  it("responds with json", function (done) {
    request
      .get("/api/customer")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toMatchObject({
          message: "Hello From Leva Clinic",
        });
        done();
      })
      .catch((err) => done(err));
  });
});

describe("POST /api/medical-history TEST CUSTOMER MEDICAL INFO REGISTRATION", function () {
  it("responds with json", function (done) {
    request
      .post("/api/customer/medical-history")
      .send({
        medicalConditions: ["Abdominal Pain", "Facial Pain"],
        mentalHistory: "yes",
        medicalHistory: ["Kidney", "Liver"],
        newsUpdate: "true",
        privacy_policy: "true",
        customerId: 1,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toMatchObject({
          message: "Successfully Created Users Medical Information",
        });
        done();
      })
      .catch((err) => done(err));
  });
});
