import React from "react";
import { FaBell } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="sticky bg-white w-full flex justify-end p-4 gap-4">
      <div className="flex items-center gap-3">
        <FaBell className="text-gray-600" />
        <span className="text-red-500">6</span>
        <select className="border rounded-lg p-1 text-gray-600">
          <option>English</option>
          <option>Español</option>
        </select>
      </div>
      <div className="flex items-center gap-5">
        <FiUser className="text-gray-600" />
        <div>
          <p className="text-gray-800 font-semibold">Moni Roy</p>
          <p className="text-gray-500 text-sm">Admin</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
