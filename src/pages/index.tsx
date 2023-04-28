import { Inter } from "next/font/google";
import { Navbar } from "../components/Navbar";
import { SecondaryNavbar } from "../components/SecondaryNavbar";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { useEffect, useState } from "react";

export default function Home() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return null;
  return (
    <main className="flex min-h-screen bg-[url('/colorBG.png')] flex-col items-center justify-between">
      <div className="min-h-screen w-full flex flex-col items-center bg-[rgba(20,20,20,0.8)] backdrop-blur-3xl">
        <Navbar />
        <SecondaryNavbar />
        <Header />
        <Main />
      </div>
    </main>
  );
}
