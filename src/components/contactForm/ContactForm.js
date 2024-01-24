import React from "react";

export const ContactForm = ({
  form,
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  setForm,
  handleSubmit
}) => {
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    }
    )
    console.log(e.target.name)
  }
  console.log(form)
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required />
          <input
            type="text"
            name='phone'
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            required />
          <input
            type="text"
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

