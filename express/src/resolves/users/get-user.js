import { userModel } from "../../model/user-model.js";
export const getUser = async (req, res) => {
  const dbUser = await userModel.find();
  res.status(200).json(dbUser);
};
