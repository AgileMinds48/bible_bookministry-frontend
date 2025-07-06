import { bk1 } from "@/public"
import { StaticImageData } from "next/image"

interface Book{
  img:StaticImageData,
  title: string,
  author: string,
  price:number,
  rating:number
}


export const recommendedBooks:Book[] = [
  {
    img: bk1,
    title: "Die with a smile",
    author: "Kyeiwaa",
    price: 20,
    rating:3.2
}, {
  img: bk1,
  title: "Walking in Faith",
  author: "Sarah Thompson",
  price: 35,
  rating: 4.7
},
{
  img: bk1,
  title: "Grace Unveiled",
  author: "Michael Johnson",
  price: 28,
  rating: 4.2
},
{
  img: bk1,
  title: "The Heart of Prayer",
  author: "Rebecca Miller",
  price: 45,
  rating: 4.9
},
{
  img: bk1,
  title: "Strength in Scripture",
  author: "David Williams",
  price: 32,
  rating: 4.1
},
{
  img: bk1,
  title: "Light in Darkness",
  author: "Emma Davis",
  price: 38,
  rating: 4.6
},
{
  img: bk1,
  title: "Foundations of Truth",
  author: "Joshua Brown",
  price: 42,
  rating: 4.4
},
{
  img: bk1,
  title: "Hope Renewed",
  author: "Rachel Green",
  price: 29,
  rating: 4.3
}
]
