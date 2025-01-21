import { FormEvent } from "react";

export const onSubmitRegis = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const username = formData.get("email") as string;
  const password = formData.get("password") as string;
  console.log(username)
  console.log(password)
  // tinggal hit api login
};
