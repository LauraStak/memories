import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoute from "./routes/posts.js";

const app = express();
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use(cors());

app.use("/posts", postRoute);

mongoose.connect("mongodb://localhost:27017/memoriesdb");

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on port 5000");
});
