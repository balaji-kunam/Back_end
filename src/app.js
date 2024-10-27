import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import  userRouter from "./Routers/userRouter.js";
 

const app = express();

//build in middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(cookieParser());

app.use("/api/v1/users",userRouter)



export default app;
