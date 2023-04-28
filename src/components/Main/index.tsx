import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "./Product";
import { useProducts } from "@/components/modules/useProducts";

function Main() {
  const { state, stateUpdaters } = useProducts();
  const { products } = state;
  const { toggleFavorite } = stateUpdaters;

  return (
    <main className="w-[84%] flex flex-col items-start justify-center mx-16 my-4 gap-5">
      <div className="flex items-end gap-5">
        <h2 className="text-[#B0B0B0] text-2xl font-medium">
          Basado en tu última vista
        </h2>
        <Link className="text-[#283373] font-medium" href="">
          Ver Historial
        </Link>
      </div>
      <div className="flex flex-wrap w-full gap-20 items-center justify-between">
        {products.map((product) => (
          <Product
            key={product.name}
            toggleFavorite={toggleFavorite}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

export { Main };
