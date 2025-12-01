import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const foodSchema = new Schema({
  id: ObjectId,
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  category: { type: ObjectId, ref: "foodCategory" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const foodModel = mongoose.model("food", foodSchema);
