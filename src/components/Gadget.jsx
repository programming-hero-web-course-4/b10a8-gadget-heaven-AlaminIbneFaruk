import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';


const Gadget = () => {
  const {cards}=useParams()
  const [gadgets, setGadgets] = useState([]);
  useEffect(()=>{
    const fetchProducts=async () => {
    const res=await fetch("/products.json");
    const data=await res.json();
    setGadgets(data);
    }
    fetchProducts();
  },[])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">{cards}
    {gadgets.map(gadget => (
            <Card key={gadget.product_id} gadget={gadget} />
          ))} 
    </div>
  );
};

// Gadget.propTypes = {
//   gadget: PropTypes.shape({
//     product_title: PropTypes.string.isRequired,
//     product_image: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     product_id:PropTypes.number.isRequired
//   }).isRequired,
// };

export default Gadget;
