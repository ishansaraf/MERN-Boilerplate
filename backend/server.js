import express from "express";
import bodyParser from "body-parser";
import logger from "mongoose";
import mongoose from "mongoose";
import { DB_URI } from "./config/keys.js";

// Importing database models
import User from "./models/users.js";

const app = express();
const router = express.Router();
const PORT = 3001;

// Setting up bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    DB_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected Mongo"))
  .catch(err => console.log(err));

router.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Use routes
app.use("/", router);

app.post("/users/register", (req, res) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  user
    .save()
    .then(response => {
      console.log("Created user!");
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/users/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username }).then(user => {
    if (!user) {
      console.log("No users");
      res.send({ authenticated: false });
    } else if (password == user.password) {
      console.log("YAY");
      const payload = {
        user,
        authenticated: true
      };
      res.send(payload);
    } else {
      console.log("WHY");
      res.send({ authenticated: false });
    }
  });
});

function authenticate(username, password) {
  console.log(username);
  console.log(password);
  User.findOne({ username }).then(user => {
    console.log(user);
    if (!user) {
      console.log("where my user at");
      return { authenticated: false };
    }
    if (password == user.password) {
      console.log("YAY");
      const payload = {
        user,
        authenticated: true
      };
      return payload;
    }
    console.log("NOO");
    return { authenticated: false };
  });
}

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
