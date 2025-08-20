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
    theme: "green"
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
    theme: "red"
  },
  totalUsers: {
    icon: <LuUserRound />,
    label: "Total users",
    value: "3348",
    theme: "deepBlue"
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
  'deepBlue': {
    bg: "bg-[#15278c]/20",
    iconBg: "bg-[#15278c]/30",
    iconText:"text-[#15278c]"
  }
  ,
  'red': {
    bg: "bg-red-200/50",
    iconBg: "bg-red-500/20",
    iconText:"text-red-500"
  }
};
const Overview = () => {
  return (
    <div className='flex gap-4'>
      {Object.entries(mockOverviewData).map(([key, { label, value, theme, icon }]) => {
        const t = themeMap[theme as keyof typeof themeMap];
        return (
          <div
            key={key}
            className={`h-32 min-w-[15em] ${t.bg} rounded-3xl overflow-hidden grid grid-cols-[4em_1fr] items-center p-4`}>
            <div className={`${t.iconBg} w-12 h-12 flex justify-center items-center rounded-full`}>
              <span className={`text-3xl ${t.iconText}`}>{icon}</span>
            </div>
            <p className='text-sm font-medium text-right'>{label}<br />
              <span className='text-4xl font-medium text-black'>{value}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Overview