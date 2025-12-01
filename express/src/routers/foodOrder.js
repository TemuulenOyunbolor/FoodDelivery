import express from "express";

import { getFoodOrder } from "../resolves/foodOrder/get-foodOrder.js";
import { createFoodOrder } from "../resolves/foodOrder/create-foodOrder.js";
import { updateFoodOrder } from "../resolves/foodOrder/update-foodOrder.js";
import { deleteFoodOrder } from "../resolves/foodOrder/delete-foodOrder.js";

export const foodOrderRouter = express.Router();

foodOrderRouter.get(`/`, getFoodOrder);
foodOrderRouter.post("/", createFoodOrder);
foodOrderRouter.put("/", updateFoodOrder);
foodOrderRouter.delete("/", deleteFoodOrder);
