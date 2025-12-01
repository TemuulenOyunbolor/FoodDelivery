import { foodCategoryModel } from "../../model/foodCategory-model.js";

export const updateFoodCategory = async (req, res) => {
  try {
    const dbFood = await foodCategoryModel.findByIdAndUpdate(req.body.id, {
      categoryName: req.body.categoryName,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    });
    res.status(200).json(dbFood);
  } catch (error) {
    res.send(error);
  }
};
