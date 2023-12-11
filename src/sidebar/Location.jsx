import React from "react";
import InputField from "../Components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value="Bengaluru"
          title="Bengaluru"
          name="test"
        />{" "}
        <InputField
          handleChange={handleChange}
          value="Hyderabad"
          title="Hyderabad"
          name="test"
        />{" "}
        <InputField
          handleChange={handleChange}
          value="Chennai"
          title="Chennai"
          name="test"
        />{" "}
        <InputField
          handleChange={handleChange}
          value="London"
          title="London"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="New York"
          title="New York"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
