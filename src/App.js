import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import "../src/style/style.css"
function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([{
    name: 'Leanne Graham',
    phone: 1 - 770 - 736 - 8031,
    email: 'Sincere@april.biz'
  }])
  const [appointments, setAppointments] = useState([{
    title: 'Leanne Graham',
    contact: {
      name: 'Leanne Graham',
      phone: 1 - 770 - 736 - 8031,
      email: 'Sincere@april.biz'
    },
    date: '22-10-2020',
    time: '15h30'
  }])
  /*
  Implement functions to add data to
  contacts and appointments
  */
  function addContact(newContact) {
    setContacts(prev => [...prev, newContact])
  }
  console.log(contacts)

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/appointment-planner" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact}/> /* Add props to ContactsPage */} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage userData={appointments} /> /* Add props to AppointmentsPage */} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
