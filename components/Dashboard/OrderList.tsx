import { number } from 'framer-motion';
import { td } from 'framer-motion/client';
import React from 'react'

type status = "Paid" | "Pending" | "Completed"|"In-cart";

interface statusThemes{
  "Paid": "bg-green-300",
  "Completed":"bg"
}
interface orderList{
  orderId: string,
  customerName: string,
  totalAmount: number,
  numberOfBooks:number
  Date: string,
  Status: status
}

const mockOrderlIst: orderList[] = [
  {
    orderId: "2908782635",
    customerName: "Fenuku Reynolds",
    Date: new Date().toLocaleDateString(),
    numberOfBooks: 12,
    totalAmount: 130,
    Status: "Paid"
  },
  {
    orderId: "2908782636",
    customerName: "Ama Boateng",
    Date: new Date().toLocaleDateString(),
    numberOfBooks: 5,
    totalAmount: 55,
    Status: "Pending"
  },
  {
    orderId: "2908782637",
    customerName: "Kwame Mensah",
    Date: new Date().toLocaleDateString(),
    numberOfBooks: 8,
    totalAmount: 80,
    Status: "Completed"
  },
  {
    orderId: "2908782638",
    customerName: "Akosua Owusu",
    Date: new Date().toLocaleDateString(),
    numberOfBooks: 3,
    totalAmount: 30,
    Status: "In-cart"
  },
  {
    orderId: "2908782639",
    customerName: "Yaw Adomako",
    Date: new Date().toLocaleDateString(),
    numberOfBooks: 10,
    totalAmount: 100,
    Status: "Paid"
  },
  {
    orderId: "2908782640",
    customerName: "Esi Asante",
    Date: new Date().toLocaleDateString(),
    numberOfBooks: 7,
    totalAmount: 70,
    Status: "Pending"
  },
  {
    orderId: "2908782641",
    customerName: "Kojo Frimpong",
    Date: new Date().toLocaleDateString(),
    numberOfBooks: 6,
    totalAmount: 60,
    Status: "Completed"
  },
  {
    orderId: "2908782642",
    customerName: "Abena Serwaa",
    Date: new Date().toLocaleDateString(),
    numberOfBooks: 4,
    totalAmount: 40,
    Status: "In-cart"
  },
  {
    orderId: "2908782643",
    customerName: "Kofi Owusu",
    Date: new Date().toLocaleDateString(),
    numberOfBooks: 9,
    totalAmount: 90,
    Status: "Paid"
  },
  {
    orderId: "2908782644",
    customerName: "Mansa Ofori",
    Date: new Date().toLocaleDateString(),
    numberOfBooks: 2,
    totalAmount: 20,
    Status: "Pending"
  }
]

function getStatusClass(status: status): string {
  switch (status) {
    case "Paid":
      return "text-blue-600";
    case "Pending":
      return "text-yellow-400";
    case "Completed":
      return "text-green-500";
    case "In-cart":
      return "text-gray-600";
    default:
      return "";
  }
}
const OrderList = () => {
  return (
    <div className=''>
      <h1 className='text-2xl text-[#15278c] font-semibold'>Orders</h1>
    <table className='w-full text-left '>
      <thead className=''>
          <tr className='border-b-2 border-b-gray-700/60 '>
            <th></th>
      <th>Order ID</th>
      <th className='py-2'>Customer name</th>
      <th className='py-2'>Total Amount</th>
        <th className='py-2'>Number of books</th>
        <th className='py-2'>Date</th>
        <th className='py-2 '>Status</th>
        </tr>
      </thead>
      <tbody className='text-sm font-medium'>
          {mockOrderlIst.map(({ customerName, Status, orderId, totalAmount,Date,numberOfBooks }, id) => (
            <tr 
            key={orderId}
              className=' border-b last:border-none border-b-gray-700/30'>
              <td className='py-8'>#{id+1 }</td>
              <td>{orderId}</td>
              <td>{customerName}</td>
              <td className='text-right px-4'>{totalAmount}</td>
              <td className="text-right px-8">{numberOfBooks}</td>
              <td>{Date}</td>
              <td className={`${getStatusClass(Status)} font-semibold`} >{ Status}</td>
            </tr>
        ))}
      </tbody>
      </table>
      </div>
  )
}

export default OrderList;