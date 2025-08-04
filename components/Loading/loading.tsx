import { Loader } from '@/public';
import Image from 'next/image';
import React from 'react'

interface labels{
  [key: number]: string
}
interface LoadingProps{
  captioned:boolean
}

const Loading = ({captioned}:LoadingProps) => {
  const labels:labels = {
    1: "Organising our shelf",
    2: "Just a second... ",
    3: "We forgot to open the shelf, we're doing that now",
    4: "Oh you're here already",
     5: "Dusting off some ancient scriptures",
    6: "Searching through the theological archives",
    7: "The librarian is taking a coffee break",
    8: "Checking if Moses left any bookmarks",
    9: "Arranging books by divine order",
    10: "Waiting for the angels to deliver your books",
    11: "Praying for faster internet",
    12: "The books are having a fellowship meeting",
    13: "Turning the other page...",
    14: "Revival in progress, books incoming"
  }
  const number = Math.floor(Math.random() * 14) + 1;
  const label: boolean = captioned;
  return (
    <div className='text-center mx-auto w-fit flex flex-col items-center ' >
      <Image src={Loader} alt="loading" width={100} height={100} className='mb-4' />
      {label && <span>{labels[number]}</span>}
    </div>
  )
}

export default Loading;