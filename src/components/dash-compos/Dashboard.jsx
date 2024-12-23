"use client"
import Link from "../../../node_modules/next/link";

const Dashboard = () => {
  
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-20 gap-7 items-center w-fit h-fit py-[60px]">
        <Link  href="/dashboard/addProduct" className=" w-[290px] h-[90px] rounded-md bg-center bg-cover">
          <div className="bg-green-100 shadow-lg flex justify-around items-center w-full h-full backdrop-blur-[1px] rounded-md" >
            <p className="text-green-600 font-semibold text-[20px]">Add Product</p>
          </div>
        </Link>
        <Link  href="/dashboard/productList" className=" w-[290px] h-[90px] rounded-md bg-center bg-cover">
          <div className="bg-red-100 shadow-lg flex justify-around items-center w-full h-full backdrop-blur-[1px] rounded-md" >
            <p className="text-red-600 font-semibold text-[20px]">Product List</p>
          </div>
        </Link>
        <Link  href="/dashboard/orders" className=" w-[290px] h-[90px] rounded-md bg-center bg-cover">
          <div className="bg-blue-100 shadow-lg flex justify-around items-center w-full h-full backdrop-blur-[1px] rounded-md" >
            <p className="text-blue-600 font-semibold text-[20px]">Orders</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;