
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Subnav from './components/Subnav/Subnav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';


const Layout = () => {
  return (
    <div className="app">
       <Navbar />
        <Subnav />
        <Outlet />
        <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
