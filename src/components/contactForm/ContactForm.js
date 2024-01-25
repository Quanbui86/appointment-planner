import React from "react";

export const ContactForm = ({
  contactForm,
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  setContactForm,
  handleSubmit
}) => {
  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    }
    )
    console.log(e.target.name)
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name='name'
            value={contactForm.name}
            onChange={handleChange}
            placeholder="Name"
            required />
          <input
            type="text"
            name='phone'
            pattern="^\d{4}-\d{3}-\d{3}$"
            value={contactForm.phone}
            onChange={handleChange}
            placeholder="Phone"
            required />
          <input
            type="text"
            name='email'
            value={contactForm.email}
            onChange={handleChange}
            placeholder="Email"
            required />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

