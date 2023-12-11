import React from "react";
import { IoIosMailOpen, IoIosRocket } from "react-icons/io";

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    console.log("Subscribed!");
  };

  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <IoIosMailOpen />
          Email me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Are you on the lookout for premium job opportunities tailored just for
          you? Look no further! We are thrilled to introduce our exclusive
          subscription-based job portal, offering a curated selection of
          high-quality positions in your field.
        </p>
        <form onSubmit={handleSubscribe}>
          <div className="w-full space-y-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@mail.com"
              className="w-full block py-2 pl-3 border focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="w-full block py-2 pl-3 border focus:outline-none bg-red-500 text-white font-semibold cursor-pointer"
            />
          </div>
        </form>
      </div>

      {/**2nd part */}
      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <IoIosRocket />
          Get Noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Ready to stand out in the job market? Take the first step towards
          career success by uploading your resume now!
        </p>
        <form onSubmit={handleSubscribe}>
          <div className="w-full space-y-4">
            <input
              type="submit"
              value="Upload your Resume"
              className="w-full block py-2 pl-3 border focus:outline-none bg-red-500 text-white font-semibold cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
