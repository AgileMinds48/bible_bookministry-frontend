"use client"
import { getUserEmail, getUserName, getUserRole, isLoggedIn } from "@/app/utils/auth";

export const loggedIn = isLoggedIn();
export const userRole = getUserRole();
export const username = getUserName();
export const userEmail = getUserEmail();

