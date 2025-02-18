const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String },
  nationality: { type: String },
  birthDate: { type: String },
  isAdmin: { type: Boolean },
  isSeller: { type: Boolean },
  isCustomer: { type: Boolean },
  isShipper: { type: Boolean },
  isRestricted: { type: Boolean }
});

const Users = mongoose.model("User", UserSchema);
module.exports = Users;
