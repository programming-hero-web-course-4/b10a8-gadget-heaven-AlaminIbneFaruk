/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const Categories = ({ categories }) => {
  categories.map(category=>
    console.log(category.category)
  )
  return (
    <div>
      <ul className="menu bg-base-200 rounded-box mr-5 max-h-[250px]">
        {categories.map((category) => (
          <li key={category.category} className="btn-outline btn-primary text-white">
            
            {
            category.category !== "All Products" ? (
              <Link to={`/cards/${category.category}`}>{category.category}</Link>
            ) : (
              <Link to={`/`}>{category.category}</Link>
            )
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
