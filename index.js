require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const app = express();
const port = 3000;

app.use(cors());

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
