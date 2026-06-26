import React from "react";

const Contact = ({ email, phone }) => {
  return (
    <>
      <div>Email : {email}</div>
      <div>Phone Number : +91 {phone}</div>
    </>
  );
};

export default Contact;
