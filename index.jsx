import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/layout";

import "./server";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import Footer from "./components/Footer";
import VansHost from "./pages/Host/VansHost";
import VansHostDetail from "./pages/Host/VanHostDetail";
import VanHostInfo from "./pages/Host/VanHostInfo";
import VanHostPrice from "./pages/Host/VanHostPrice";
import VanHostPhoto from "./pages/Host/VanHostPhoto";
import NotFound from "./pages/404/404";
import Login from "./pages/Login";
import AuthReq from "./components/AuthRequire";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthReq />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<VansHost />} />
              <Route path="vans/:id" element={<VansHostDetail />}>
                <Route index element={<VanHostInfo />} />
                <Route path="pricing" element={<VanHostPrice />} />
                <Route path="photo" element={<VanHostPhoto />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
