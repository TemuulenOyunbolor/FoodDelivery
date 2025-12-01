import { foodModel } from "../../model/food-model.js";

export const deleteFood = async (req, res) => {
  const newFood = req.body;

  try {
    const dbuser = await foodModel.findByIdAndDelete(req.body.id);
    res.status(200).json(dbuser);
  } catch (error) {
    res.send(error);
  }
};
