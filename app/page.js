"use client";

import Blogs from "@/components/Blogs";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Blogs />
    </main>
  );
}
