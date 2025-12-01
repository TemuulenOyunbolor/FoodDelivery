import express from "express";
import { getFoodCategory } from "../resolves/foodCategory/get-foodCategory.js";
import { createFoodCategory } from "../resolves/foodCategory/create-foodCategory.js";
import { updateFoodCategory } from "../resolves/foodCategory/update-foodCategory.js";
import { deleteFoodCategory } from "../resolves/foodCategory/delete-foodCategory.js";

export const foodCategoryRouter = express.Router();

foodCategoryRouter.get(`/`, getFoodCategory);
foodCategoryRouter.post("/", createFoodCategory);
foodCategoryRouter.put("/", updateFoodCategory);
foodCategoryRouter.delete("/", deleteFoodCategory);
