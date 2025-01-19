export const createPost = async (req: any) => {
  console.log(req)
  const response = await fetch("http://localhost:3000/api/createPost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  console.log(response)
  return response
};
