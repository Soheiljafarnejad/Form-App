import style from "./Form.module.css";
import { useFormik } from "formik";

const Form = () => {
  const initialValues = { name: "", email: "", password: "" };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    let error = {};
    if (!values.name) {
      error.name = "Name is require";
    }
    if (!values.email) {
      error.email = "Email is require";
    }
    if (!values.password) {
      error.password = "Password is require";
    }
    return error;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <section>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <label htmlFor="name">
          <p>Name</p>
          {formik.errors.name && formik.touched.name && (
            <span className={style.validation}>{formik.errors.name}</span>
          )}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <label htmlFor="email">
          <p>Email</p>
          {formik.errors.email && formik.touched.email && (
            <span className={style.validation}>{formik.errors.email}</span>
          )}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <label htmlFor="password">
          <p>Password</p>
          {formik.errors.password && formik.touched.password && (
            <span className={style.validation}>{formik.errors.password}</span>
          )}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <button className={style.submit} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
