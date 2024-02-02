// npm install express
// npm install nodemon
// change package.json to allow for node running indexe.js("type": "module")
// adjust scripts to allow for running nodemon in dev and node in production
// "dev": "nodemon api/index.js", - npm run dev
// "start": "node api/index.js"   - npm run start

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// app.get("/test", (req, res) => {
//   res.json({ message: "API is working!" });
// });
app.use("/api/user", userRoutes);
