"use client";

import React, { useState } from "react";
import Image from "next/image";
// import Footer from "@/components/Footer"; // Removed duplicate footer

// Mock data for cart items
const cartItems = [
  {
    id: 1,
    title: "Life Worth Living",
    price: 30,
    image: "/Home/bk1.jpg", // Use public path
    quantity: 1,
  },
  {
    id: 2,
    title: "Life Worth Living",
    price: 30,
    image: "/Home/bk2.jpg",
    quantity: 1,
  },
  {
    id: 3,
    title: "Life Worth Living",
    price: 30,
    image: "/Home/bk3.jpg",
    quantity: 1,
  },
  {
    id: 4,
    title: "Life Worth Living",
    price: 30,
    image: "/Home/bk4.jpg",
    quantity: 2,
  },
  {
    id: 5,
    title: "Life Worth Living",
    price: 30,
    image: "/Home/bk5.jpg",
    quantity: 1,
  },
];

const DELIVERY_FEE = 200;

const CartPage = () => {
  const [items, setItems] = useState(cartItems);

  const handleQuantityChange = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const grandTotal = subtotal + DELIVERY_FEE;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <div className="max-w-7xl mx-auto w-full flex flex-col">
        <h1 className="text-3xl font-semibold mt-12 mb-8">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Table */}
          <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">ITEM</th>
                  <th className="py-2">PRICE</th>
                  <th className="py-2">QUANTITY</th>
                  <th className="py-2">TOTAL</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b last:border-b-0">
                    <td className="py-4 flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={60}
                        height={80}
                        className="rounded object-cover"
                      />
                      <span>{item.title}</span>
                    </td>
                    <td className="py-4">GHS {item.price.toFixed(2)}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="border rounded w-8 h-8 flex items-center justify-center text-lg"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          className="border rounded w-8 h-8 flex items-center justify-center text-lg"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4">
                      GHS {(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-4">
                      <button
                        className="text-gray-400 hover:text-red-500 text-xl"
                        onClick={() => handleRemove(item.id)}
                        aria-label="Remove item"
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-white rounded-lg p-6 shadow-sm border border-green-200 h-fit">
            <h2 className="text-lg font-medium text-center mb-4 text-green-700">
              Order summary
            </h2>
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal</span>
              <span className="text-green-700">GHS {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Delivery Fee</span>
              <span className="text-green-700">
                GHS {DELIVERY_FEE.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between py-4 border-b-2 border-black font-semibold text-lg">
              <span>Grand Total</span>
              <span className="text-green-700">
                GHS {grandTotal.toFixed(2)}
              </span>
            </div>
            <button className="w-full mt-6 bg-[#98b9c9] hover:bg-[#7fa3b6] text-white py-2 rounded transition">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
