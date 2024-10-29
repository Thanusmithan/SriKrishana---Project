// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS for dropdown
// import Login from './Pages/Login';
// import Signup from './Pages/Signup';
// import HomePage from './Pages/Homepage'; // Importing the new homepage
// import AboutUs from './Pages/AboutUs';
// import Services from './Pages/Services';
// import Contact from './Pages/Contact';
// import Admin_dashboard from './Pages/Admin_dashboard';
// import Patient_dashboard from './Pages/Patient_dashboard'; // Importing the user dashboard
// import Admin_Appointment from './Pages/Admin_Appointment';
// import Patient_Appointment from './Pages/Patient_Appointment';
// import Admin_Services from './Pages/Admin_Service';
// import Patient_Services from './Pages/Patient_Service';
// import Stock from './Pages/Admin_Stock';
// import Supplier from './Pages/Admin_Supplier';
// import Admin_Messages from './Pages/Admin_Message';
// import Patient_Messages from './Pages/Patient_Message';
// import Admin_Review from './Pages/Admin_Review';
// import Patient_Review from './Pages/Patient_Review';


// // import AdminAppointment from './Pages/AdminAppointment';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/aboutus" element={<AboutUs />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/admin_dashboard" element={<Admin_dashboard />} />
//         <Route path="/patient_dashboard" element={<Patient_dashboard />} />
//         <Route path="/admin_appointment" element={<Admin_Appointment />} />
//         <Route path="/patient_appointment" element={<Patient_Appointment />} />
//         <Route path="/admin_services" element={<Admin_Services />} />
//         <Route path="/patient_services" element={<Patient_Services />} />
//         <Route path="/stock" element={<Stock />} />
//         <Route path="/suppliers" element={<Supplier />} />
//         <Route path="/admin_messages" element={<Admin_Messages />} />
//         <Route path="/patient_messages" element={<Patient_Messages />} />
//         <Route path="/admin_review" element={<Admin_Review />} />
//         <Route path="/patient_review" element={<Patient_Review />} />
//         {/* <Route path="/patientappointment" element={<AdminAppointment />}/> */}
//         <Route path="/" element={<HomePage />} /> {/* Updated to render homepage */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AppointmentsProvider } from './Pages/Componets/AppointmentsContext';
import { ServicesProvider } from './Pages/Componets/ServicesContext'; // Importing the ServicesProvider
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import HomePage from './Pages/Homepage'; // Importing the new homepage
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Admin_dashboard from './Pages/Admin_dashboard';
import Patient_dashboard from './Pages/Patient_dashboard'; // Importing the user dashboard
import Admin_Appointment from './Pages/Admin_Appointment';
import Patient_Appointment from './Pages/Patient_Appointment';
import Admin_Services from './Pages/Admin_Service';
import Patient_Services from './Pages/Patient_Service';
import Stock from './Pages/Admin_Stock';
import Supplier from './Pages/Admin_Supplier';
import Admin_Messages from './Pages/Admin_Message';
import Patient_Messages from './Pages/Patient_Message';
import Admin_Review from './Pages/Admin_Review';
import Patient_Review from './Pages/Patient_Review';

function App() {
  return (
    <ServicesProvider> {/* Wrap with ServicesProvider */}
      <AppointmentsProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin_dashboard" element={<Admin_dashboard />} />
            <Route path="/patient_dashboard" element={<Patient_dashboard />} />
            <Route path="/admin_appointment" element={<Admin_Appointment />} />
            <Route path="/patient_appointment" element={<Patient_Appointment />} />
            <Route path="/admin_services" element={<Admin_Services />} />
            <Route path="/patient_services" element={<Patient_Services />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/suppliers" element={<Supplier />} />
            <Route path="/admin_messages" element={<Admin_Messages />} />
            <Route path="/patient_messages" element={<Patient_Messages />} />
            <Route path="/admin_review" element={<Admin_Review />} />
            <Route path="/patient_review" element={<Patient_Review />} />
            <Route path="/" element={<HomePage />} /> {/* Updated to render homepage */}
          </Routes>
        </Router>
      </AppointmentsProvider>
    </ServicesProvider>
  );
}

export default App;
