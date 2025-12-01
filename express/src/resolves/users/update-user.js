import { userModel } from "../../model/user-model.js";

export const updateUser = async (req, res) => {
  try {
    const dbuser = await userModel.findByIdAndUpdate(req.body.id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      address: req.body.address,
      role: req.body.role,
      orderedFoods: req.body.orderedFoods,
      ttl: req.body.ttl,
      isVerifid: req.body.isVerifid,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    });
    res.status(200).json(dbuser);
  } catch (error) {
    res.send(error);
  }
};
