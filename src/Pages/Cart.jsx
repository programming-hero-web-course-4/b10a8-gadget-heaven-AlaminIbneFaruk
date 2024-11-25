
const Cart = () => {
  const Array=[1,2,3,4,5,6,7,8,9,100]
  let total=0;
  Array.map(num=>total=num+total)
  return (
    <div>
      <div className="flex justify-between">
      <h1 className="font-extrabold">Cart</h1>
        <div className="flex justify-evenly items-center">
          <p className="px-20 font-extrabold">Total Cost: {total}</p>
          <button className="btn rounded-full btn-outline">Sort By Price</button>
          <button className="btn rounded-full bg-purple-600 text-white">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;