import React from "react";
import InputField from "../Components/InputField";

const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Type of Employment</h4>
      <div>
        <InputField
          handleChange={handleChange}
          value="full-time"
          title="Full-Time"
          name="test"
        />{" "}
        <InputField
          handleChange={handleChange}
          value="part-time"
          title="Part-Time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Temporary"
          title="Temporary"
          name="test"
        />{" "}
      </div>
    </div>
  );
};

export default EmploymentType;
