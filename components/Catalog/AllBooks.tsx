'use client';
import { Books } from '@/app/utils/data';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { FaStar, FaCartPlus } from 'react-icons/fa';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { ImBooks } from 'react-icons/im';
import { MdFavorite } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const AllBooks = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isFav, setisFav] = useState(
    Object.fromEntries(Books.map((_, idx) => [idx, false]))
  );
  const handleFav = (index: number) => {
    setisFav((prev) => ({
      ...prev,
      [index]: !isFav[index],
    }));
  };
  return (
    <section className="px-8 poppins pb-56">
      <div>
        <h1 className="text-5xl text-center font-bold bg-gradient-to-br rounded-2xl from-[#5a88a7]/40 to-[#5a88a7]/20  py-10">
          All
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#5a88a7] to-[#426074]">
            {' '}
            available
          </span>{' '}
          books
        </h1>
        <div
          ref={carouselRef}
          className="flex flex-wrap items-center  shrink-0  py-8 overflow-hidden  gap-8 gap-y-14 "
        >
          {Books.map(({ img, title, author, price, rating }, index) => (
            <div key={index} className="rounded-2xl">
              <div className="grid grid-cols-1 grid-rows-[60%_40%] cursor-pointer hover:shadow-xl transition duration-100 h-[22em]  w-[14em] shadow-lg rounded-2xl overflow-hidden">
                <div className="group h-full relative before:absolute before:inset-0 before:bottom-0 before:bg-linear-to-t  before:from-black/30 before:from-0% before:via-black/10 before:via-60% before:to-black/0 before:to-100% before:opacity-0 hover:before:opacity-100 before:transition before:duration-500  rounded-2xl overflow-hidden">
                  <Image
                    src={img}
                    alt=""
                    className="h-full w-full object-cover "
                  />
                  {
                    <div
                      className="absolute bottom-2 right-2"
                      onClick={() => handleFav(index)}
                    >
                      <MdFavorite
                        className={`text-3xl  opacity-0 group-hover:opacity-100 transition duration-500 ${
                          isFav[index]
                            ? 'text-red-500 opacity-100 animate-bubble'
                            : 'text-white'
                        }`}
                      />
                    </div>
                  }
                </div>
                <div className="p-4 px-2 flex flex-col h-full">
                  <p className="line-clamp-2 text-lg font-semibold text-[#426074] leading-[1.1em] mb-1">
                    {title}
                  </p>
                  <div className="w-full flex items-center gap-2 mt-2">
                    <p className="text-sm text-gray-500">{author}</p>
                    <div className="bg-gray-600 w-1 h-1 rounded-full"></div>
                    <span className="text-sm flex items-baseline translate-y-0.5">
                      <FaStar className="text-[#eca624]" /> {rating}{' '}
                    </span>
                  </div>
                  <div className=" flex center mt-auto pr-4">
                    <div className="flex gap-2">
                      <p className="flex gap-1 items-center">
                        <RiMoneyDollarCircleLine /> ₵{price}.00
                      </p>
                      <span className="border-r border"></span>
                      <p
                        title="available copies"
                        className="flex items-center gap-1"
                      >
                        <ImBooks /> 15
                      </p>
                    </div>
                    <button className="text-3xl text-[#5a88a7] ">
                      <FaCartPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
