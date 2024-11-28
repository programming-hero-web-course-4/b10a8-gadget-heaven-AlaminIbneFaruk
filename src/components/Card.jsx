import PropTypes from 'prop-types';

import { NavLink, useParams } from 'react-router-dom';


const Card = ({gadget}) => {
  // console.log(gadget);                       
  const { cards } = useParams();
  console.log(cards);
  const {product_title,product_image,product_id,price}=gadget
  // console.log(product_title,product_image,product_id,price)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
      <div className="card bg-base-100 w-80 shadow-xl">
        <figure className='py-14'>
          <img
            src={product_image}
            alt="Shoes"  className='h-[200px]'/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>{price}$</p>
          <div className="card-actions justify-start">
            <NavLink to={`/product/${product_id}`} className="btn btn-primary btn-outline rounded-full">View Details</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  gadget: 
    PropTypes.shape({
      product_title: PropTypes.string.isRequired,
      product_image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      product_id: PropTypes.string.isRequired,
    })
  ,
};

export default Card;
