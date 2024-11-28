import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Heading from "../components/Heading";
import { addToStoredCartItem, addToStoredWishListItem } from "../utilities/AddToLocal";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleAddToCart=(TEXT)=>{
    console.log(TEXT);
    // understand what to store 
    // where to store
    // ki rupe store koro array, list, correction
    // check korte paro already ache ki na
    // na thakle add korte hobe
    // thakle add korte hobe na
    // 
    addToStoredCartItem(TEXT)
  }
  const handleWishlist=(TEXT)=>{
    addToStoredWishListItem(TEXT)
    console.log(TEXT);
  }
  useEffect(() => {
    // Fetch product details (replace with your API or local fetch logic)
    setLoading(true); // Show loading state when fetching starts
    setError(null); // Reset error state
    const fetchProduct=async()=>{
      try{
        const res=await fetch('/products.json')
      const data=await res.json()   
        console.log(data)
        const foundProduct =data.find(item => item.product_id === productId); // Ensure comparison with a number
        setProduct(foundProduct);
        setLoading(false); // Set loading to false after data is fetched
      }
      catch(err) {
        setError("Failed to fetch product details.");
        setLoading(false); // Set loading to false after error
        console.error(err);
      }}
      fetchProduct()
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found!</p>;

  const { product_title, product_image, price, description, specification, availability, rating } = product;

  return (
    <div className="">
      <div className="flex justify-center bg-purple-600 mb-2 pb-20">
        <div className="text-center text-white ">
          <Heading subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!" title="Product Details" />
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:card lg:card-side bg-base-100 shadow-xl lg:max-w-[66%] mx-auto lg:absolute lg:z-10 lg:top-48">
          <div className="flex-1 lg:w-4/8  rounded-lg bg-white">
            <img
              src={product_image}
              alt={product_title}
              className="w-full h-[200px] object-cover align-middle rounded-lg"
            />
          </div>

          <div className="w-4/8 p-3">
            <h2 className="card-title">{product_title}</h2>
            <p className="text-gray-700 mb-2">{description}</p>
            
            <div className="text-sm text-gray-500 py-3">
              <p className="font-bold">
                <span className={`btn btn-outline rounded-full ${availability ? 'btn-success' : 'btn-error'}`}> 
                  {availability ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p className="font-bold">Price: <span>${price}</span></p>
              <p className="font-bold">Rating: <span>{rating}</span></p>
              <div className="rating gap-1">
                {[...Array(5)].map((_, i) => (
                  <input 
                    key={i}
                    type="radio" 
                    name="rating-3"
                    className={`mask mask-star ${i < rating ? 'bg-yellow-500' : 'bg-gray-300'}`} 
                    disabled
                  />
                ))}
              </div>
            </div>
            
            <div className="text-sm text-gray-500 ">
              <strong>Specifications:</strong>
              {specification && specification.length > 0 ? (
                <ul className="list-disc list-inside">
                  {specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              ) : (
                <p>No specifications available.</p>
              )}
            </div>

            <div className="card-actions justify-start">
              <button className="btn rounded-full bg-purple-500 text-white"
              onClick={()=>{handleAddToCart(productId)}}>
                <span>Add To Cart</span>
                <MdOutlineShoppingCart/>
              </button>
              <button onClick={()=>{handleWishlist(productId)}}>
                <CiHeart className="btn-circle bg-white border-2 h-10 w-10 p-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
