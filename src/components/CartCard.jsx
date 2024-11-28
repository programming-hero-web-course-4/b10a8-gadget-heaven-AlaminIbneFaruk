import PropTypes from 'prop-types';
import {  useParams } from 'react-router-dom';
const CartCard = ({gadget}) => {                  
  const { cards } = useParams();
  console.log(cards);
  const {product_title,product_image,product_id,price,description}=gadget
  return (
    <div key={product_id} className='my-10'>
      <div className="card flex-row card-compact bg-base-100 shadow-xl">
        <figure className='py-14'>
          <img
            src={product_image}
            alt="Shoes"  className='h-[100px] w-full mx-10'/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-start">
            <p className='font-bold text-xl'>Price : $ {price}</p>
          </div>
        </div>
        <button className="btn btn-circle btn-outline mx-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  gadget: 
    PropTypes.shape({
      product_title: PropTypes.string.isRequired,
      product_image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      product_id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ,
};

export default CartCard;