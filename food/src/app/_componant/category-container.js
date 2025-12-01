import { Food } from "./category-food";

export const Category = ({ foodName, totalfood }) => {
  return (
    <div className="flex items-center border gap-2 px-4 py-2 justify-center rounded-2xl cursor-pointer">
      <h1 className="font-semibold">{foodName}</h1>
      <div className="bg-black px-4  rounded-2xl text-white flex items-center justify-center">
        {totalfood}
      </div>
    </div>
  );
};
