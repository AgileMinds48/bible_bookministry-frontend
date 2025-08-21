export const handleLoggedIn = (data:{userRole:string,userEmail:string}) => {
  localStorage.setItem("userRole", data?.userRole)
  localStorage.setItem("userEmail", data?.userEmail)
  localStorage.setItem("isLoggedIn", "true");
}

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

export const isLoggedIn=() =>{
  if (typeof window !== "undefined") {
    return localStorage.getItem("isLoggedIn") === "true";
  }
  return false;
}