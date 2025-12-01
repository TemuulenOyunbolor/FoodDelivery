export const Payment = ({ price }) => {
  return (
    <div className="bg-white w-135 h-64 rounded-2xl mt-15! flex justify-center items-center">
      <div className="h-[90%] w-121  flex flex-col justify-between">
        <div className="text-[#8b8b90] h-10 text-[23px] w-124 font-semibold flex mr-4  ">
          Payment info
        </div>
        <div className="w-120  h-58  flex justify-around flex-col mt-2 mr-3 ">
          <div className="h-[54%] flex flex-col justify-between ">
            <div className=" h-18  flex flex-col justify-between ">
              <div className="flex justify-between">
                <p className="h-9  flex text-[18px] items-center">Items</p>
                <p>{price}</p>
              </div>
              <div>
                <p className="h-9  text-[18px] flex items-center">Shipping</p>
              </div>
            </div>
            <div className="h-5  flex items-center">
              <div className="w-full border border-dashed border-[#09090B80]"></div>
            </div>
          </div>

          <div className="h-12 mt-2 text-[18px]  ">Total</div>
          <button className="w-full h-10 bg-[#EF4444] cursor-pointer flex items-center justify-center rounded-2xl">
            <p className="text-white font-medium">Checkout</p>
          </button>
        </div>
      </div>
    </div>
  );
};
