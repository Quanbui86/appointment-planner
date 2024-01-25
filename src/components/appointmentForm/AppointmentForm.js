import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  appointmentForm,
  setAppointmentsForm,
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleChange = (e) => {
    setAppointmentsForm({
      ...appointmentForm,
      [e.target.name]: e.target.value
    })
  }
  console.log(appointmentForm)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='title'
          value={appointmentForm.title}
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <ContactPicker
          handleChange={handleChange}
          contacts={contacts}
          appointmentForm={appointmentForm}
        />
        <input
          type="date"
          name='date'
          value={appointmentForm.date}
          min={getTodayString()}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name='time'
          value={appointmentForm.time}
          onChange={handleChange}
          required
        />
        <input type="submit" />
      </form>
    </>
  );
};
