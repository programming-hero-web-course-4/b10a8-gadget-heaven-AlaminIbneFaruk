import { Link } from "react-router-dom";

const NotFound = () => {
  return (
   
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
  )
  ;
};

export default NotFound;