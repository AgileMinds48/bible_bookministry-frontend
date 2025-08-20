import { td } from 'framer-motion/client';
import React from 'react'

type status = "paid" | "pending" | "completed";

interface orderList{
  orderId: string,
  customerName: string,
  totalAmount: number,
  // Date: Date,
  Status: status
}

const mockOrderlIst: orderList[] = [
  {
    orderId: "2908782635",
    customerName:"Fenulu Reynolds",
    totalAmount:3,
    Status:"paid"
}]
const OrderList = () => {
  return (
    <div>
      <h1 className='text-2xl text-[#15278c] font-semibold'>Orders</h1>
    <table className='w-full text-left'>
      <thead className=''>
          <tr className='border-b-2 border-b-gray-700/60 '>
            <th></th>
      <th>Order ID</th>
      <th className='py-2'>Customer name</th>
      <th className='py-2'>Total Amount</th>
        <th className='py-2'>Number of books</th>
        <th className='py-2'>Date</th>
        <th className='py-2'>Status</th>
        </tr>
      </thead>
      <tbody>
          {mockOrderlIst.map(({ customerName, Status, orderId, totalAmount }, id) => (
            <>
              <td>#{id+1 }</td>
              <td>{orderId}</td>
              <td>{customerName}</td>
              <td>{totalAmount}</td>
              <td>{new Date().toLocaleTimeString()}</td>
            </>
        ))}
      </tbody>
      </table>
      </div>
  )
}

export default OrderList;