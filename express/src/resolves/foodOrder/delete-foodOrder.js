import { foodOrderModel } from "../../model/foodOrder-model.js";

export const deleteFoodOrder = async (req, res) => {
  const newFood = req.body;

  try {
    const dbuser = await foodOrderModel.findByIdAndDelete(req.body.id, {
      user: req.body.user,
      totalprice: req.body.totalprice,
      foodOrderItems: req.body.foodOrderItems,
      status: req.body.status,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    });
    res.status(200).json(dbuser);
  } catch (error) {
    res.send(error);
  }
};
