// AdminAppointment.js
import React, { useContext, useState } from 'react';
import './Css/Appointment_Admin.css';
import Header from './Componets/Admin_Header';
import Footer from './Componets/Footer';
import { FaTrashAlt, FaEllipsisV, FaUser, FaCalendarAlt, FaClock, FaStethoscope, FaConciergeBell } from 'react-icons/fa';
import { AppointmentsContext } from './Componets/AppointmentsContext';

const AdminAppointment = () => {
  const { appointments, deleteAppointment } = useContext(AppointmentsContext);

  // State to handle editing appointment
  const [editAppointment, setEditAppointment] = useState(null);
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    gender: '',
    date: '',
    time: '',
    doctor: '',
    service: '',
  });

  const handleEditAppointment = (appointment) => {
    setEditAppointment(appointment.id);
    setFormData(appointment);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveEdit = () => {
    // Implement the logic to update the appointment in the context
    console.log('Updated Appointment:', formData);
    setEditAppointment(null); // Close the edit form
  };

  return (
    <div className="admin-appointment-wrapper">
      <Header />
      <div className="container my-5">
        <div className="table-responsive">
          <h2 className="text-center page-title mb-4 pt-3">Manage Patient's Appointments</h2>
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th><FaUser style={{ marginRight: '5px' }} /> Patient Name</th>
                <th><FaUser style={{ marginRight: '5px' }} /> Age</th>
                <th><FaUser style={{ marginRight: '5px' }} /> Gender</th>
                <th><FaCalendarAlt style={{ marginRight: '5px' }} /> Date</th>
                <th><FaClock style={{ marginRight: '5px' }} /> Time</th>
                <th><FaStethoscope style={{ marginRight: '5px' }} /> Doctor</th>
                <th><FaConciergeBell style={{ marginRight: '5px' }} /> Service</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.age}</td>
                  <td>{appointment.gender}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.service}</td>
                  {/* <td>
                    <div className="dropdown drop-start">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id={`dropdownMenuButton-${appointment.id}`}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FaEllipsisV />
                      </button>
                      <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${appointment.id}`}>
                        <li>
                          <button
                            className="dropdown-item text-danger"
                            onClick={() => deleteAppointment(appointment.id)}
                          >
                            <FaTrashAlt className="me-2" /> Cancel
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => handleEditAppointment(appointment)}
                          >
                            <FaStethoscope className="me-2" /> Edit
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td> */}

                  <td>
                    <div className="dropdown drop-start">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id={`dropdownMenuButton-${appointment.id}`}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FaEllipsisV />
                      </button>
                      <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${appointment.id}`}>
                        <li>
                          <button
                            className="dropdown-item text-danger"
                            onClick={() => deleteAppointment(appointment.id)}
                          >
                            <FaTrashAlt className="me-2" /> Cancel
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => handleEditAppointment(appointment)}
                          >
                            <FaStethoscope className="me-2" /> Edit
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit Appointment Modal */}
        {editAppointment && (
          <div className="modal" style={{ display: 'block' }}>
            <div className="modal-content">
              <h4>Edit Appointment</h4>
              <form>
                <div className="mb-3">
                  <label>Patient Name</label>
                  <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label>Age</label>
                  <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label>Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label>Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label>Time</label>
                  <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label>Doctor</label>
                  <input type="text" name="doctor" value={formData.doctor} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label>Service</label>
                  <input type="text" name="service" value={formData.service} onChange={handleChange} required />
                </div>
                <button type="button" onClick={handleSaveEdit} className="btn btn-primary">Save Changes</button>
                <button type="button" onClick={() => setEditAppointment(null)} className="btn btn-secondary">Cancel</button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AdminAppointment;
