import { bk1, bk2, bk3, bk4, bk5, bk6, bk7, bk8 } from "@/public"
import { StaticImageData } from "next/image"

interface Book{
  img:StaticImageData,
  title: string,
  author: string,
  price:number,
  rating?: number,
  category?:string
}

export const sortOptions = [
  { value: 'title-asc', label: 'Title: A - Z ' },
  { value: 'title-desc', label: 'Title: Z - A' },
  { value: 'author-asc', label: 'Author: A - Z' },
  { value: 'author-desc', label: 'Author: Z - A' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating-desc', label: 'Highest Rated' },
  { value: 'rating-asc', label: 'Lowest Rated' },
  // { value: 'newest', label: 'Newest First' },
  // { value: 'popular', label: 'Most Popular' }
];

export const quickPriceFilters =
  [
    { label: 'Under ₵20', min: 0, max: 20 },
    { label: '₵20-₵40', min: 20, max: 40 },
    { label: '₵40-₵60', min: 40, max: 60 },
    { label: 'Over ₵60', min: 60, max: 200 }
  ]

export const Books:Book[] = [
  {
    img: bk1,
    title: "Die with a smile or live",
    author: "Kyeiwaa",
    price: 20,
    rating: 3.2,
    category:"Recommended"
}, {
  img: bk2,
  title: "Walking in Faith",
  author: "Sarah Thompson",
  price: 35,
    rating: 4.7,
  category:"Recommended"
},
{
  img: bk3,
  title: "Grace Unveiled",
  author: "Michael Johnson",
  price: 28,
  rating: 4.2,
  category:"Recommended"
},
{
  img: bk4,
  title: "The Heart of Prayer",
  author: "Rebecca Miller",
  price: 45,
  rating: 4.9,
  category:"Recommended"
},
{
  img: bk8,
  title: "Strength in Scripture",
  author: "David Williams",
  price: 32,
  rating: 4.1,
  category:"Recommended"
},
{
  img: bk7,
  title: "Light in Darkness",
  author: "Emma Davis",
  price: 38,
  rating: 4.6,
  category:"Recommended"
},
{
  img: bk6,
  title: "Foundations of Truth",
  author: "Joshua Brown",
  price: 42,
  rating: 4.4,
  category:"Recommended"
},
{
  img: bk5,
  title: "Hope Renewed",
  author: "Rachel Green",
  price: 29,
  rating: 4.3,
  category:"Recommended"
},
{
  img: bk7,
  title: "Light in Darkness",
  author: "Emma Davis",
  price: 38,
  rating: 4.6,
  category:"Recommended"
},
  {
    img: bk4,
    title: "The Heart of Prayer",
    author: "Rebecca Miller",
    price: 45,
    rating: 4.9,
    category:"Recommended"
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
  },
  {
    img: bk1,
    title: "Grace Unveiled",
    author: "Michael Johnson",
    price: 28,
    rating: 4.2,
    category:"Popular"
  }
]
