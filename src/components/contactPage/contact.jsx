import React, { useState } from "react";
import { FormContainer, Form, ContactPageContainer } from "./contact.style";
import { CustomButton } from "../index";
import { FaEnvelope, FaPhoneAlt, FaHome } from "react-icons/fa";
import { useFormik } from "formik";
import axios from "axios";
import { navigate } from "gatsby";
const ContactPage = () => {
  const validate = values => {
    const errors = {};
    if (!values.message) {
      errors.message = "Required";
    }

    if (!values.fullName) {
      errors.fullName = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      message: "",
      email: "",
    },
    validate,
    onSubmit: (values, actions) => {
      console.log(actions);
      axios({
        method: "POST",
        url: "https://formspree.io/meqrwnbn",
        data: values,
      })
        .then(response => {
          actions.setSubmitting(false);
          actions.resetForm();
          handleServerResponse(true, "Thank you for getting in touch! !");
          navigate("/");
        })
        .catch(error => {
          actions.setSubmitting(false);
          handleServerResponse(false, error.response.data.error);
        });
    },
  });

  return (
    <ContactPageContainer>
      <div className="section1">
        <div className="box-wrapper">
          <div className="icon">
            <FaPhoneAlt />
          </div>
          <div className="text">
            <span>+212 06 41 32 71 28</span>
          </div>
        </div>
        <div className="box-wrapper">
          <div className="icon">
            <FaEnvelope />
          </div>
          <div className="text">
            <span>Wassimnassour@gmail.com</span>
          </div>
        </div>
        <div className="box-wrapper">
          <div className="icon">
            <FaHome />
          </div>
          <div className="text">
            <span>Ain Harrouda Mohammedia, Morocco.</span>
          </div>
        </div>
      </div>
      <FormContainer>
        <h2>How Can I Help You?</h2>
        <Form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <span className="error">{formik.errors.fullName}</span>
          ) : null}

          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="error">{formik.errors.email}</span>
          ) : null}

          <textarea
            placeholder="Message"
            name="message"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <span className="error">{formik.errors.message}</span>
          ) : null}
          <button type="submit">submit</button>
          {serverState && (
            <span className={!serverState.ok ? "error" : "succes"}>
              {serverState.msg}
            </span>
          )}
        </Form>
      </FormContainer>
    </ContactPageContainer>
  );
};

export default ContactPage;
