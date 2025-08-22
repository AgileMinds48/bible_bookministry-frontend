export const handleLoggedIn = (data:{userRole:string,userEmail:string,userName:string}) => {
  localStorage.setItem("userRole", data?.userRole)
  localStorage.setItem("userEmail", data?.userEmail)
  localStorage.setItem("userName", data?.userName)
  localStorage.setItem("isLoggedIn", "true");
  if (typeof window !== "undefined") {
    
  }
}

export const handleLogout = () => {
  localStorage.removeItem("userRole");
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userName");
  window.location.reload(); 
};

export const getUserRole=() => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userRole");
  }
  return null;
}

export const getUserEmail = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userEmail");
  }
  return null;
}
export const getUserName = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userName");
  }
  return null;
}

export const isLoggedIn=() =>{
  if (typeof window !== "undefined") {
    return localStorage.getItem("isLoggedIn") === "true";
  }
  return false;
}

export const capitalise = (word: string | null): string => {
  if (!word || typeof word !=="string") return "";
  const firstWord= word.slice(0, 1).toUpperCase();
  const remaining = word.slice(1).toLowerCase();
  return (firstWord + remaining) || "";
}