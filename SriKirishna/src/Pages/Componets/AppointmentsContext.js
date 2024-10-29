// // AppointmentsContext.js
// import React, { createContext, useState } from 'react';

// export const AppointmentsContext = createContext();

// export const AppointmentsProvider = ({ children }) => {
//   const [appointments, setAppointments] = useState([]);

//   const addAppointment = (newAppointment) => {
//     setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
//   };

//   const deleteAppointment = (id) => {
//     setAppointments((prevAppointments) => prevAppointments.filter((appointment) => appointment.id !== id));
//   };

//   return (
//     <AppointmentsContext.Provider value={{ appointments, addAppointment, deleteAppointment }}>
//       {children}
//     </AppointmentsContext.Provider>
//   );
// };



import React, { createContext, useState } from 'react';

// Create a context for appointments
export const AppointmentsContext = createContext();

// Sample appointments data
const sampleAppointments = [
  {
    id: 1,
    patientName: 'John Doe',
    age: 30,
    gender: 'Male',
    date: '2024-10-25',
    time: '10:00 AM',
    doctor: 'Dr. Smith',
    service: 'General Checkup',
  },
  {
    id: 2,
    patientName: 'Jane Roe',
    age: 25,
    gender: 'Female',
    date: '2024-10-26',
    time: '11:00 AM',
    doctor: 'Dr. John',
    service: 'Dental Consultation',
  },
  {
    id: 3,
    patientName: 'Alice Brown',
    age: 28,
    gender: 'Female',
    date: '2024-10-27',
    time: '09:30 AM',
    doctor: 'Dr. Williams',
    service: 'Eye Examination',
  },
  {
    id: 4,
    patientName: 'Bob Johnson',
    age: 40,
    gender: 'Male',
    date: '2024-10-28',
    time: '01:00 PM',
    doctor: 'Dr. Lee',
    service: 'Blood Test',
  },
  {
    id: 5,
    patientName: 'Charlie Davis',
    age: 32,
    gender: 'Male',
    date: '2024-10-29',
    time: '02:30 PM',
    doctor: 'Dr. Green',
    service: 'Skin Checkup',
  },
  {
    id: 6,
    patientName: 'Diana Prince',
    age: 29,
    gender: 'Female',
    date: '2024-10-30',
    time: '03:00 PM',
    doctor: 'Dr. Brown',
    service: 'Nutrition Consultation',
  },
  {
    id: 7,
    patientName: 'Ethan Hunt',
    age: 35,
    gender: 'Male',
    date: '2024-10-31',
    time: '04:15 PM',
    doctor: 'Dr. Clark',
    service: 'Physiotherapy Session',
  },
  {
    id: 8,
    patientName: 'Fiona Gallagher',
    age: 27,
    gender: 'Female',
    date: '2024-11-01',
    time: '10:45 AM',
    doctor: 'Dr. Adams',
    service: 'Allergy Testing',
  },
];

export const AppointmentsProvider = ({ children }) => {
  // State to manage appointments, initialized with sample data
  const [appointments, setAppointments] = useState(sampleAppointments);

  // Function to add a new appointment
  const addAppointment = (newAppointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
  };

  // Function to delete an appointment by ID
  const deleteAppointment = (id) => {
    setAppointments((prevAppointments) => prevAppointments.filter((appointment) => appointment.id !== id));
  };

  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment, deleteAppointment }}>
      {children}
    </AppointmentsContext.Provider>
  );
};
