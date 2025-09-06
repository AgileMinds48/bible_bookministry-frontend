export type categories = "theological" | "children" | "commentaries" | "religious" | "bibles" | "default";

export const categoryColorMap: { [key in categories]: string } = {
  "theological": "bg-blue-300",
  "children": "bg-yellow-300",
  "commentaries": "bg-green-300",
  "religious": "bg-pink-300",
  "bibles": "bg-black",
  // Add more categories and colors as needed
  "default": "bg-teal-400"
};

export const getCategoryBg = (cat: categories)=>{
  const name =cat ?? "default"
  return categoryColorMap[name];
}