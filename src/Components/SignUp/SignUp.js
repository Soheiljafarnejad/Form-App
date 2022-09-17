import style from "./SignUp.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../common/Input";
import TermsBox from "../../common/TermsBox";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Timer from "../../common/Timer/Timer";
import { useState } from "react";

const Signup = () => {
  const initialValues = {
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    phone: "",
    terms: false,
    verification: "",
  };

  const onSubmit = (values) => {
    // post to Api
    toast.success("ثبت نام با موفقیت انجام شد.");
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("ایمیل نمی تواند خالی باشد.")
      .email("لطفا ایمیل را به صورت کامل و صحیح وارد کنید."),

    password: yup
      .string()
      .required("رمز عبور نمی تواند خالی باشد.")
      .matches(/^(?=.*[a-z])/, "رمز عبور باید داری حداقل یک حرف کوچک لاتین باشد.")
      .matches(/^(?=.*[A-Z])/, "رمز عبور باید داری حداقل یک حرف بزرگ لاتین باشد.")
      .matches(/^(?=.*[0-9])/, "رمز عبور باید دارای حداقل یک عدد باشد")
      .min(8, "رمز عبور نمی تواند کمتر از 8 کاراکتر باشد.")
      .max(64, "رمز عبور نمی تواند بیشتر از 64 کاراکتر باشد."),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "تایید رمز عبور با رمز عبور برابر نیست.")
      .required("تایید رمز عبور نمی تواند خالی باشد."),

    firstName: yup
      .string()
      .min(3, "نام نمی تواند کمتر از سه حرف باشد.")
      .required("نام نمی تواند خالی باشد."),
    lastName: yup
      .string()
      .min(3, "نام خانوادگی نمی تواند کمتر از سه حرف باشد.")
      .required("نام خانوادگی نمی تواند خالی باشد."),

    phone: yup
      .string()
      .matches(/^[0-9]/, "لطفا شماره همراه خود را به صورت صحیح وارد کنید.")
      .min(11, "لطفا شماره همراه خود را به صورت کامل کنید.")
      .max(11, "لطفا شماره همراه خود را به صورت کامل کنید.")
      .required("لطفا شماره همراه خود را به صورت کامل و صحیح وارد کنید."),
    verification: yup
      .string()
      .matches(/^[0-9]/, "کد تایید را به صورت صحیح وارد کنید.")
      .min(6, "کد تایید را به صورت صحیح وارد کنید.")
      .max(6, "کد تایید را به صورت صحیح وارد کنید.")
      .required("کد تایید را به صورت صحیح وارد کنید."),
    terms: yup.boolean().oneOf([true], "لطفا موافقت با شرایط و استفاده از خدمات را تایید نمایید."),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const [verify, setVerify] = useState(false);

  const verifyHandler = () => {
    if (formik.values.phone && !formik.errors.phone) setVerify(true);
  };

  return (
        <section className={style.signUp}>
        <div className={style.title}>
          <h2>عضویت</h2>
          <p>لطفا برای عضویت در پورتال اطلاعات این فرم را تکمیل کنید.</p>
        </div>

        <form onSubmit={formik.handleSubmit} noValidate>
          <div className={`${style.nameBox} ${style.formControl}`}>
            <Input name="firstName" formik={formik} label="نام" props={{ placeholder: "سهیل" }} />
            <Input
              name="lastName"
              formik={formik}
              label="نام خانوادگی"
              props={{ placeholder: "جعفرنژاد" }}
            />
          </div>

          <div className={style.formControl}>
            <Input
              label="آدرس ایمیل (نام کاربری)"
              name="email"
              type="email"
              formik={formik}
              props={{ placeholder: "example@gmail.com" }}
            />
          </div>

          <div className={style.formControl}>
            <Input
              label="تلفن همراه"
              name="phone"
              type="tel"
              formik={formik}
              props={{ minLength: 11, maxLength: 11, placeholder: "شماره همراه" }}
            />
          </div>

          <div className={`${style.verification} ${style.formControl}`}>
            <button
              className={`${
                verify || !formik.values.phone || formik.errors.phone ? style.verify : ""
              }`}
              onClick={verifyHandler}
              type="button"
            >
              {verify ? <Timer min="2" setState={setVerify} /> : <p>ارسال کد</p>}
            </button>
            <Input
              name="verification"
              type="tel"
              formik={formik}
              props={{
                minLength: 6,
                maxLength: 6,
                placeholder: "کد پیامک شده را وارد کنید",
              }}
            />
          </div>

          <div className={style.formControl}>
            <Input
              label="کلمه عبور"
              name="password"
              type="password"
              formik={formik}
              props={{ minLength: 3, maxLength: 64, placeholder: "کلمه عبور" }}
            />
          </div>

          <div className={style.formControl}>
            <Input
              label="تایید کلمه عبور"
              name="passwordConfirm"
              type="password"
              formik={formik}
              props={{
                minLength: 3,
                maxLength: 64,
                placeholder: "تایید کلمه عبور",
              }}
            />
          </div>

          <div className={`${style.formControl} ${style.terms}`}>
            <TermsBox formik={formik} name="terms" label="موافقت با شرایط و استفاده از خدمات" />
          </div>

          <div className={style.footer}>
            <button className={style.submit} type="submit">
              تکمیل ثبت نام
            </button>

            <Link to="/">حساب کاربری دارید؟ ورود به پورتال</Link>
          </div>
        </form>
    </section>
  );
};

export default Signup;
