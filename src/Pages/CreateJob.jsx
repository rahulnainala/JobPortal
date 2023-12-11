import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
const CreateJob = () => {
  const [selectedoption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedoption;
    //console.log(data);
    fetch(
      "https://reu1y4qga6.execute-api.us-east-1.amazonaws.com/dev/post-job",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged === true) {
          alert("Job Posted Sucessfully!!!");
        }
        reset();
      });
  };

  const options = [
    {
      value: "JavaScript",
      label: "JavaScript",
    },
    {
      value: "C++",
      label: "C++",
    },
    {
      value: "HTML",
      label: "HTML",
    },
    {
      value: "CSS",
      label: "CSS",
    },
    {
      value: "React",
      label: "React",
    },
    {
      value: "Node",
      label: "Node",
    },
    {
      value: "MongoDB",
      label: "MongoDB",
    },
    {
      value: "Redux",
      label: "Redux",
    },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/**Form */}
      <div className="bg-[#FAFAFA] py-10px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/**1st row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                className="create-job-input"
                type="text"
                placeholder={"Web Developer"}
                {...register("jobTitle", { required: true })}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                className="create-job-input"
                type="text"
                placeholder="Ex: Meta"
                {...register("companyName", { required: true })}
              />
            </div>
          </div>
          {/**2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                className="create-job-input"
                type="text"
                placeholder="₹20k"
                {...register("minPrice", { required: true })}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                className="create-job-input"
                type="text"
                placeholder="₹50k"
                {...register("maxPrice", { required: true })}
              />
            </div>
          </div>
          {/**3rd Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose Your Salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                className="create-job-input"
                type="text"
                placeholder="Ex: Bengaluru"
                {...register("jobLocation")}
              />
            </div>
          </div>
          {/**4th Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                className="create-job-input"
                type="date"
                placeholder="Ex: 2023-12-08"
                {...register("postingDate")}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value="">Select Your Experience Level</option>
                <option value="Any experience">Any experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>
          {/**5th row */}
          <div>
            <label className="block mb-2 text-lg">Required Skill Sets:</label>
            <Select
              className="create-job-input py-4"
              defaultValue={selectedoption}
              onChange={setSelectedOption}
              options={options}
              isMulti
            />
          </div>
          {/**6 th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                className="create-job-input"
                type="url"
                placeholder="Paste your logo url : https://www.weshareimg.com"
                {...register("companyLogo")}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value="">Select Your Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>
          {/**7th Row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              rows={6}
              placeholder="Job Description here"
              {...register("description")}
              className="create-job-input py-1.5 pl-3 focus:outline-none "
            />
          </div>
          {/**8th Row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input
              className="create-job-input"
              type="email"
              placeholder="yourname@mail.com"
              {...register("postedBy", { required: true })}
            />
          </div>
          <input
            type="submit"
            className="my-5 block mt-12 bg-red-600 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
