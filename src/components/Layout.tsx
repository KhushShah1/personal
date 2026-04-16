import Nav from "./Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-screen-sm px-8 font-sans md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
      <Nav />
      {children}
    </main>
  );
}
