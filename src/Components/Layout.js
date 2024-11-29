import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      {/* Main content */}
      <main className="flex-grow">
        <Outlet /> {/* Renders child routes */}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
