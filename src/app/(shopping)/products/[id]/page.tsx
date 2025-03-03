import type { Metadata, ResolvingMetadata } from "next";
import { SkeletonProducts } from "@/app/components/SkeletonProducts";
import Image from "next/image";
import { Suspense } from "react";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params;

  // fetch data
  const product = await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => res.json()
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    description: product.description,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}
// get id  from path in server component
export default async function ProductId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  let data = await fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });
  console.log("data", data);

  return (
    <div>
      <h1>Products Page</h1>
      <Suspense fallback={<SkeletonProducts />}>
        Products-{data.id} {data.title}
        <Image src={data.thumbnail} alt={data.title} width={240} height={240} />
      </Suspense>
      {/* server component so we can't use event handler inside it as JS doesn't loaded yet */}
      {/* <Button onClick={()=>
          {console.log("Clicked")}
        }/>
      <button
        onClick={() => {
          console.log("Clicked");
        }}
      >
        click
      </button> */}
    </div>
  );
}
