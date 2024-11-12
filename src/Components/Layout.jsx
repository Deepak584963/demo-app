import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <div className="w-screen h-screen ">
        <Sidebar />
        <div className=" ml-64 bg-slate-100">
          <Header />

          <Outlet />
        </div>
        <div className="ml-64 bg-slate-100 h-64"></div>
      </div>
    </>
  );
};

export default Layout;
