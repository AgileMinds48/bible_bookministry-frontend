import { bk1, bk2, bk3, bk4, bk5, bk6, bk7, bk8 } from "@/public"
import { StaticImageData } from "next/image"

interface Book{
  img:StaticImageData,
  title: string,
  author: string,
  price:number,
  rating: number,
  category:string
}


export const recommendedBooks:Book[] = [
  {
    img: bk1,
    title: "Die with a smile",
    author: "Kyeiwaa",
    price: 20,
    rating: 3.2,
    category:"Popular"
}, {
  img: bk2,
  title: "Walking in Faith",
  author: "Sarah Thompson",
  price: 35,
    rating: 4.7,
  category:"Popular"
},
{
  img: bk3,
  title: "Grace Unveiled",
  author: "Michael Johnson",
  price: 28,
  rating: 4.2,
  category:"Popular"
},
{
  img: bk4,
  title: "The Heart of Prayer",
  author: "Rebecca Miller",
  price: 45,
  rating: 4.9,
  category:"Popular"
},
{
  img: bk8,
  title: "Strength in Scripture",
  author: "David Williams",
  price: 32,
  rating: 4.1,
  category:"Popular"
},
{
  img: bk7,
  title: "Light in Darkness",
  author: "Emma Davis",
  price: 38,
  rating: 4.6,
  category:"Popular"
},
{
  img: bk6,
  title: "Foundations of Truth",
  author: "Joshua Brown",
  price: 42,
  rating: 4.4,
  category:"Popular"
},
{
  img: bk5,
  title: "Hope Renewed",
  author: "Rachel Green",
  price: 29,
  rating: 4.3,
  category:"Popular"
},
{
  img: bk7,
  title: "Light in Darkness",
  author: "Emma Davis",
  price: 38,
  rating: 4.6,
  category:"Popular"
},
  {
    img: bk4,
    title: "The Heart of Prayer",
    author: "Rebecca Miller",
    price: 45,
    rating: 4.9,
    category:"Popular"
  },
  {
    img: bk2,
    title: "Walking in Faith",
    author: "Sarah Thompson",
    price: 35,
    rating: 4.7,
    category:"Popular"
  },
  {
    img: bk7,
    title: "Light in Darkness",
    author: "Emma Davis",
    price: 38,
    rating: 4.6,
    category:"Popular"
  },
  {
    img: bk6,
    title: "Foundations of Truth",
    author: "Joshua Brown",
    price: 42,
    rating: 4.4,
    category:"Popular"
  },
  {
    img: bk5,
    title: "Hope Renewed",
    author: "Rachel Green",
    price: 29,
    rating: 4.3,
    category:"Popular"
  },
  {
    img: bk3,
    title: "Grace Unveiled",
    author: "Michael Johnson",
    price: 28,
    rating: 4.2,
category:"Popular"
  },
  {
    img: bk2,
    title: "Walking in Faith",
    author: "Sarah Thompson",
    price: 35,
    rating: 4.7,
    category:"Popular"
  },
  {
    img: bk7,
    title: "Light in Darkness",
    author: "Emma Davis",
    price: 38,
    rating: 4.6,
    category:"Popular"
  },
  {
    img: bk6,
    title: "Foundations of Truth",
    author: "Joshua Brown",
    price: 42,
    rating: 4.4,
    category:"Popular"
  },
  {
    img: bk5,
    title: "Hope Renewed",
    author: "Rachel Green",
    price: 29,
    rating: 4.3,
    category:"Popular"
  }
]
