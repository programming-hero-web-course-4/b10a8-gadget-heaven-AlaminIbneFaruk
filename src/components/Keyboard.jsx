import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Card from './Card';
import { Link } from 'react-router-dom';


const Keyboards = () => {
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
        gadget => gadget.category === "Keyboards"
      );
      setProducts(filterByCategories); // Set filtered products
    }
  }, [gadgets]);

  return (
    <div>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
          {products.map(product => <Card key={product.id} gadget={product} />)}
        </div>
      ) : (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="rounded-lg shadow-2xl w-96"
              alt="Not Found"
            />
            <div>
              <h1 className="text-4xl font-bold">Spiderman: I could Not Found this product</h1>
              <p className="py-6">The product is not available</p>
              <Link to="/" className="btn btn-primary">Go Back Home</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );  
};


export default Keyboards;
