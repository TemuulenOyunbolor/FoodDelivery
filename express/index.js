import express from "express";
import { userRouter } from "./src/routers/user.js";
import mongoose from "mongoose";
import { foodRouter } from "./src/routers/food.js";
import { foodOrderRouter } from "./src/routers/foodOrder.js";
import { foodCategoryRouter } from "./src/routers/foodCategory.js";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);

app.use("/food", foodRouter);

app.use("/foodOrder", foodOrderRouter);

app.use("/foodCategory", foodCategoryRouter);
mongoose
  .connect("mongodb+srv://fooddelivery:qwerty123@cluster0.wtrfxbh.mongodb.net/")
  .then(() => console.log("Connected"));
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/users`);
});
