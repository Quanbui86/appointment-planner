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
  const [contacts, setContacts] = useState([])
  const [appointments, setAppointments] = useState([])
  /*
  Implement functions to add data to
  contacts and appointments
  */
  function addContact({name, phone, email}) {
    setContacts(prev => [...prev, {name, phone, email}])
  }
  function addAppointments(newAppointments) {
    setAppointments(prev => [...prev, newAppointments])
  }
  console.log(contacts)
  console.log(appointments)
  //<Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/appointment-planner" element={<Root />}>
      <Route path={ROUTES.CONTACTS} element={
        <ContactsPage
          contacts={contacts}
          addContact={addContact}
        /> /* Add props to ContactsPage */} />
      <Route path={ROUTES.APPOINTMENTS} element={
        <AppointmentsPage
          contacts={contacts}
          appointments={appointments}
          addAppointments={addAppointments}
        /> /* Add props to AppointmentsPage */
      } />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
