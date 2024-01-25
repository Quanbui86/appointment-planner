import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      addContact(contactForm)
      setContactForm({
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
  useEffect(() => {
    setIsDuplicate(contacts.some(contact => contact.name === contactForm.name));
  }, [contactForm, contacts]);


  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          contactForm={contactForm}
          name={contactForm.name}
          phone={contactForm.phone}
          email={contactForm.email}
          setContactForm={setContactForm}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
