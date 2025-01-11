"use client";

import Image from "next/image";
import logo from "../../public/images/logo.svg";
import data from '@/app/data.json';

import {  
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell
 } from 'recharts'; 


 interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}


 // Custom Tooltip Component
const CustomTooltip: React.FC<CustomTooltipProps>  = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-darkBrown text-white py-2 px-3 rounded-lg text-[14px]">
        <p style={{ margin: 0, fontWeight: 'bold' }}>${payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};


  

export default function Home() {

  const maxAmount = Math.max(...data.map( (items) => items.amount ));
  console.log("I am the highest value", maxAmount)

  return (
    <div className="w-full flex flex-col gap-y-8">
     <div className="flex justify-between w-[80%] lg:w-[40%] mx-auto items-center p-6 rounded-2xl text-white bg-soft_red   ">
       <div className="flex flex-col gap-y-2">
        <p>My balance</p>
        <h3 className="text-2xl font-bold">$921.48</h3>
       </div>
       <span>
          <Image src={logo} alt="logo img" />
       </span>
      </div>

      <div className=" w-[80%] lg:w-[40%] mx-auto  p-6 rounded-2xl bg-white ">
        <div>
          <h1 className="text-darkBrown font-bold text-2xl"> Spending  - Last 7 days</h1>
        </div>
        <div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
          >
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />}  />
            <Bar 
            dataKey="amount"
            isAnimationActive={false} 
            >
              {
                data.map( (bars, index) => (
                  <Cell 
                    key={`cell ${index}`}
                    fill={bars.amount === maxAmount?  'hsl(186, 34%, 60%)' : "hsl(10, 79%, 65%)"}
                  />
                ) )
              }
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        </div>
        <hr className="my-5" />
        <div className="flex justify-between items-center">
          <span>
            <p className="text-mediumBrown ">Total this month</p>
            <h3  className="text-darkBrown font-bold text-2xl md:text-4xl">$478.33</h3>
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
