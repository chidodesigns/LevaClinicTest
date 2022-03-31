import express, { Application } from "express";

//  Import Routes

export default async (app: Application) => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  //  Add Use Route

  return app;
};
