require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/db");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});

app.use("/api/todos", require("./routes/todo-route"));

app.get("/health", (req, res) => {
  res.json({ msg: "Up and running..." });
});

app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);
  await dbConnect();
});
