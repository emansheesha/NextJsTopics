"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
interface IProduct {
  id: number;
  title: string;
}
interface IData {
  products: IProduct[];
  total: number;
  skip: number; limit: number;
}

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const handelDataApi = async () => {
      const data = await fetch('https://dummyjson.com/products').then((res) => res.json()).catch(error => {
        console.error(error);
      });
      console.log(data);
      setProducts(data?.products)
    }
    handelDataApi();
  }, [])
  return (
    <>
      {products.map((product) => <div key={product.id} >
        <Link href={`/products/${product.id}`}>{product.title} </Link></div>)}
    </>
  );
}
