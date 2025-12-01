import { foodModel } from "../../model/food-model.js";

export const updateFood = async (req, res) => {
  try {
    const dbFood = await foodModel.findByIdAndUpdate(req.body.id, {
      foodName: req.body.foodName,
      price: req.body.price,
      image: req.body.image,
      ingredients: req.body.ingredients,
      category: req.body.category,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    });
    res.status(200).json(dbFood);
  } catch (error) {
    res.send(error);
  }
};
