import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredCartItem, getStoredItemPrice } from "../utilities/AddToLocal";
import { FcApproval } from "react-icons/fc";

// import Card from "../components/Card";
import CartCard from "../components/CartCard";



const Cart = () => {
  const allProducts= useLoaderData();
  const [products,setProducts]=useState([]);
  const [TotalPrice,setTotalPrice]=useState(0);
  useEffect(() => {
    const storedCartList = getStoredCartItem();
    const CartList = allProducts.filter(cartProduct =>
      storedCartList.includes(cartProduct.product_id)
    );
    setProducts(CartList);
  }, [allProducts]);
  const sortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };
  useEffect(() => {
    const storedPriceList = getStoredItemPrice();
    const total = storedPriceList.reduce((acc, price) => acc + price, 0);
    setTotalPrice(total);
  }, []);
  

      
    const clearingData=()=>{
      localStorage.removeItem('cart-list-id')
      localStorage.removeItem('cart-list-price')
      localStorage.removeItem('cart-list-availability')
    }
  return (
    <div>
      <div className="flex justify-between">
      <h1 className="font-extrabold">Cart</h1>
        <div className="flex justify-evenly items-center">
          <p className="px-20 font-extrabold">Total Cost:{TotalPrice}</p>
          <button onClick={sortByPrice} className="btn rounded-full btn-outline">Sort By Price</button>
          <button className="btn rounded-full bg-purple-600 text-white" onClick={()=>{
            document.getElementById('my_modal_4').showModal()
            clearingData()
          }}>Purchase</button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box flex flex-col items-center">
              <div className="text-5xl">
                <FcApproval />
              </div>
              <h3 className="font-bold text-lg py-5">Payment Successfully!!</h3>
              <p className="py-1">Thanks for purchasing</p>
              <p className="py-1">Total: {TotalPrice}</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-wide rounded-full">Close</button>
                </form>
              </div>
            </div>
          </dialog>

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