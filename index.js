const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/api/name", (req, res) => {
  const { firstName, lastName } = req.body;
  res.json({ message: `Hello ${firstName} ${lastName}` });
});

app.post("/api/add", (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ message: num1 + num2 });
});

app.post("/api/subtract", (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ message: num1 - num2 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
