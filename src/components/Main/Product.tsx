import React, { ReactElement } from "react";
import { Heart } from "@/components/assets/icons/Heart";
import { Button } from "@/components/common/Button";

interface ProductProps {
  product: Product;
  toggleFavorite: (name: string) => void;
}

function Product({ product, toggleFavorite }: ProductProps): ReactElement {
  return (
    <div className="flex flex-col h-[360px] w-[256px] items-center justify-end bg-[#1D1D1DA6] border-2 border-[#1D1D1D33] rounded-2xl gap-3 relative">
      <div className="flex flex-col items-center justify-end h-full">
        <div className="h-full flex items-center">
          <img src={product.image} alt="microphone" />
        </div>
        <span className="text-[#E6E6E6] font-medium">{product.name}</span>
      </div>
      <div className="w-full h-[2px] bg-[#FFF159]"></div>
      <div className="flex items-end justify-around gap-6 px-4 py-3">
        <div className="flex flex-col">
          <span className="text-[#E6E6E6] text-2xl font-medium">
            {product.price}
          </span>
          <span className="text-[#00A650]">Envio Gratis</span>
        </div>
        <button className="bg-[#FFF159] text-[#141414] font-bold py-2 px-[12.5px] rounded-full">
          Comprar
        </button>
      </div>
      <Button
        className={`bg-[#1D1D1D] text-[#FFF159] w-10 h-10 rounded-full absolute top-5 right-5`}
        onClick={() => toggleFavorite(product.name)}
      >
        <Heart
          className={`${
            product.favorite ? "fill-[#FFF159]" : "fill-transparent"
          } transition-colors`}
        />
      </Button>
    </div>
  );
}

export { Product };
