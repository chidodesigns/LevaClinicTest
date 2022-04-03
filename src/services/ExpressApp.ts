import express, { Application } from "express";
import cors from 'cors'

//  Import Routes
import { CustomerRoute } from "../routes";

export default async (app: Application) => {
  app.use(express.json());
  app.use(cors())
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  //  Add Use Route
  app.use("/api/customer", CustomerRoute)

  return app;
};
