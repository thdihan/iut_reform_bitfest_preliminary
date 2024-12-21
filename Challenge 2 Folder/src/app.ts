import express, { Application } from "express";
import router from "./app/router";

const app: Application = express();

//parsers
app.use(express.json());

// application routes
app.use("/api", router);

export default app;
