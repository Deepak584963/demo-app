import React from "react";

const Sidebar = () => {
  return (
    <aside className=" z-10 w-60 absolute h-screen p-4 bg-white">
      <h2 className="text-2xl font-bold mb-8 text-blue-500">
        Demo<span className="text-black">Book</span>
      </h2>
      <nav className="flex flex-col gap-6 h-full">
        <button className="bg-blue-500 text-white py-3 px-3 rounded-lg">
          Dashboard
        </button>
        <button className="text-black ">Note Lists</button>
        <button className="text-black">Task Lists</button>
        <button className="text-black">Users</button>
      </nav>
      <div className="w-60 p-9 h-32 px-16 border-t-2">
        <button className="w-full flex items-center gap-2 text-black py-2 px-4 rounded-lg">
          Settings
        </button>
        <button className="w-full flex items-center gap-2 text-black py-2 px-4 rounded-lg mt-4">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
