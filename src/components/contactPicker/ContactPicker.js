import React from "react";

export const ContactPicker = ({ handleChange, contacts, appointmentForm }) => {

  return (
    <>
      <select
        name='name'
        onChange={handleChange}
        value={appointmentForm.name}
        required
      >
        <option value=''>Choose contact</option>
        {contacts.map((contact, index) => <option key={index}>{contact.name}</option>)}
      </select>
    </>
  );
};
