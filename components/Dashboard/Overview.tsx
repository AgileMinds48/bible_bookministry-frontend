import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { ImBooks } from 'react-icons/im'
import { LuUserRound } from 'react-icons/lu';
import { RiMoneyDollarCircleLine } from 'react-icons/ri'


const mockOverviewData = {
  totalBooks: {
    icon: <ImBooks />,
    label: "Books available",
    value: 66,
    theme: "yellow"
  },
  totalOrders: {
    icon: <CiShoppingCart />,
    label: "Total orders",
    value: 169,
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
    value: "3348",
    theme: "red"
  }
};

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