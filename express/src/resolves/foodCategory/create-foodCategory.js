import { foodCategoryModel } from "../../model/foodCategory-model.js";

export const createFoodCategory = async (req, res) => {
  const newFoodOrder = req.body;

  try {
    await foodCategoryModel.create({
      categoryName: req.body.categoryName,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    });
    res.send("New FoodCategory");
  } catch (error) {
    res.send(error);
  }
};
