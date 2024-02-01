// npm install express
// npm install nodemon
// change package.json to allow for node running indexe.js("type": "module")
// adjust scripts to allow for running nodemon in dev and node in production
// "dev": "nodemon api/index.js", - npm run dev
// "start": "node api/index.js"   - npm run start

import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
