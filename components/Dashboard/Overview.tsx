"use client"
import React, { useEffect, useState } from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { ImBooks } from 'react-icons/im'
import { LuUserRound } from 'react-icons/lu';
import { RiMoneyDollarCircleLine } from 'react-icons/ri'



const themeMap = {
  'green': {
    bg: 'bg-green-100',
    iconBg: 'bg-green-500/20',
    iconText: 'text-green-500'
  },
  'blue': {

    bg: 'bg-blue-100',
    iconBg: 'bg-blue-500/20',
    iconText: 'text-blue-500'
  },
  'yellow': {
    bg: "bg-yellow-300/20",
    iconBg: "bg-yellow-500/30",
    iconText:"text-yellow-500"
  }
  ,
  'red': {
    bg: "bg-red-100",
    iconBg: "bg-red-500/20",
    iconText:"text-red-500"
  }
};
const Overview = () => {
  // const [availableBooks,setAvailableBooks]= useState<any>()
  const [availableBooks,setAvailableBooks]=useState<number | null>()
  const [totalUsers,setTotalUsers]=useState<number | null>()
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchAvailableBooks = async () => {
      try {
        const books = await fetch(`${backendUrl}/api/v1/admin/books/get-available`, {
          method: "GET",
          credentials:"include"
        });
        // const orders = await fetch(`${backendUrl}/api/v1/admin/orders/total-sales`,
          
        // );
        const users = await fetch(`${backendUrl}/api/v1/admin/get-users`, {
          method: "GET",
          credentials:"include"
        });
        const BooksData = await books.json();
        const UsersData = await users.json();
        console.log(UsersData)
        // const OrderData = await orders.json();
        // Adjust this line based on your actual response structure
        setAvailableBooks(BooksData);
        setTotalUsers(UsersData.length);
        // setTotalOrders(orders);
      } catch (err: unknown) {
        console.log("ERROR FETCHING AVAILABLE BOOKS: ", err);
      }
    };
    fetchAvailableBooks();
  }, [backendUrl]);


  const mockOverviewData = {
  totalBooks: {
    icon: <ImBooks />,
    label: "Books available",
    value: availableBooks!==null?availableBooks:66,
    theme: "yellow"
  },
  totalOrders: {
    icon: <CiShoppingCart />,
    label: "Total orders",
    value: 162,
    theme: "blue"
  },
  totalRevenue: {
    icon: <RiMoneyDollarCircleLine />,
    label: "Total revenue",
    value: "GHS169,005",
    theme: "green"
  },
  totalUsers: {
    icon: <LuUserRound />,
    label: "Total users",
    value: totalUsers!==null?totalUsers:"3348",
    theme: "red"
  }
};

  return (
    <div className=' grid grid-cols-4 md:gap-4 rounded-3xl w-full'>
      {Object.entries(mockOverviewData).map(([key, { label, value, theme, icon }],id) => {
        const t = themeMap[theme as keyof typeof themeMap];
        
        return (
          <div
            key={key}
            className={`h-32 cursor-pointer ${t.bg} rounded-3xl overflow-hidden grid grid-cols-[4em_1fr] items-center p-4 pr-[5em] hover:shadow-2xl shadow-black/10 transition-shadow duration-500
            overlap-card
            `}
          style={{transform:`translateX(-${id*30}px)`, zIndex:`4-${id}`}}
          >
            
            <div className={`${t.iconBg} w-12 h-12 flex justify-center items-center rounded-full overflow-hidden`}>
              <span className={`text-3xl ${t.iconText}`}>{icon}</span>
            </div>
            <p className='text-sm font-medium text-right'>{label}<br />
              <span className='text-3xl font-medium text-black'>{value}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Overview