import { BiErrorCircle } from "react-icons/bi";
import style from "./style.module.css";

import React from "react";
const CheckBox = ({ formik, className, name, options }) => {
  return (
    <div className={`${style.formControl} ${className||""}`}>
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
            <label htmlFor={name}>
            
              {item.label}
              </label>
            <span
              className={`${
                formik.errors[name] && formik.touched[name] ? style.error : ""
              }`}
            >
              <BiErrorCircle />
              {formik.errors[name]}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CheckBox;
