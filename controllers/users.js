import { v4 as uuidv4 } from "uuid";

let users = [];

const getAllUsers = (req, res) => {
  res.send(users);
};

const createUser = (req, res) => {
  const user = req.body;

  // When creating a new user, uuidv4 also gives a unique id to each user
  users.push({ ...user, id: uuidv4() });

  res.send(`User with the first name of ${user.firstName} has been created`);
};

const userDetails = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`user with the id ${id} deleted from the database`);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }

  res.send(`user with the id ${id} has been updated`);
};

export { getAllUsers, createUser, userDetails, deleteUser, updateUser };
