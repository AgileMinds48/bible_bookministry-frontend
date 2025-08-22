"use client"
import { getUserEmail, getUserName, getUserRole, isLoggedIn } from "@/hooks/auth";

export const loggedIn = isLoggedIn();
export const userRole = getUserRole();
export const username = getUserName();
export const userEmail = getUserEmail();

export const capitalise = (word: string | null): string => {
  if (!word) return "";
  const firstWord= word?.slice(0, 1).toUpperCase();
  const remaining = word?.slice(1).toLowerCase();
  return (firstWord + remaining) || "";
}