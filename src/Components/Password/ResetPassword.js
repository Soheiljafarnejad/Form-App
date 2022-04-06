import style from "./ResetPassword.module.css";
import Input from "../../common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const initialValues = {
    email: "",
  };

  const onSubmit = (values) => {
    // post to Api
    toast.success("ایمیل حاوی لینک برای شما ارسال شد.");
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("ایمیل نمی تواند خالی باشد.")
      .email("لطفا ایمیل را به صورت کامل و صحیح وارد کنید."),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <section className={style.password}>
      <div className={style.title}>
        <h2>فراموشی رمز عبور</h2>
        <p>
          رمز عبور خود را فراموش کرده اید؟ برای شروع روند بازیابی آن، لطفا آدرس
          ایمیل خود را در زیر وارد کنید.
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} noValidate>
        <div className={style.formControl}>
          <Input
            label="آدرس ایمیل"
            name="email"
            type="email"
            formik={formik}
            props={{ placeholder: "example@gmail.com" }}
          />
        </div>

        <div className={style.footer}>
          <button className={style.submit} type="submit">
            ارسال
          </button>
          <Link to="/">بازگشت</Link>
        </div>
      </form>
    </section>
  );
};

export default ResetPassword;