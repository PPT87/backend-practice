import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

// localhost:8000/users => list of all users
router.get("/", (req, res) => {
  res.send(users);
});

// localhost:8000/users => create a new user
router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the first name of ${user.firstName} has been created`);
});

// localhost:8000/users/:id => get info for 1 person
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

// localhost:8000/user/:id => delete a user
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`user with the id ${id} deleted from the database`)
});

export default router;
