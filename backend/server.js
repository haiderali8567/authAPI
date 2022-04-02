import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// connecting to mongoDB
connectDb();

app.get("/", (req, res) => {
  res.send("hello");
});
// redirecting the users to the routes
app.use("/api/users", userRouter);

app.listen(PORT, console.log("app is running"));