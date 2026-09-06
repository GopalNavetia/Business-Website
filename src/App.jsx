import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurWork from "./pages/OurWork";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <main className="w-full overflow-x-hidden pt-[68px] sm:pt-[76px]">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/our-work", element: <OurWork /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;