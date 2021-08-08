import React from 'react';
import { Formik, Form, Field } from "formik";

export default function Thanks({details}) {
    const {firstName, lastName, address, phone, email, detail} = details;
    return (

        <div>
          <h3>Tebrikler, şikayetiniz başarıyla iletilmiştir.</h3>
          <Formik
            initialValues={{
              firstName: `${firstName}`,
              lastName: `${lastName}`,
              address: `${address}`,
              phone: `${phone}`,
              email: `${email}`,
              detail: `${detail}`
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field name="firstName" disabled/>
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
                <br/>
                <br/>
                <Field name="lastName" disabled/>
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
                <br/>
                <br/>
                <Field name="address" as="textarea" disabled/>
                {errors.address && touched.address ? (
                  <div>{errors.address}</div>
                ) : null}
      <br/>
      <br/>
                <Field name="phone" type="phone" disabled/>
                {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
                <br/>
                <br/>
                <Field name="email" type="email" disabled/>
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                <br/>
                <br/>
                <Field name="detail" as="textarea" disabled/>
                {errors.detail && touched.detail ? (
                  <div>{errors.detail}</div>
                ) : null}

              </Form>
            )}
          </Formik>
        </div>
      )
}
