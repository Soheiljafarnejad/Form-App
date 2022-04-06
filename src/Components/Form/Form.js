// import style from "./Form.module.css";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { useState } from "react";
// import Input from "../../common/Input";
// import RadioInput from "../../common/RadioInput";
// import SelectOption from "../../common/SelectOption";
// import TermsBox from "../../common/TermsBox";
// import CheckBox from "../../common/CheckBox";

// const Form = () => {

//   const checkBoxOptions = [
//     { label: "React.js", value: "react" },
//     { label: "javaScript", value: "js" },
//   ];

//   const radioOptions = [
//     { label: "Male", value: "male" },
//     { label: "Female", value: "female" },
//   ];

//   const selectOption = [
//     { label: "Choose a country...", value: "" },
//     { label: "Iran", value: "IR" },
//     { label: "Germany", value: "GR" },
//     { label: "USA", value: "US" },
//   ];

//   const [autofill, setAutofill] = useState(null);

//   const data = {
//     name: "soheil",
//     email: "test@mail.com",
//     phone: "09123456789",
//     gender: "male",
//     password: "Soheil@1",
//     passwordConfirm: "Soheil@1",
//     country: "IR",
//     interest: ["react"],
//     terms: true,
//   };

//   const initialValues = {
//     name: "",
//     email: "",
//     phone: "",
//     gender: "",
//     password: "",
//     passwordConfirm: "",
//     country: "",
//     interest: [],
//     terms: false,
//   };

//   const onSubmit = (values) => {
//     console.log(values);
//   };

//   const validationSchema = yup.object({
//     name: yup
//       .string()
//       .min(3, "must be at least 3 characters long")
//       .required("Name is require"),
//     email: yup
//       .string()
//       .email("invalid email format")
//       .required("Email is require"),
//     phone: yup
//       .string()
//       .min(11)
//       .max(11)
//       .matches(/^[0-9]/, "invalid phone format")
//       .required("phone is require"),
//     gender: yup.string().required("gender is require"),
//     password: yup
//       .string()
//       .matches(/^(?=.*[0-9])/, "One number")
//       .matches(/^(?=.*[a-z])/, "One Lowercase")
//       .matches(/^(?=.*[A-Z])/, "One Uppercase")
//       .min(8, "must be at least 8 characters long")
//       .max(32, "must not be more than 32 characters")
//       .required("Password is require"),
//     passwordConfirm: yup
//       .string()
//       .oneOf([yup.ref("password"), null], "Passwords must match")
//       .required("Password Confirm is require"),
//     country: yup.string().required("country is require"),
//     interest: yup.array().min(1).required("select one interest"),
//     terms: yup
//       .boolean()
//       .oneOf([true], "Must Accept Terms and Conditions")
//       .required("Must Accept Terms and Conditions"),
//   });

//   const formik = useFormik({
//     initialValues: autofill || initialValues,
//     onSubmit,
//     validationSchema,
//     enableReinitialize: true,
//   });

//   return (
//     <section>
//       <form className={style.form} onSubmit={formik.handleSubmit} noValidate>
//         <Input
//           name={"name"}
//           label="Name"
//           formik={formik}
//           className={style.formControl}
//         />

//         <Input
//           name={"email"}
//           label="Email"
//           type="email"
//           formik={formik}
//           className={style.formControl}
//         />

//         <Input
//           name={"phone"}
//           label="Phone"
//           type="tell"
//           formik={formik}
//           minLength={11}
//           maxLength={11}
//           inputMode="numeric"
//           className={style.formControl}
//         />

//         <Input
//           name={"password"}
//           label="Password"
//           type="password"
//           formik={formik}
//           className={style.formControl}
//         />

//         <Input
//           name={"passwordConfirm"}
//           label="PasswordConfirm"
//           type="password"
//           formik={formik}
//           className={style.formControl}
//         />

//         <RadioInput
//           name="gender"
//           options={radioOptions}
//           formik={formik}
//           className={`${style.formControl} ${style.radio}`}
//         />

//         <SelectOption
//           name="country"
//           options={selectOption}
//           formik={formik}
//           className={`${style.formControl} ${style.select}`}
//         />

//         <CheckBox
//           name="interest"
//           options={checkBoxOptions}
//           formik={formik}
//           className={`${style.formControl} ${style.radio}`}
//         />

//         <TermsBox
//           name="terms"
//           label="Accept the terms and conditions"
//           formik={formik}
//           className={`${style.formControl} ${style.radio}`}
//         />

//         <button
//           className={style.btn}
//           type="button"
//           onClick={() => {
//             setAutofill(data);
//           }}
//         >
//           Autofill
//         </button>

//         <button
//           className={style.btn}
//           type="reset"
//           onClick={() => setAutofill(initialValues)}
//         >
//           reset
//         </button>

//         <button className={style.btn} type="submit">
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Form;
