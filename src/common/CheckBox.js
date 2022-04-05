import React from "react";
const CheckBox = ({ formik, className, name, options }) => {
  return (
    <div className={className}>
      {options.map((item) => {
        return (
          <React.Fragment key={item.value}>
            <input
              type="checkbox"
              id={item.value}
              name={name}
              value={item.value}
              onChange={formik.handleChange}
              checked={formik.values[name].includes(item.value)}
            />
            <label htmlFor={name}>{item.label}</label>
            {formik.errors[name] && formik.touched[name] && (
              <span className="error">{formik.errors[name]}</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CheckBox;
