"use client"
import React, { useState } from 'react'
import { FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { MdClear } from 'react-icons/md'
import {Book, quickPriceFilters, sortOptions} from "@/app/utils/data"
 //sorting function
export const sortByTitleAZ = (books: Book[]): Book[] => {
  const copyOfBooks = [...books]; //I don't wanna change the original array
  return copyOfBooks.sort((a, b) => a.title.localeCompare(b.title));
}

interface SidebarProps{
  onSortChange:(sortValue:string)=>void
}
const Sidebar:React.FC<SidebarProps> = ({onSortChange}) => {
  // State for collapsible sections
  const [expandedSections, setExpandedSections] = useState({
    sort: true,
    price: false,
    rating: false
  });

  const handleSortChange = (sortValue:string) => {
    setSortBy(sortValue);
    onSortChange(sortValue);
}

  // Filter states
  const [sortBy, setSortBy] = useState<string>('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [ratingFilter, setRatingFilter] = useState<number>(0);

  // Toggle section expansion
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => {
      if (prev[section]) {
        return {
           ...prev,
      [section]: !prev[section]
        }
      }
      return {
        sort: false,
        price: false,
        rating: false,
        [section]:true
     }
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSortBy('');
    setPriceRange({ min: 0, max: 100 });
    setRatingFilter(0);
  };

  // Sort options


  return (
    <aside className='bg-white shadow-2xl rounded-lg p-6 h-fit sticky top-24 poppins'>
      {/* Header */}
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-medium text-[#3D3D3D] poppins'>Filters</h2>
        <button
          onClick={clearAllFilters}
          className='text-sm cursor-pointer text-[#5a88a7] hover:text-[#426074] transition-colors duration-200 flex items-center gap-1'
        >
          <MdClear className='text-base' />
          Clear All
        </button>
      </div>

      {/* Sort By Section */}
      <div className='mb-6'>
        <button
          onClick={() => toggleSection('sort')}
          className='flex justify-between items-center w-full py-2 text-left border-b'
        >
          <h3 className='text-lg font-medium text-[#3D3D3D] poppins'>Sort By</h3>
          {expandedSections.sort ? <FaChevronUp className='text-gray-500' /> : <FaChevronDown className='text-gray-500' />}
        </button>
        
        {expandedSections.sort && (
          <div className='mt-3 space-y-2'>
            {sortOptions.map(({ value, label, icon }) => {
              const Icon= icon;
              return (<label key={value} className='flex items-center space-x-2 cursor-pointer group'>
                <input
                  type='radio'
                  name='sort'
                  value={value}
                  checked={sortBy === value}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className='w-4 h-4 text-[#5a88a7] border-gray-300 focus:ring-[#5a88a7] cursor-pointer'
                />
                <span className='text-sm text-gray-700 group-hover:text-[#5a88a7] transition-colors duration-200 flex gap-1 items-center'>
                {icon && React.createElement(icon, { className: 'text-[#5a88a7] text-xl' })} {/* Only render if icon exists */}                  {label}
                </span>
              </label>)
            })}
          </div>
        )}
      </div>

      {/* Price Range Section */}
      <div className='mb-6'>
        <button
          onClick={() => toggleSection('price')}
          className='flex justify-between items-center w-full py-2 text-left border-b'
        >
          <h3 className='text-lg font-medium text-[#3D3D3D] poppins'>Price Range</h3>
          {expandedSections.price ? <FaChevronUp className='text-gray-500' /> : <FaChevronDown className='text-gray-500' />}
        </button>
        
        {expandedSections.price && (
          <div className='mt-3 space-y-4'>
            {/* Price Range Inputs */}
            <div className='flex items-center space-x-2'>
              <div className='flex-1'>
                <label className='block text-xs text-gray-600 mb-1'>Min Price</label>
                <input
                  type='number'
                  min='0'
                  max='200'
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a88a7] focus:border-transparent text-sm'
                  placeholder='0'
                />
              </div>
              <span className='text-gray-500 pt-5'>-</span>
              <div className='flex-1'>
                <label className='block text-xs text-gray-600 mb-1'>Max Price</label>
                <input
                  type='number'
                  min='0'
                  max='200'
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a88a7] focus:border-transparent text-sm'
                  placeholder='100'
                />
              </div>
            </div>

            {/* Price Range Slider */}
            <div className='space-y-2'>
              <label className='block text-xs text-gray-600'>Price Range: ₵{priceRange.min} - ₵{priceRange.max}</label>
              {/* <div className='relative '>
                <input
                  type='range'
                  min='0'
                  max='200'
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                  className='absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb mt-4'
                  style={{ zIndex: 1 }}
                />
                <input
                  type='range'
                  min='0'
                  max='200'
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                  className='absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb'
                  style={{ zIndex: 2 }}
                />
              </div> */}
            </div>

            {/* Quick Price Filters */}
            <div className='flex flex-wrap gap-2'>
              {quickPriceFilters.map(({min,max,label}) => (
                <button
                  key={label}
                  onClick={() => setPriceRange({ min: min, max: max })}
                  className={`px-3 py-1 text-xs rounded-full border transition-colors duration-200 ${
                    priceRange.min === min && priceRange.max === max
                      ? 'bg-[#5a88a7] text-white border-[#5a88a7]'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-[#5a88a7]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Rating Section */}
      <div className='mb-6'>
        <button
          onClick={() => toggleSection('rating')}
          className='flex justify-between items-center w-full py-2 text-left border-b'
        >
          <h3 className='text-lg font-medium text-[#3D3D3D] poppins'>Minimum Rating</h3>
          {expandedSections.rating ? <FaChevronUp className='text-gray-500' /> : <FaChevronDown className='text-gray-500' />}
        </button>
        
        {expandedSections.rating && (
          <div className='mt-3 space-y-4'>
            {/* Rating Slider */}
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <span className='text-sm text-gray-600'>Rating:</span>
                <div className='flex items-center gap-1'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`text-lg ${star <= ratingFilter ? 'text-[#eca624]' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className='text-sm text-gray-600 ml-2'>
                    {ratingFilter === 0 ? 'All' : `${ratingFilter}+ stars`}
                  </span>
                </div>
              </div>
              <input
                type='range'
                min='0'
                max='5'
                step='0.5'
                value={ratingFilter}
                onChange={(e) => setRatingFilter(Number(e.target.value))}
                className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-grab slider-thumb'
              />
            </div>

            {/* Quick Rating Filters */}
            <div className='space-y-2'>
              {[
                { value: 0, label: 'All Ratings' },
                { value: 4.5, label: '4.5+ Stars' },
                { value: 4.0, label: '4+ Stars' },
                { value: 3.5, label: '3.5+ Stars' },
                { value: 3.0, label: '3+ Stars' }
              ].map((rating) => (
                <button
                  key={rating.value}
                  onClick={() => setRatingFilter(rating.value)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                    ratingFilter === rating.value
                      ? 'bg-[#5a88a7] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1'>
                      {rating.value > 0 && [1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className={`text-sm ${star <= rating.value ? 'text-[#eca624]' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className='text-sm'>{rating.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Apply Filters Button */}
      {/* <button onClick={handleSortChange} className='w-full bg-gradient-to-r from-[#5a88a7] to-[#426074] text-white py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-medium poppins'>
        Apply Filters
      </button> */}
    </aside>
  );
};

export default Sidebar;