const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ msg: "hello from server..." });
});

app.get("/check", (req, res) => {
  res.json({ msg: "hello from server with deployment..." });
});

app.get("/health", (req, res) => {
  res.json({ msg: "Up and running..." });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
