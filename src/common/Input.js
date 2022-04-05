const Input = ({ label, name, className, formik, type = "text", props }) => {
  return (
    <div className={className}>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formik.values[name]}
        {...formik.getFieldProps({ name })}
        {...props}
      />
      {formik.errors[name] && formik.touched[name] && (
        <span className="error">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default Input;
