import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [];

// localhost:8000/users
router.get("/", (req, res) => {
  res.send(users);
});

// localhost:8000/users
router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the first name of ${user.firstName} has been created`);
});

// localhost:8000/users/:id
router.put("/:id", (req, res) => {
  res.send("updating an user");
});

// localhost:8000/users/delete
router.delete("/delete", (req, res) => {
  res.send("deleting a user");
});

export default router;
