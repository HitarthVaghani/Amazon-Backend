const { userSchema } = require("../models");



//----------------- userExist request to check user exist or not  ---------------//

const userExist = (email) => {
  return userSchema.findOne({ email });
};



//----------------- add request to add new user ---------------//

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



//----------------- get request to get all user ---------------//

const getUser = () => {
  return userSchema.find();
};



//----------------- delete request to delete user ---------------//

const deleteUser = (id) => {
  return userSchema.findByIdAndDelete(id);
};



//----------------- update request to edit user's data ---------------//

const updateUser = (id, body) => {
  return userSchema.findByIdAndUpdate(id, body);
};

module.exports = { userExist, addUser, getUser, deleteUser, updateUser };
