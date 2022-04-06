import { BiErrorCircle } from "react-icons/bi";
import style from "./style.module.css";

const SelectOption = ({ name, className, formik, options }) => {
  return (
    <div className={`${style.formControl} ${className||""}`}>
      <select name={name} {...formik.getFieldProps({ name })}>
        {options.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
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

export default SelectOption;
