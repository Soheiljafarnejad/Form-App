const TermsBox = ({ className, formik, name, label }) => {
  return (
    <div className={className}>
      <input
        type="checkbox"
        id={name}
        name={name}
        value={!formik.values[name]}
        {...formik.getFieldProps(name)}
        checked={formik.values[name]}
      />
      <label htmlFor={name}>{label}</label>
      {formik.errors[name] && formik.touched[name] && (
        <span className="error">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default TermsBox;
