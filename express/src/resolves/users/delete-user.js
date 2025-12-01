import { userModel } from "../../model/user-model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req, res) => {
  const token = req.headers.authorization;

  try {
    jwt.verify(token, "secret-key");
    const dbuser = await userModel.findByIdAndDelete(req.body.id);
    res
      .status(200)
      .json({ message: "user deleted successfully", deletedID: dbuser });
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
};
