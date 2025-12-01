import { foodModel } from "../../model/food-model.js";
export const getFindByCatecoryId = async (req, res) => {
  const dbFood = await foodModel.find({ category: req.params.id });
  console.log(dbFood);
  res.status(200).json(dbFood);
};
