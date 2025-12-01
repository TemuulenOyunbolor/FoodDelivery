import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const foodOrderItem = new Schema({
  food: { type: ObjectId, ref: "food" },
  quatity: Number,
});

const foodOrderSchema = new Schema({
  id: ObjectId,
  user: { type: ObjectId, ref: "user" },
  totalprice: Number,
  foodOrderItems: foodOrderItem,
  status: { type: String, Enum: ["PENDING", "CANCELED", "DELIVERED"] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const foodOrderModel = mongoose.model("foodOrder", foodOrderSchema);
