import { useEffect, useState } from "react";
import Card from "./Card";

const Mobiles = () => {
  const [gadgets, setGadgets] = useState([]); // State to hold all gadgets
  const [products, setProducts] = useState([]); // State for filtered products

  // Fetch gadgets from JSON file
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/products.json");
      const data = await res.json();
      setGadgets(data); // Set all fetched gadgets
    };
    fetchProducts();
  }, []);

  // Filter gadgets for the "Mobile" category
  useEffect(() => {
    if (gadgets.length > 0) {
      const filterByCategories = gadgets.filter(
        gadget => gadget.category === "Mobile"
      );
      setProducts(filterByCategories); // Set filtered products
    }
  }, [gadgets]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
      {
        products.map(product => <Card key={product.id} gadget={product} />)
      }
    </div>
  );
};

export default Mobiles;
