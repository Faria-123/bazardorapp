import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import PriceIncrease from "@/components/PriceIncrease";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Suspense fallback={<div>Loading...</div>}>
        <PriceIncrease />
        <AllProducts></AllProducts>
      </Suspense>
    </>
  );
}
