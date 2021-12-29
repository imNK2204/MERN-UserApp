const express = require("express");
const app = express();
app.use(express.json());
const port = 4000;
const mongoose = require("mongoose");

const userModel = require("./models/user");

mongoose
  .connect("mongodb://localhost:27017/dcs")
  .then(() => console.log("mongo db connected"));

app.get("/api/", (req, res) => res.send("Hello Fullstack!"));

// Get list of all users
app.get("/api/list", async (req, res) => {
  const userList = await userModel.find({}, { username: true });

  if (userList.length === 0) {
    return res.json({ data: "no users in fullstack" });
  }

  return res.json({ data: userList });
});

// Register user
app.post("/api/registration", (req, res) => {
  const newUser = req.body;
  userModel.create(newUser);
  return res.json({ data: "registered successfully" });
});

app.put("/api/update/:uname", async (req, res) => {
  const uname = req.params.uname;
  const pass = req.body.password;
  const name = req.body.name;
  const age = req.body.age;

  const updateUser = await userModel.updateOne(
      {password: pass},
      {name: name},
      {age: age}
  );

  return res.json({ data: "Updated successfully" });
});

app.listen(port, () => console.log(`server running on port 4000`));