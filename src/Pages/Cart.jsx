
const Cart = () => {
  return (
    <div>
      <div className="flex justify-between">
      <h1>Cart</h1>
        <div className="flex justify-evenly items-center">
          <p>Total Cost:</p>
          <button className="btn rounded-full btn-outline">Sort By Price</button>
          <button className="btn rounded-full bg-purple-600 text-white">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;