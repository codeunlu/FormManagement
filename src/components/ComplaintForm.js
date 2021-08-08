import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const FormValidates = Yup.object().shape({
  firstName: Yup.string()
    .required("Required"),
  lastName: Yup.string()
    .required("Required"),
  address: Yup.string()
    .required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  detail: Yup.string()
    .min(50, 'Too Short!')
    .max(200, 'Too Long!')
    .required("Required"),
  approve: Yup.boolean()
    .required("Required"),
  
});

export const ComplaintForm = (props) => {
  
  let history = useHistory();

  return (

  <div className="container">
    <h1 className="h1-title">Belediye Şikayet Formu</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        address:"",
        phone: "",
        email: "",
        detail: "",
        approve: "",
      }}
      validationSchema={FormValidates}
      onSubmit={(values) => {
        props.values(values)
        history.push("/thank-you")
      }}
    >
      {({ errors, touched }) => (
        <Form className="form">
          <Field name="firstName" placeholder="İsim giriniz.."/>
          {errors.firstName && touched.firstName ? (
            <span><small>{errors.firstName}</small></span>
          ) : null}

          <Field name="lastName" placeholder="Soyisim giriniz.."/>
          {errors.lastName && touched.lastName ? (
            <span><small>{errors.lastName}</small></span>
          ) : null}

          <Field name="address" as="textarea" placeholder="Adres bilgileriniz.."/>
          {errors.address && touched.address ? (
            <span><small>{errors.address}</small></span>
          ) : null}

          <Field name="phone" type="phone" placeholder="Telefon numaranız.."/>
          {errors.phone && touched.phone ? <span><small>{errors.phone}</small></span> : null}
   
   
          <Field name="email" type="email" placeholder="Email adresini giriniz.."/>
          {errors.email && touched.email ? <span><small>{errors.email}</small></span> : null}
 
          <Field name="detail" as="textarea" placeholder="Şikayetinizi giriniz.."/>
          {errors.detail && touched.detail ? (
            <span><small>{errors.detail}</small></span>
          ) : null}

          <label>
          <Field name="approve" type="checkbox" className="inputCheck" />
          {errors.approve && touched.approve ? <span><small>{errors.approve}</small></span> : null}
          Gizlilik koşullarını kabul ediyorum.
          </label>
  
          <button type="submit">Şikayeti Gönder</button>
        </Form>
      )}
    </Formik>
  </div>
)};
