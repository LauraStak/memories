import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoute from "./routes/posts.js";

const app = express();

app.use("/posts", postRoute);

app.use(cors());

mongoose.connect("mongodb://localhost:27017/memoriesdb");

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on port 5000");
});
