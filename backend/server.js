import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the backend server");
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});