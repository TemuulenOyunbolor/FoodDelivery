import { foodOrderModel } from "../../model/foodOrder-model.js";

export const createFoodOrder = async (req, res) => {
  const newFoodOrder = req.body;

  try {
    await foodOrderModel.create({
      user: req.body.user,
      totalprice: req.body.totalprice,
      foodOrderItems: req.body.foodOrderItems,
      status: req.body.status,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    });
    res.send("New FoodOrder");
  } catch (error) {
    res.send(error);
  }
};
