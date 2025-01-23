import { FormEvent } from "react";

export const onSubmitRegis = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const firstName = formData.get("firstName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  
  const request = {
    firstName : firstName,
    email : email,
    password : password
  }

  return request
};
