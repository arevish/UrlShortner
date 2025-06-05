import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortCode : String,
    longUrl : String
})

// const userSchema = new mongoose.Schema({
//   name: { type: String },
//   email: { type: String },
//   password: { type: String },
//   age: { type: String },
//   phone: {type: Number},
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export const User = mongoose.model("user", userSchema);
export const Url = mongoose.model("shortURL", urlSchema);
