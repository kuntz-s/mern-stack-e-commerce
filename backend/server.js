import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config(); //allow to use environment variables on our project

connectDB(); //connecting the database when starting the server

const app = express();

//access json body objects
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(
    `app is running properly in ${process.env.NODE_ENV} mode in port ${PORT}`
  )
);

app.get("/", (req, res) => {
  res.send("api is running ");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes)


//setting up the middleware (function that will the receive the Request and Response objects. As a third argument you have another function which you should call once your middleware code completed.)

app.use(notFound);

app.use(errorHandler);
