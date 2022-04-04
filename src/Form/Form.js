import style from "./Form.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";

const Form = () => {
  const data = {
    name: "soheil",
    email: "test@mail.com",
    phone: "09123456789",
    gender: "male",
    password: "Soheil@1",
    passwordConfirm: "Soheil@1",
  };

  const [autofill, setAutofill] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    passwordConfirm: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "must be at least 3 characters long")
      .required("Name is require"),
    email: yup
      .string()
      .email("invalid email format")
      .required("Email is require"),
    phone: yup
      .string()
      .min(11)
      .max(11)
      .matches(/^[0-9]/, "invalid phone format")
      .required("phone is require"),
    gender: yup.string(),
    password: yup
      .string()
      .matches(/^(?=.*[0-9])/, "One number")
      .matches(/^(?=.*[a-z])/, "One Lowercase")
      .matches(/^(?=.*[A-Z])/, "One Uppercase")
      .min(8, "must be at least 8 characters long")
      .max(32, "must not be more than 32 characters")
      .required("Password is require"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Password Confirm is require"),
  });

  const formik = useFormik({
    initialValues: autofill || initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
  });

  return (
    <section>
      <form className={style.form} onSubmit={formik.handleSubmit} noValidate>
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
          {...formik.getFieldProps("name")}
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
          {...formik.getFieldProps("email")}
        />

        <label htmlFor="phone">
          <p>Phone</p>
          {formik.errors.phone && formik.touched.phone && (
            <span className={style.validation}>{formik.errors.phone}</span>
          )}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          minLength={11}
          maxLength={11}
          inputMode="numeric"
          value={formik.values.phone}
          {...formik.getFieldProps("phone")}
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
          {...formik.getFieldProps("password")}
        />

        <label htmlFor="passwordConfirm">
          <p>Password Confirm</p>
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <span className={style.validation}>
              {formik.errors.passwordConfirm}
            </span>
          )}
        </label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          value={formik.values.password}
          {...formik.getFieldProps("passwordConfirm")}
        />

        <div className={style.gender}>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={formik.handleChange}
            checked={formik.values.gender === "male"}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={formik.handleChange}
            checked={formik.values.gender === "female"}
          />
          <label htmlFor="female">Female</label>
        </div>

        <button
          type="button"
          onClick={() => {
            setAutofill(data);
          }}
        >
          Autofill
        </button>

        <button className={style.submit} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
