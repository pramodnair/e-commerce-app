import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();
import userRoutes from "./routes/userRoute.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

const port = process.env.NODE_SERVER_PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the backend server");
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
