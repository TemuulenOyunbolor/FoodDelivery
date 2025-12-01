import { AdminContainer } from "../../_componant/admin-container";
import { AdminSideBar } from "../../_componant/admin-sidebar";
import { FirstLogo } from "../../icon/firstlogo";
import { MenuIcon } from "../../icon/foodMenuIcon";
import { OrderIcon } from "../../icon/orderIcon";

export default function Home() {
  return (
    <div className="w-full h-full flex">
      <AdminSideBar />
      <div
        className="w-full h-[1200px] p-5 flex flex-col gap-5"
        style={{ background: "rgba(244, 244, 245, 1)" }}
      >
        <div className="w-full flex justify-end">
          <img src="/Avatar.png"></img>
        </div>
        <AdminContainer />
      </div>
    </div>
  );
}
