import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredWishListItem } from "../utilities/AddToLocal";
import CartCard from "../components/CartCard";

const Wishlist = () => {
  const allProducts= useLoaderData();
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    const storedCartList=getStoredWishListItem()
    console.log(storedCartList,allProducts)
    const CartList = allProducts.filter(cartProduct=>storedCartList.includes(cartProduct.product_id))
    console.log(CartList)
    setProducts(CartList)
  },[allProducts])
  return (
    <div>
      <div className="flex justify-between">
      <h1 className="font-extrabold">Cart</h1>
        <div className="flex justify-evenly items-center">
          <p className="px-20 font-extrabold">Total Cost:</p>
          <button className="btn rounded-full btn-outline">Sort By Price</button>
          <button className="btn rounded-full bg-purple-600 text-white">Purchase</button>

        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
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

export default Wishlist;