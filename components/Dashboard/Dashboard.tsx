import React from 'react'
import { ImBooks } from 'react-icons/im'
import Overview from './Overview'
import SalesChart, { SalesData } from './Charts/SalesChart';



const Dashboard = () => {
    const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const time = date.toLocaleTimeString();
  let monthInWords = "";
  switch (month) {
    case 1:
      monthInWords = "January";
      break;
    case 2:
      monthInWords = "February";
      break;
    case 3:
      monthInWords = "March";
      break;
    case 4:
      monthInWords = "April";
      break;
    case 5:
      monthInWords = "May";
      break;
    case 6:
      monthInWords = "June";
      break;
    case 7:
      monthInWords = "July";
      break;
    case 8:
      monthInWords = "August";
      break;
    case 9:
      monthInWords = "September";
      break;
    case 10:
      monthInWords = "October";
      break;
    case 11:
      monthInWords = "November";
      break;
    case 12:
      monthInWords = "December";
      break;
    default:
      monthInWords = "";
  }

  const mockSalesData: SalesData[] = [
    { name: "Jan", sales: 3000, revenue: 26200 },
    { name: "Feb", sales: 2800, revenue: 24000 },
    { name: "Mar", sales: 3500, revenue: 27000 },
    { name: "Apr", sales: 4000, revenue: 32000 },
    { name: "May", sales: 4200, revenue: 24000 },
    { name: "Jun", sales: 3900, revenue: 31000 },
    { name: "Jul", sales: 4100, revenue: 33000 },
    { name: "Aug", sales: 4300, revenue: 65000 },
    { name: "Sep", sales: 3700, revenue: 30000 },
    { name: "Oct", sales: 3600, revenue: 29500 },
    { name: "Nov", sales: 3800, revenue: 31500 },
    { name: "Dec", sales: 4500, revenue: 37000 }
  ];


   return(
    <section className='min-h-screen  pl-[20em] p-8 inter bg-gray-200/30 rounded-2xl '>
<div className='flex items-baseline justify-between mb-4'>
        <h1 className='text-5xl mb-1'>Hello, <span className='text-[#15278c]'>Fenuku</span></h1>
         <p className='text-gray-700'>{monthInWords} {day}, {year} &nbsp;<span className='border-l-2 border-black'> </span> {time}</p>
</div>
      
      <div className='bg-white p-4 rounded-2xl w-fit'>
      <Overview/>
       </div>
       <div className='mt-4'>
         <SalesChart data={mockSalesData} />
         </div>
    </section>
  )
}

export default Dashboard