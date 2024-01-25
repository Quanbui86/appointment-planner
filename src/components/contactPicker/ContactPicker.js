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
        <option value=''>No Contact Selected</option>
        {contacts.map((contact, index) => <option key={index}>{contact.name}</option>)}
      </select>
    </>
  );
};
