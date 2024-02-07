const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});

app.use("/todos", require("./routes/todo-route"));

app.get("/health", (req, res) => {
  res.json({ msg: "Up and running..." });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
