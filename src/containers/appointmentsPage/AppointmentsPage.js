import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({contacts, appointments, addAppointments}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [appointmentForm, setAppointmentsForm] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointments(appointmentForm)
    setAppointmentsForm({
      name: '',
      title: '',
      date: '',
      time: ''
    })
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        handleSubmit={handleSubmit} 
        contacts={contacts} 
        appointmentForm={appointmentForm}
        setAppointmentsForm={setAppointmentsForm}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments}/>
      </section>
    </div>
  );
};