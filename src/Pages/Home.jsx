import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("https://reu1y4qga6.execute-api.us-east-1.amazonaws.com/dev/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  //filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio Button Filtering
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Button based Filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  //calculating index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  //function for when next is clicked for next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  //function for the pervious when prev is clicked for previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  //Main Function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    //filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }
    //category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          postingDate >= selected.toLowerCase()
      );
    }
    //slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/**Content Here */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/**Filter left side */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        {/**job cards */}
        <div className="col-span-2 bg-white p-4 rounded">
          {isLoading ? (
            <p>Loading.....</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No Data Found!</p>{" "}
            </>
          )}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                className="hover:underline"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                className="hover:underline"
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/**Right side */}
        <div className="bg-white p-4 rounded">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};
export default Home;
