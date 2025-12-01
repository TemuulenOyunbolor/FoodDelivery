import express from "express";
import { getUser } from "../resolves/users/get-user.js";
import { createUser } from "../resolves/users/create-user.js";
import { updateUser } from "../resolves/users/update-user.js";
import { deleteUser } from "../resolves/users/delete-user.js";
import { login } from "../resolves/users/login-user.js";

export const userRouter = express.Router();

userRouter.get(`/`, getUser);
userRouter.post("/", createUser);
userRouter.put("/", updateUser);
userRouter.delete("/", deleteUser);
userRouter.post("/login", login);
