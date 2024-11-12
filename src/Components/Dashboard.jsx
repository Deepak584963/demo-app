import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <main className="p-8 bg-slate-100 w-full h-screen ">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="text-blue-500">Demo</span>Book Dashboard
        </h1>
        <Link to="/add-ranch">
          <button className="bg-orange-400 text-sm  font-bold text-white py-3 px-4 rounded-xl">
            Add Ranch
          </button>
        </Link>{" "}
      </div>

      <div className="bg-white shadow-md rounded-lg w-full overflow-hidden">
        <table className="w-full text-left">
          <thead className="">
            <tr>
              <th className="p-4 font-medium text-black">Ranch name</th>
              <th className="p-4 font-medium text-black"># Herds</th>
              <th className="p-4 font-medium text-black"># Users</th>
              <th className="p-4 font-medium text-black"># Livestock</th>
              <th className="p-4 font-medium text-black">Contact Name</th>
              <th className="p-4 font-medium text-black">Contact Number</th>
              <th className="p-4 font-medium text-black">Contact Email</th>
              <th className="p-4 font-medium text-black">City</th>
              <th className="p-4 font-medium text-black">State</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                ranch: "Ranch 1",
                herds: 20,
                users: 40,
                livestock: 10000,
                name: "John Doe",
                phone: "+12-1243123231",
                email: "johndoe121@gmail.com",
                city: "Montena City",
                state: "Arizona",
              },
              {
                ranch: "Ranch 1",
                herds: 20,
                users: 40,
                livestock: 10000,
                name: "John Doe",
                phone: "+12-1243123231",
                email: "johndoe121@gmail.com",
                city: "Montena City",
                state: "Arizona",
              },
              {
                ranch: "Ranch 1",
                herds: 20,
                users: 40,
                livestock: 10000,
                name: "John Doe",
                phone: "+12-1243123231",
                email: "johndoe121@gmail.com",
                city: "Montena City",
                state: "Arizona",
              },
              {
                ranch: "Ranch 1",
                herds: 20,
                users: 40,
                livestock: 10000,
                name: "John Doe",
                phone: "+12-1243123231",
                email: "johndoe121@gmail.com",
                city: "Montena City",
                state: "Arizona",
              },
              // Add more rows as needed
            ].map((row, index) => (
              <tr key={index} className="border-t">
                <td className="p-5">{row.ranch}</td>
                <td className="p-5">{row.herds}</td>
                <td className="p-5">{row.users}</td>
                <td className="p-5">{row.livestock}</td>
                <td className="p-5">{row.name}</td>
                <td className="p-5">{row.phone}</td>
                <td className="p-5">{row.email}</td>
                <td className="p-5">{row.city}</td>
                <td className="p-5">{row.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-gray-600">Showing 1-09 of 78</p>
        <div className="flex items-center gap-2">
          <button className="p-2 bg-gray-200 rounded-lg">&lt;</button>
          <button className="p-2 bg-gray-200 rounded-lg">&gt;</button>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
