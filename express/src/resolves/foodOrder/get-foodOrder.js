import { foodOrderModel } from "../../model/foodOrder-model.js";
export const getFoodOrder = async (req, res) => {
  const dbFood = await foodOrderModel.find().populate("user");
  res.status(200).json(dbFood);
};
