import React from 'react'
import { ImBooks } from 'react-icons/im'
import Overview from './Overview'



const Dashboard = () => {
  return (
    <section className='min-h-screen mt-20 pl-[20em] p-8 inter'>

      <h1 className='text-5xl mb-1'>My dashboard</h1>
      <p className='text-gray-500 '>Recent activities, transactions and all</p>
      <div className='bg-gray-200/30 p-4 rounded-2xl'>
      <Overview/>
      </div>
    </section>
  )
}

export default Dashboard