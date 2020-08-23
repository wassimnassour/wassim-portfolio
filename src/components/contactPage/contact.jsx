import React from "react";
import { FormContainer, Form, ContactPageContainer } from "./contact.style";
import { CustomButton } from "../index";
import { FaEnvelope, FaPhoneAlt, FaHome } from "react-icons/fa";
const ContactPage = () => {
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
        <Form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <CustomButton color="black" content={"Submit"} />
        </Form>
      </FormContainer>
    </ContactPageContainer>
  );
};

export default ContactPage;
