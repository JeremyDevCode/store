import React, { useEffect, useState } from "react";
import { useProducts } from "../modules/useProducts";
import { Product } from "../components/Main/Product";

function Favorites() {
  const { state, stateUpdaters } = useProducts();
  const { favoriteProducts } = state;
  const { toggleFavorite } = stateUpdaters;
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return null;
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[rgba(20,20,20,0.8)] backdrop-blur-3xl">
      {favoriteProducts.map((product: Product) => (
        <Product
          key={product.name}
          toggleFavorite={toggleFavorite}
          product={product}
        />
      ))}
    </div>
  );
}

export default Favorites;
