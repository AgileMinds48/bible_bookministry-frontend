import { bk1, bk2, bk3, bk4, bk5, bk6, bk7, bk8, headshot, headshot2, headshot3, headshot4, headshot5 } from "@/public"
import { StaticImageData } from "next/image"
import { ComponentType } from "react";
import { BsSortAlphaDown, BsSortAlphaUp, BsSortDown, BsSortUp } from "react-icons/bs";
import { GiStarsStack } from "react-icons/gi";
import { WiStars } from "react-icons/wi";

//function to fetch added or fav'ed items
export const setItemsToLocalStorage = (key:string,value:unknown) => {
  //can only execute in browser (SSR- no!)
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key ${key}`,error)
    }
  }
}
//function to set items to localStorage
export const getItemsFromLocalStorage = (key:string,defaultValue:unknown) => {
  //execute when in browser
  if (typeof window !== "undefined") {
    try {
      const items = localStorage.getItem(key);
      return items ? JSON.parse(items) : defaultValue;
    } catch (error) {
      console.error(`Error reading localStorage key ${key}`, error);
    }
  }
}
// type reviewCard = {
//   reviewer:string,
//   rating: number
//   text: string
//   img:StaticImageData
// }
//placeholder text for reviews

export const reviews = [
  {
    reviewer: "Fenuku Reynolds",
    rating: 5,
    text: "I will read this book a thousand times whenever I get hold of it. It really changes my prayer life and my christain perspective",
    img:headshot
  },
   {
    reviewer: "Sarah Martinez",
    rating: 4,
    text: "This book provided incredible insights into faith and spirituality. The author's writing style is engaging and easy to follow. Highly recommend for anyone seeking spiritual growth.",
    img: headshot2
  },
  {
    reviewer: "Michael Chen",
    rating: 5,
    text: "Absolutely transformative! This book helped me understand biblical principles in a whole new way. The practical applications are what make this stand out from other religious texts.",
    img: headshot3
  },
  {
    reviewer: "Emma Johnson",
    rating: 3,
    text: "Good content overall, though some chapters felt a bit repetitive. The core message is solid and the author clearly knows their subject matter well. Worth reading for the key insights.",
    img: headshot4
  },
  {
    reviewer: "David Thompson",
    rating: 5,
    text: "This book came at exactly the right time in my life. The wisdom shared here is profound and life-changing. I've already recommended it to my entire book club!",
    img: headshot5
  }
]

//login type shi
export interface LoginFormData{
      email: string
    password: string
}

export interface loginField{
  input:string
  inputName: string,
  type:string
}

export const inputItemsLogin:loginField[] = [
  {
  input: "Email",
  inputName:"email",
  type:"email"
},
  {
  input: "Password",
  inputName:"password",
    type: "",
},
]
//signup type shi
//signup state formdata 
export interface SignUpFormData{
  first_name: string,  
  last_name: string,       // Backend expects 'last_name'
  email: string,
  password: string,
  password2: string,
}
export interface signUpField{
  input: string,
  inputName: string
  type: string
  warning?:string
}
export const inputItemsSignUp:signUpField[] = [{
  input: "First Name",
  inputName: "firstname",
  type:"text"
},
  {
    input: "Last Name",
    inputName: "lastname",
    type:"text"
  },
  {
  input: "Email",
  inputName:"email",
  type:"email"
},
  {
  input: "Password",
  inputName:"password",
    type: "",
  warning:"Password must be at least 8 characters"
  },
  {
    input: "Repeat Password",
    inputName: "repeatpassword",
    type:""
}]

export interface Book{
  img:string | StaticImageData,
  title: string,
  author: string,
  price:number,
  rating: number,
  category?: string
  id: number
  amountInStock?: number
  bookDescription?: string
  bookCategory?: string
}
interface sortOptions{
  value: string,
  label: string,
  icon?:ComponentType
}
export const sortOptions = [
  { value: 'title-asc', label: 'Title: A - Z ',icon: BsSortAlphaDown },
  { value: 'title-desc', label: 'Title: Z - A' ,icon: BsSortAlphaUp },
  { value: 'author-asc', label: 'Author: A - Z',icon:BsSortAlphaDown  },
  { value: 'author-desc', label: 'Author: Z - A',icon:BsSortAlphaUp },
  { value: 'price-asc', label: 'Price: Low to High',icon:BsSortUp  },
  { value: 'price-desc', label: 'Price: High to Low',icon:BsSortDown  },
  { value: 'rating-desc', label: 'Highest Rated',icon: GiStarsStack  },
  { value: 'rating-asc', label: 'Lowest Rated' ,icon: WiStars},
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
    id: 1,
    img: bk1,
    title: "Die with a smile or live",
    author: "Kyeiwaa",
    price: 20,
    rating: 3.2,
    category:"Recommended"
}, {
  id: 2,
  img: bk2,
  title: "Walking in Faith",
  author: "Sarah Thompson",
  price: 35,
    rating: 4.7,
  category:"Recommended"
},
{
  id: 3,
  img: bk3,
  title: "Grace Unveiled",
  author: "Michael Johnson",
  price: 28,
  rating: 4.2,
  category:"Recommended"
},
{
  id: 4,
  img: bk4,
  title: "The Heart of Prayer",
  author: "Rebecca Miller",
  price: 45,
  rating: 4.9,
  category:"Recommended"
},
{
  id: 5,
  img: bk8,
  title: "Strength in Scripture",
  author: "David Williams",
  price: 32,
  rating: 4.1,
  category:"Recommended"
},
{
  id: 6,
  img: bk7,
  title: "Light in Darkness",
  author: "Emma Davis",
  price: 38,
  rating: 4.6,
  category:"Recommended"
},
{
  id: 7,
  img: bk6,
  title: "Foundations of Truth",
  author: "Joshua Brown",
  price: 42,
  rating: 4.4,
  category:"Recommended"
},
{
  id: 8,
  img: bk5,
  title: "Hope Renewed",
  author: "Rachel Green",
  price: 29,
  rating: 4.3,
  category:"Recommended"
},
{
  id: 9,
  img: bk7,
  title: "Light in Darkness",
  author: "Emma Davis",
  price: 38,
  rating: 4.6,
  category:"Recommended"
},
  {
    id: 10,
    img: bk4,
    title: "The Heart of Prayer",
    author: "Rebecca Miller",
    price: 45,
    rating: 4.9,
    category:"Recommended"
  },
  {
    id: 11,
    img: bk2,
    title: "Walking in Faith",
    author: "Sarah Thompson",
    price: 35,
    rating: 4.7,
    category:"Popular"
  },
  {
    id: 12,
    img: bk7,
    title: "Light in Darkness",
    author: "Emma Davis",
    price: 38,
    rating: 4.6,
    category:"Popular"
  },
  {
    id: 13,
    img: bk6,
    title: "Foundations of Truth",
    author: "Joshua Brown",
    price: 42,
    rating: 4.4,
    category:"Popular"
  },
  {
    id: 14,
    img: bk5,
    title: "Hope Renewed",
    author: "Rachel Green",
    price: 29,
    rating: 4.3,
    category:"Popular"
  },
  {
    id: 15,
    img: bk3,
    title: "Grace Unveiled",
    author: "Michael Johnson",
    price: 28,
    rating: 4.2,
category:"Popular"
  },
  {
    id: 16,
    img: bk2,
    title: "Walking in Faith",
    author: "Sarah Thompson",
    price: 35,
    rating: 4.7,
    category:"Popular"
  },
  {
    id: 17,
    img: bk7,
    title: "Light in Darkness",
    author: "Emma Davis",
    price: 38,
    rating: 4.6,
    category:"Popular"
  },
  {
    id: 18,
    img: bk6,
    title: "Foundations of Truth",
    author: "Joshua Brown",
    price: 42,
    rating: 4.4,
    category:"Popular"
  },
  {
    id: 19,
    img: bk5,
    title: "Hope Renewed",
    author: "Rachel Green",
    price: 29,
    rating: 4.3,
    category:"Popular"
  },
  {
    id: 20,
    img: bk1,
    title: "Grace Unveiled",
    author: "Michael Johnson",
    price: 28,
    rating: 4.2,
    category:"Popular"
  }
]

//cart items
export const cartItems = [
  {
    id: 1,
    title: "Life Worth Living",
    price: 30,
    image: "/Home/bk1.jpg", // Use public path
    quantity: 1,
  },
  {
    id: 2,
    title: "Life Worth Living",
    price: 30,
    image: "/Home/bk2.jpg",
    quantity: 1,
  },
  {
    id: 3,
    title: "Life Worth Living",
    price: 30,
    image: "/Home/bk3.jpg",
    quantity: 1,
  },
  {
    id: 4,
    title: "Life Worth Living",
    price: 30,
    image: "/Home/bk4.jpg",
    quantity: 2,
  },
  {
    id: 5,
    title: "Life Worth Living",
    price: 30,
    image: "/Home/bk5.jpg",
    quantity: 1,
  },
];