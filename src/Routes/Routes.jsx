import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Statistics from '../Pages/Statistics';
import Dashboard from '../Pages/Dashboard';
import ErrorPage from '../Pages/ErrorPage';
import ExploreGadgets from '../components/ExploreGadgets';
import Product from '../Pages/product';
import Cart from '../Pages/cart';
import Wishlist from '../Pages/wishlist';
import Gadget from '../components/Gadget';
import Keyboards from '../components/Keyboard';
import Mobiles from '../components/Mobile';
import Earphones from '../components/Earphones';
import Laptop from '../components/Laptop';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/',
            element: <ExploreGadgets />,
            loader: async () => {
              try {
                const response = await fetch('/categories.json'); // Path correction
                if (!response.ok) throw new Error('Network response was not ok');
                return await response.json();
              } catch (error) {
                console.error("Failed to fetch data:", error);
                return null;
              }
            },
            children: [
              {
                path: '/', // Relative path for nested route
                element: <Gadget/>,
                errorElement: <ErrorPage/>
                },
              {
                path: '/cards/All%20Products', // Relative path for nested route
                element: <Gadget/>,
                errorElement: <ErrorPage/>
                },
              {
                path: '/cards/Keyboards', // Relative path for nested route
                element: <Keyboards/>,
                errorElement: <ErrorPage/>
                },
                {
                  path: '/cards/Mobile', // Relative path for nested route
                  element: <Mobiles/>,
                  errorElement: <ErrorPage/>
                  },
                {
                  path: '/cards/Earphones', // Relative path for nested route
                  element: <Earphones/>,
                  errorElement: <ErrorPage/>
                  },
                  {
                    path: '/cards/Laptops', // Relative path for nested route
                    element: <Laptop/>,
                    errorElement: <ErrorPage/>
                    }
            ]
          }
        ]
      },
      {
        path: '/product/:productId',
        element: <Product />
      },
      {
        path: '/statistics',
        element: <Statistics />,
        errorElement: <ErrorPage />
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'cart',
            element: <Cart />,
            errorElement: <ErrorPage />
          },
          {
            path: 'wishlist',
            element: <Wishlist />,
            errorElement: <ErrorPage />
          }
        ]
      }
    ]
  }
]);

export default Routes;
