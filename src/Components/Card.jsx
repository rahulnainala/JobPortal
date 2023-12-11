import React from "react";
import { Link } from "react-router-dom";
import { FaCalendar, FaClock, FaIndianRupeeSign, FaMap } from "react-icons/fa6";
const Card = ({ data }) => {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
  } = data;
  return (
    <section className="card">
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} height={90} width={90} alt="" />
        <div>
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>
          <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
            <span className="flex items-center gap-2">
              <FaMap /> {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <FaClock /> {employmentType}
            </span>
            <span className="flex items-center gap-2">
              <FaIndianRupeeSign /> {minPrice}-{maxPrice}k
            </span>
            <span className="flex items-center gap-2">
              <FaCalendar /> {postingDate}
            </span>
          </div>
          <p className="text-base text-primary/70">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
