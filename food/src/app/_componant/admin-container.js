import { UpDownIcon } from "../icon/updown";
import { AdminUsers } from "./users";

export const AdminContainer = () => {
  return (
    <div className="w-100% min-h-[100px]  flex flex-col bg-white rounded-2xl border border-gray-200">
      <div className="flex justify-between">
        <div className=" pl-5">
          <h1 className="font-semibold">Orders</h1>
          <p className="text-[12px]">32 items</p>
        </div>
        <div className="pr-5 flex items-center gap-5">
          <div className="border rounded-2xl px-5 ">
            <input type="date" />
          </div>
          <div className="rounded-2xl px-7 flex gap-2 bg-black text-white">
            Change delivery state
            <div className="border rounded-2xl w-10 h-7 flex justify-center bg-white text-black">
              1
            </div>
          </div>
        </div>
      </div>

      <div className="w-100% h-[52px] bg-white flex items-center pl-5 border-t border-gray-200 gap-25">
        <div className="w-12 cursor-pointer ">
          <input type="Checkbox" />
        </div>
        <div className="w-14 flex justify-center "> №</div>
        <div className="w-[214px]  text-gray-400 flex justify-center">
          Costumer
        </div>
        <div className="w-40  text-gray-400">Food</div>
        <div className="flex justify-between w-40  text-gray-400 items-center">
          Date
          <UpDownIcon />
        </div>

        <div className="w-40 text-gray-400 justify-center flex">Total</div>
        <div className="w-[214px] text-gray-400">Delivery Address </div>
        <div className="w-40 justify-between flex items-center p-2 text-gray-400">
          Delivery state <UpDownIcon />
        </div>
      </div>
      <AdminUsers />
    </div>
  );
};
