import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isDuplicate, setIsDuplicate] = useState(false);

  useEffect(() => {
    setIsDuplicate(contacts.some(contact => contact.name === form.name));
  }, [form, contacts]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!isDuplicate) {
    addContact(form)
    setForm({
      name: '',
      phone: '',
      email: ''
    })
   } else {
    alert('bad username')
   }
    
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          form={form}
          name={form.name}
          phone={form.phone}
          email={form.email}
          setForm={setForm}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
