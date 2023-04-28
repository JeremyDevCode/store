import { useLocalStorage } from "../hooks/useLocalStorage";

function useProducts() {
  const [products, setProducts] = useLocalStorage("products", [
    {
      name: "Micrófono Blue Yeti",
      image: "/microphone.png",
      price: "$42.079",
      favorite: false,
    },
    {
      name: "Keyboard",
      image: "/keyboard.png",
      price: "$20.999",
      favorite: false,
    },
    {
      name: "Micrófono HyperX SoloCast",
      image: "/microphone2.png",
      price: "$30.799",
      favorite: false,
    },
    {
      name: "Printer",
      image: "/printer.png",
      price: "$116.648",
      favorite: false,
    },
    {
      name: "Xbox Series S",
      image: "/xbox.png",
      price: "$179.999",
      favorite: false,
    },
  ]);

  const [favoriteProducts, setFavoriteProducts] = useLocalStorage(
    "favoriteProducts",
    []
  );

  const toggleFavorite = (name) => {
    const productIndex = products.findIndex((product) => product.name === name);
    const newProducts = [...products];
    newProducts[productIndex].favorite = !newProducts[productIndex].favorite;
    setProducts(newProducts);
    if (newProducts[productIndex].favorite) {
      setFavoriteProducts((prevFavorites) => {
        const newFavorites = [...prevFavorites];
        newFavorites.push(newProducts[productIndex]);
        return newFavorites;
      });
    } else {
      setFavoriteProducts((prevFavorites) => {
        const favoriteIndex = prevFavorites.findIndex(
          (product) => product.name === name
        );
        prevFavorites.splice(favoriteIndex, 1);
        return prevFavorites;
      });
    }
  };

  const state = {
    products,
    favoriteProducts,
  };

  const stateUpdaters = {
    toggleFavorite,
  };

  return { state, stateUpdaters };
}

export { useProducts };
