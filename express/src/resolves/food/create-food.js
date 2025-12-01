import { foodModel } from "../../model/food-model.js";

export const createFood = async (req, res) => {
  const newFood = req.body;

  try {
    await foodModel.create({
      foodName: req.body.foodName,
      price: req.body.price,
      image: req.body.image,
      ingredients: req.body.ingredients,
      category: req.body.category,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    });
    res.send("New Food");
  } catch (error) {
    res.send(error);
  }
};
