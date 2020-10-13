const mongoose = require("mongoose");
const crypto = require('crypto');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      max: 12,
      unique: true,
      index: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    // this is for the strength of the password
    salt: String,
    role: {
      type: String,
      default: "subscriber",
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
  },
//   this will give detail when user updated in database
  { timestamps: true }
);

// virtual fields
userSchema.virtual('password')
    .set(function(password){
    // create temp variable called  _password
    this._password = password;
    // generate salt
    // salt reference to salt in schema
        this.salt = makeSalt();

    // encrypt password
        this.hashed_password = encryptPassword(password);

})
.get(function(){
    return this._password
})

userSchema.methods = {
    encryptPassword: function(password){
    if(!password) return ''
    try{

    }catch (err){
        return ''
    }
    }
};