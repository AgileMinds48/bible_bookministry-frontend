"use client"
import React from 'react'
import Image from 'next/image';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { useCartStore } from '@/app/utils/cartStore';
import { empty_cart } from '@/public';

const CartPage = () => {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const clearCart = useCartStore((s) => s.clearCart);
  const subtotal = useCartStore((s) => s.getTotalPrice());

  const DELIVERY_FEE = 10;
  const grandTotal = subtotal + DELIVERY_FEE;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white poppins mt-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col">
        <h1 className="text-3xl font-semibold mt-12 mb-8 text-[#15278c]">Books Cart</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Table */}
          <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
            {items.length === 0 ? (
              <div className="py-12 text-center text-gray-600 text-2xl font-semibold">
                <Image src={empty_cart} alt='empty cart illustration' className='mx-auto mb-2'/>
                You have an empty shelf
              </div>
            ) : (
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">BOOK</th>
                    <th className="py-2">PRICE</th>
                    <th className="py-2"></th>
                    <th className="py-2">QUANTITY</th>
                    <th className="py-2">TOTAL</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-b last:border-b-0">
                      <td className="py-4 flex items-center gap-2">
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
                      <td className='px-2'></td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <button
                            className="border-2 border-[#15278c] rounded w-8 h-8 flex items-center justify-center text-lg cursor-pointer"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button> 
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            className="border-2 border-[#15278c] rounded w-8 h-8 flex items-center justify-center text-lg cursor-pointer"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 pl-2 font-semibold">
                        GHS {(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-4">
                        <button
                          className=" text-red-500 text-xl cursor-pointer"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item"
                        >
                          <MdOutlineDeleteForever />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
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
              <span className="text-green-700">GHS {DELIVERY_FEE.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-4 border-b-2 border-black font-semibold text-lg">
              <span>Grand Total</span>
              <span className="text-[#15278c]">GHS {grandTotal.toFixed(2)}</span>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                className="w-full bg-[#15278c] hover:bg-[#091974] cursor-pointer text-white py-2 rounded transition"
                disabled={items.length === 0}
              >
                CHECKOUT
              </button>
              {items.length > 0 && (
                <button
                  className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded"
                  onClick={clearCart}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage