import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img src="https://i.ibb.co.com/KXhZ3BB/page-Not-Found.jpg" alt="Page Not Found" />
            <h1 className="text-5xl font-bold"><span className="text-5xl font-bold text-red-500">404</span><br/> Page Not Found</h1>
            <p className="py-6">
              Sorry, the page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Link to='/' className="btn btn-primary">Go Back Home</Link>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ErrorPage;