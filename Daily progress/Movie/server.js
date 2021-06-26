import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import path from "path";


dotenv.config();

connectDB();

const app = express(); // main

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.use("/api/user", userRoutes);
if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  
}


const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);
