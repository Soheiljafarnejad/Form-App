const SelectOption = ({ name, className, formik, options }) => {
  return (
    <div className={className}>
      <select name={name} {...formik.getFieldProps({ name })}>
        {options.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <span className="error">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default SelectOption;
