import { createBrowserRouter } from 'react-router-dom';

// আপনার পেজ এবং লেআউট ইম্পোর্ট করুন (উপরের মতো)
import HomePage from '../pages/HomePage';

import NotFoundPage from '../pages/NotFoundPage';
import MainLayout from '../layout/MainLayout';

export const router = createBrowserRouter([
  {
    // এটি হলো প্রধান লেআউট রাউট
    path: '/',
    element: <MainLayout />, // MainLayout-এ Navbar, Footer থাকবে
    errorElement: <NotFoundPage />, // কোনো রুটে সমস্যা হলে এটা দেখাবে
    children: [
      // MainLayout-এর ভেতরের চাইল্ড রাউট
      {
        path: '/',
        element: <HomePage />,
      },
    //   {
    //     path: '/products/:id', // :id মানে এটি ডাইনামিক, যেমন /products/123
    //     element: <ProductDetailsPage />,
    //   },
    //   {
    //     path: '/cart',
    //     element: <CartPage />,
    //   },
    //   {
    //     path: '/login',
    //     element: <LoginPage />,
    //   },
    ],
  },
  // আপনি যদি কোনো পেজ লেআউট ছাড়া দেখাতে চান (যেমন অ্যাডমিন ড্যাশবোর্ড)
  // {
  //   path: '/admin',
  //   element: <AdminDashboard />,
  // }
]);