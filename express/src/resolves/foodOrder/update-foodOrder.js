import { foodOrderModel } from "../../model/foodOrder-model.js";

export const updateFoodOrder = async (req, res) => {
  const updateOrder = (req, body);
  await foodOrderModel.findByIdAndUpdate(updateOrder.id, {
    status: updateOrder.status,
  });
  res.status(200).json(dbFood);
};
