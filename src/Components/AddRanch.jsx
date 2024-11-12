import React from "react";

const AddRanch = () => {
  return (
    <div className="flex flex-col w-full p-8 h-full bg-slate-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Add Ranch</h2>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <form className="grid grid-cols-3 justify-evenly gap-12">
          {/* Left Column */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="mt-2 p-3  rounded-lg bg-slate-100 focus:outline-none"
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="text-gray-700 font-medium">
              Description<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Description"
              className="mt-2 p-3  rounded-lg bg-slate-100 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Area Size<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Area Size"
              className="mt-2 p-3  rounded-lg bg-slate-100 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Contact Person<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Contact Person"
              className="mt-2 p-3  rounded-lg bg-slate-100 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Name"
              className="mt-2 p-3  rounded-lg bg-slate-100 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="mt-2 p-3  rounded-lg bg-slate-100 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter City"
              className="mt-2 p-3  rounded-lg bg-slate-100 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Zip Code<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Zip Code"
              className="mt-2 p-3  rounded-lg bg-slate-100 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              State<span className="text-red-500">*</span>
            </label>
            <select className="mt-2 p-3  rounded-lg bg-slate-100 focus:outline-none">
              <option>Select State</option>
              <option>Arizona</option>
              <option>New Jersey</option>
              <option>Montena</option>
            </select>
          </div>

          <div className="flex flex-col col-span-2">
            <label className="text-gray-700 font-medium">
              Additional Details
            </label>
            <input
              type="text"
              placeholder="Enter Additional Details"
              className="mt-2 p-3 rounded-lg bg-slate-100 focus:outline-none"
            />
          </div>

          <div className="col-span-3 flex justify-center space-x-4">
            <button
              type="button"
              className="px-12 py-4 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-12 py-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRanch;
