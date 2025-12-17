import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://127.0.0.1:3000",
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);

export default app;
