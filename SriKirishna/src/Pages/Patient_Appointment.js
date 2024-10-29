// import React, { useState } from 'react';
// import './Css/PatientAppointment.css';
// import './Css/SignUp.css'; // Use the same CSS file for consistent styling
// import Header from './Componets/Patient_Header';
// import Footer from './Componets/Footer'



// const PatientAppointment = () => {
//   const [appointments, setAppointments] = useState([]);

//   const handleBookAppointment = () => {
//     // Logic for booking an appointment
//   };

//   const handleCancelAppointment = () => {
//     // Logic for canceling an appointment
//   };

//   return (
//     <div className="patient-appointment-wrapper">
//       {/* Header */}
//       <Header/>
//       {/* Main Content */}
//       <div className="patient-appointment-container">
//         <div className="appointment-left">
//           <div className='app-left'>
//             <h2 className="page-title">Book an Appointment</h2>
//             <form className="appointment-form">
//               {/* <div className="form-group">
//                 <label className="form-label">Patient Name:</label>
//                 <input type="text" className="form-input" placeholder="Enter your name" />
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Age:</label>
//                 <input type="number" className="form-input" placeholder="Enter your age" />
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Gender:</label>
//                 <select className="form-input">
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Date:</label>
//                 <input type="date" className="form-input" />
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Time:</label>
//                 <input type="time" className="form-input" />
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Select a Doctor:</label>
//                 <select className="form-input">
//                   <option>Dr. Smith</option>
//                   <option>Dr. John</option>
//                 </select>
//               </div>

//               <div className="form-btn-group">
//                 <button type="button" className="btn-appointment" onClick={handleBookAppointment}>
//                   Book Appointment
//                 </button>
//               </div> */}
//               <div className="row g-3">
//                 <div className="col-md-12">
//                   <div className="mb-3">
//                     <label className="form-label">Patient Name:</label>
//                     <input type="text" className="form-control" placeholder="Enter your name" />
//                   </div>
//                 </div>

//                 <div className="col-md-12">
//                   <div className="mb-3">
//                     <label className="form-label">Age:</label>
//                     <input type="number" className="form-control" placeholder="Enter your age" />
//                   </div>
//                 </div>

//                 <div className="col-md-12">
//                   <div className="mb-3">
//                     <label className="form-label">Gender:</label>
//                     <select className="form-select">
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="col-md-12">
//                   <div className="mb-3">
//                     <label className="form-label">Date:</label>
//                     <input type="date" className="form-control" />
//                   </div>
//                 </div>

//                 <div className="col-md-12">
//                   <div className="mb-3">
//                     <label className="form-label">Time:</label>
//                     <input type="time" className="form-control" />
//                   </div>
//                 </div>

//                 <div className="col-md-12">
//                   <div className="mb-3">
//                     <label className="form-label">Select a Doctor:</label>
//                     <select className="form-select">
//                       <option>Dr. Smith</option>
//                       <option>Dr. John</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="col-12 text-center">
//                   <button type="button" className="btn btn-success" onClick={handleBookAppointment}>
//                     Book Appointment
//                   </button>
//                 </div>
//               </div>

//             </form>
//           </div>
//         </div>
//         <div className="signup-right">
//           <div className="signup-right-content text-bg-light opacity-30">
//             <h2>Ayurveda and Wellness</h2>
//             <p>Ayurveda offers holistic healing. Our doctors provide personalized treatments for your health and
//               well-being. Experience natural treatments and ancient wisdom to improve your life quality.</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer/>
//     </div>
//   );
// };

// export default PatientAppointment;


// PatientAppointment.js
import React, { useState, useContext } from 'react';
import './Css/PatientAppointment.css';
import './Css/SignUp.css';
import Header from './Componets/Patient_Header';
import Footer from './Componets/Footer';
import CommonAppointmentForm from './Componets/AppointmentTable';
import { AppointmentsContext } from './Componets/AppointmentsContext';

const PatientAppointment = () => {
  const { addAppointment } = useContext(AppointmentsContext);
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    gender: '',
    date: '',
    time: '',
    doctor: '',
    service: ''
  });

  const handleBookAppointment = () => {
    const newAppointment = {
      ...formData,
      id: Date.now() // unique ID based on timestamp
    };
    addAppointment(newAppointment);
    console.log('New appointment added:', newAppointment);
  };

  return (
    <div className="patient-appointment-wrapper">
      <Header />
      <div className="patient-appointment-container">
        <div className="appointment-left">
          <div className="app-left">
            <h2 className="page-title">Book an Appointment</h2>
            <CommonAppointmentForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleBookAppointment}
              isAdmin={false}
            />
          </div>
        </div>
        <div className="signup-right">
          <div className="signup-right-content text-bg-light opacity-30">
            <h2>Ayurveda and Wellness</h2>
            <p>Ayurveda offers holistic healing...</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PatientAppointment;
