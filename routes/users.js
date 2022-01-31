import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 31,
  },

  {
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
  },
];

// localhost:8000/users
router.get("/", (req, res) => {
  res.send(users);
});

// localhost:8000/users
router.post("/", (req, res) => {
  const user = req.body
  users.push(user)
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
