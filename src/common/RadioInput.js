import React from "react";

const RadioInput = ({ formik, name, options, className }) => {
  return (
    <div className={className}>
      {options.map((item) => {
        return (
          <React.Fragment key={item.value}>
            <input
              type="radio"
              name={name}
              id={item.value}
              value={item.value}
              onChange={formik.handleChange}
              checked={formik.values[name] === item.value}
            />
            <label htmlFor={item.value}>{item.label}</label>
          </React.Fragment>
        );
      })}
      {formik.errors[name] && formik.touched[name] && (
        <span className="error">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default RadioInput;
