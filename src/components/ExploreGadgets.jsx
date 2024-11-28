
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "./Categories";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { data } from "autoprefixer";

const ExploreGadgets = () => {
  const categories=useLoaderData();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Explore Gadgets</h1>
      <div className="flex">
      <Categories categories={categories}/>
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default ExploreGadgets;
