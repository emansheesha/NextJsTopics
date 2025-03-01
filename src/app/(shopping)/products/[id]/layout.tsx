
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>Sub Root Layout
         {children}
      </div>
       

  );
}
