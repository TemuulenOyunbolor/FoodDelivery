import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const foodCategorySchema = new Schema({
  id: ObjectId,
  categoryName: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const foodCategoryModel = mongoose.model(
  "foodCategory",
  foodCategorySchema
);
