export const revalidate = 60
 
export async function GET() {
  const data = await fetch("https://dummyjson.com/products");
  const posts = await data.json()
 
  return Response.json(posts)
}