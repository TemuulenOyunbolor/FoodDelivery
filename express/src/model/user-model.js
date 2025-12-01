import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  phone: Number,
  password: String,
  address: String,
  role: { type: String, Enum: ["USER", "ADMIN"], default: "USER" },
  orderedFoods: [{ type: ObjectId, ref: "foodOrder" }],
  ttl: Date,
  isVerifid: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const userModel = mongoose.model("user", userSchema);
