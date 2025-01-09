import Image from "next/image";
import logo from "../../public/images/logo.svg";
import data from '@/app/data.json';

import {  
  BarChart, Bar, ResponsiveContainer
 } from 'recharts'; 
  

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-y-8">
     <div className="flex justify-between w-[40%] mx-auto items-center p-6 rounded-2xl text-white bg-soft_red   ">
       <div className="flex flex-col gap-y-2">
        <p>My balance</p>
        <h3 className="text-2xl font-bold">$921.48</h3>
       </div>
       <span>
          <Image src={logo} alt="logo img" />
       </span>
      </div>

      <div className=" w-[40%] mx-auto  p-6 rounded-2xl bg-white ">
        <div>
          <h1 className="text-darkBrown font-bold text-2xl"> Spending  - Last 7 days</h1>
        </div>
        <div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>

        </div>
        <hr className="my-5" />
        <div className="flex justify-between items-center">
          <span>
            <p className="text-mediumBrown ">Total this month</p>
            <h3  className="text-darkBrown font-bold text-3xl">$478.33</h3>
          </span>

          <span>
            <p className="text-darkBrown font-semibold">+2.4%</p>
            <p className="text-mediumBrown ">from last month</p>
          </span>

        </div>

      </div>
      

    </div>
   
  );
}
