"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export const authenticateUser = (formData) => {
  const email = formData.get("email");
  console.log(email);
  if (email === 'demo@demo.com') {
    cookies().set("userId", 1);
    redirect("/albums");
  } else {
    redirect("/")
  }
};