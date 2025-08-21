import React from 'react'
import Overview from './Overview'
import SalesChart, { SalesData } from './Charts/SalesChart';
import TopSellingBooksChart, { BookData } from './Charts/TopSelling';
import BookList from './BookList';
import OrderList from './OrderList';



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
    { name: "Jan", sales: 20000, revenue: 26200 },
    { name: "Feb", sales: 18300, revenue: 24000 },
    { name: "Mar", sales: 15080, revenue: 27000 },
    { name: "Apr", sales: 40100, revenue: 32000 },
    { name: "May", sales: 42020, revenue: 24000 },
    { name: "Jun", sales: 39100, revenue: 31000 },
    { name: "Jul", sales: 41100, revenue: 33000 },
    { name: "Aug", sales: 43100, revenue: 45000 },
    { name: "Sep", sales: 37200, revenue: 30000 },
    { name: "Oct", sales: 36004, revenue: 29500 },
    { name: "Nov", sales: 23800, revenue: 31500 },
    { name: "Dec", sales: 14500, revenue: 37000 }
  ];

  const mockTopSelling: BookData[] = [
    { title: "Raskuku and the Dragon Chicken", sales: 3640 },
    { title: "The Lost Scrolls", sales: 3250 },
    { title: "Journey to Bethlehem", sales: 4100 },
    { title: "Wisdom of Solomon", sales: 2950 },
    { title: "Prophet's Path", sales: 3800 },
    { title: "Children of Jericho", sales: 2700 },
    { title: "The Olive Tree", sales: 3300 },
    { title: "Book of Miracles", sales: 3550 },
    { title: "Desert Wanderers", sales: 3100 },
    { title: "The Shepherd's Tale", sales: 2880 }
  ]

  return (
    <>
      const 
      <section className='relative min-h-screen ml-[18em] mt-8  p-8 inter bg-gray-200/30 rounded-2xl '>
        <div className='flex items-baseline justify-between mb-4'>
        <h1 className='text-5xl mb-1'>Hello, <span className='text-[#15278c]'>Fenuku</span></h1>
         <p className='text-gray-700'>{monthInWords} {day}, {year} &nbsp;<span className='border-l-2 border-black'> </span> {time}</p>
</div>
      
     
      <Overview/>
       <div className=' grid grid-cols-2 gap-8 grid-rows-auto items-end-safe'>
         <SalesChart data={mockSalesData} />
         <TopSellingBooksChart data={mockTopSelling}/>
         </div>
        <div className='mt-8 grid grid-cols-[1.5fr_1fr] grid-rows-2 gap-8'>
          <div className='shadow-md p-6 rounded-2xl bg-white row-span-2 h-auto'>
            <OrderList />
          </div>
      <div className='shadow-md p-6 rounded-2xl bg-white h-auto'>
            <BookList />
          </div>
          </div>
      </section>
    </>
  )
}

export default Dashboard