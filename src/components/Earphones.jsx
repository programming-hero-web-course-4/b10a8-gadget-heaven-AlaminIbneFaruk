import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Earphones = () => {
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

  // Filter gadgets for the "Earphones" category
  useEffect(() => {
    if (gadgets.length > 0) {
      const filterByCategories = gadgets.filter(
        gadget => gadget.category === "Earphones"
      );
      setProducts(filterByCategories); // Set filtered products
    }
  }, [gadgets]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
      {products && products.length > 0 ? (
        products.map(product => <Card key={product.id} gadget={product} />)
      ) : (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-4xl font-bold">I could Not Found this product</h1>
            <p className="py-6">
              The product is not available
            </p>
            <Link to='/' className="btn btn-primary">Go Back Home</Link>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Earphones;