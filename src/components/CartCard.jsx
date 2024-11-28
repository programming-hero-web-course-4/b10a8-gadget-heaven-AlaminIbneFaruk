import PropTypes from 'prop-types';

import { NavLink, useParams } from 'react-router-dom';


const CartCard = ({gadget}) => {
  // console.log(gadget);                       
  const { cards } = useParams();
  console.log(cards);
  const {product_title,product_image,product_id,price,description}=gadget
  // console.log(product_title,product_image,product_id,price)
  return (
    <div className="">
      <div className="card flex-row card-compact bg-base-100 shadow-xl">
        <figure className='py-14'>
          <img
            src={product_image}
            alt="Shoes"  className='h-[100px] w-full mx-10'/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>{price}$</p>
          <div className="card-actions justify-start">
            <NavLink to={`/product/${product_id}`} className="btn btn-primary btn-outline rounded-full">View Details</NavLink>
            <p>{description}</p>
          </div>
        </div>
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