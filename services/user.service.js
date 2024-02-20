const { userSchema } = require("../models");

const userExist = (email) => {
  return userSchema.findOne({ email });
};

const addUser = (body) => {
  const user = new userSchema({
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    password: body.password,
    role: body.role,
  });

  return user.save(body);
};

const getUser = () => {
  return userSchema.find();
};

const deleteUser = (id) => {
  return userSchema.findByIdAndDelete(id);
};

const updateUser = (id, body) => {
  return userSchema.findByIdAndUpdate(id, body);
};

module.exports = { userExist, addUser, getUser, deleteUser, updateUser };
