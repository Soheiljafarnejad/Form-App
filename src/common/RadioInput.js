import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import style from "./style.module.css";

const RadioInput = ({ formik, name, options, className }) => {
  return (
    <div className={`${style.formControl} ${className||""}`}>
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
            <label htmlFor={item.value}>
              <BiErrorCircle />
              {item.label}
            </label>
          </React.Fragment>
        );
      })}
      <span
        className={`${
          formik.errors[name] && formik.touched[name] ? style.error : ""
        }`}
      >
        <BiErrorCircle />
        {formik.errors[name]}
      </span>
    </div>
  );
};

export default RadioInput;
