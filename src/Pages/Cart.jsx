import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredCartItem, getStoredItemPrice } from "../utilities/AddToLocal";
// import Card from "../components/Card";
import CartCard from "../components/CartCard";


const Cart = () => {
  const allProducts= useLoaderData();
  const [products,setProducts]=useState([]);
  const [productPrice,setProductPrice]=useState([]);
  const [TotalPrice,setTotalPrice]=useState(0);
  useEffect(() => {
    const storedCartList = getStoredCartItem();
    const CartList = allProducts.filter(cartProduct =>
      storedCartList.includes(cartProduct.product_id)
    );
    setProducts(CartList);
  }, [allProducts]);
  useEffect(()=>{
    const storedPriceList=getStoredItemPrice()
    setProductPrice(storedPriceList)
    {
      productPrice.map(price=>setTotalPrice(TotalPrice+price))
      }
  },[])
  const sortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };
  useEffect(() => {
    const storedPriceList = getStoredItemPrice();
    setProductPrice(storedPriceList);
    const total = storedPriceList.reduce((acc, price) => acc + price, 0);
    setTotalPrice(total);
  }, []);
  return (
    <div>
      <div className="flex justify-between">
      <h1 className="font-extrabold">Cart</h1>
        <div className="flex justify-evenly items-center">
          <p className="px-20 font-extrabold">Total Cost:{TotalPrice}</p>
          <button onClick={sortByPrice} className="btn rounded-full btn-outline">Sort By Price</button>
          <button className="btn rounded-full bg-purple-600 text-white">Purchase</button>

        </div>
      </div>
      <div>
      {products && products.length > 0 ? (
        products.map(product => <CartCard key={product.id} gadget={product} />)
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
    </div>
  );
};

export default Cart;