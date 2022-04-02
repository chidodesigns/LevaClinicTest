import express, { Application } from "express";

//  Import Routes
import { CustomerRoute } from "../routes";

export default async (app: Application) => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  //  Add Use Route
  app.use("/customer", CustomerRoute)

  return app;
};
