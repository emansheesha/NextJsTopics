// get id  from path in server component 
export default async function ProductId({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id;
    let data = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json()).catch(error => {
        console.error(error);
    });
    console.log("data", data);
    return (
        <div >
            Products-{data.id} {data.title}
            <img src={data.images[0]} alt={data.title} />
        </div>
    );
}