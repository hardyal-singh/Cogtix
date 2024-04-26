import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";
import env from "dotenv";

env.config()
const app = express()
const corsOptions = {
    origin:process.env.FRONTEND_URL, // Specify your frontend application's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

//import userRoutes here...
app.use("/api/v1/user", userRoutes);

export default app;