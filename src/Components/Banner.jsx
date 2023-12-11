import React from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";
const Banner = ({ query, handleInputChange }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Find your <span className="text-red-600">new job</span> today
      </h1>
      <p className="text-lg mb-8 text-black/70">
        Thousands of Jobs in the Developer and IT Sector
      </p>
      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
          <div className="flex md:round-s-md rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What position are you looking for?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={query}
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          <div className="flex md:round-s-none md:ml-2 rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600 md:w-1/3 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
            />
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="bg-red-600 py-2 px-8 ml-2 text-white font-semibold md:rounded-s-md rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
