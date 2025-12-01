import { userModel } from "../../model/user-model.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  console.log("Create new user");

  const newUser = req.body;

  const hashedPassword = bcrypt.hashSync(newUser.password, 10);

  try {
    await userModel.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
      address: req.body.address,
      role: "USER",
      isVerifid: true,
    });
    res.send("New user");
  } catch (error) {
    res.send(error);
  }
};
