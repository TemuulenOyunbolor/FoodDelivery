import express from "express";
import { getFood } from "../resolves/food/get-food.js";
import { createFood } from "../resolves/food/create-food.js";
import { updateFood } from "../resolves/food/update-food.js";
import { deleteFood } from "../resolves/food/delete-food.js";
import { getFindByCatecoryId } from "../resolves/food/findId.js";

export const foodRouter = express.Router();

foodRouter.get(`/findByCategoryId/:id`, getFindByCatecoryId);
foodRouter.get(`/`, getFood);
foodRouter.post("/", createFood);
foodRouter.put("/", updateFood);
foodRouter.delete("/", deleteFood);
