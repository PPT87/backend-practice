import express from "express";
import { getAllUsers, createUser, userDetails, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// localhost:8000/users => list of all users
router.get("/", getAllUsers);

// localhost:8000/users => create a new user
router.post("/", createUser);

// localhost:8000/users/:id => get info for 1 person
router.get("/:id", userDetails);

// localhost:8000/user/:id => delete a user
router.delete("/:id", deleteUser);

// localhost:8000/user/:id => update a user
router.patch("/:id", updateUser);

export default router;
