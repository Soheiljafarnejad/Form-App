import style from "./Login.module.css";
import Input from "../../common/Input";
import TermsBox from "../../common/TermsBox";
import { useFormik } from "formik";
import * as yup from "yup";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
    remember: true,
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("ایمیل نمی تواند خالی باشد.")
      .email("لطفا ایمیل را به صورت کامل و صحیح وارد کنید."),

    password: yup
      .string()
      .required("رمز عبور نمی تواند خالی باشد.")
      .min(8, "رمز عبور نمی تواند کمتر از 8 کاراکتر باشد.")
      .max(64, "رمز عبور نمی تواند بیشتر از 64 کاراکتر باشد."),

    remember: yup.boolean(),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <section className={style.login}>
      <div className={style.title}>
        <h2>ورود به حساب کاربری</h2>
        <p>لطفا نام کاربری و رمز عبور خود را وارد کنید.</p>
      </div>

      <form onSubmit={formik.handleSubmit} noValidate>
        <div className={style.formControl}>
          <Input
            label="آدرس ایمیل(نام کاربری)"
            name="email"
            type="email"
            formik={formik}
            props={{ placeholder: "example@gmail.com" }}
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

        <div className={`${style.formControl} ${style.remember}`}>
          <TermsBox
            formik={formik}
            name="remember"
            label="برای دفعه بعدی مرا به خاطر بسپار."
          />
        </div>

        <button className={style.submit} type="submit">
          ورود
        </button>
      </form>
    </section>
  );
};

export default Login;
