// CommonAppointmentForm.js
import React from 'react';
import '../Css/PatientAppointment.css'

const CommonAppointmentForm = ({ formData, setFormData, onSubmit, isAdmin }) => {
  return (
    <form className="appointment-form">
      <div className="row g-3">
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Patient Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={formData.patientName}
              onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Age:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Gender:</label>
            <select
              className="form-select"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Date:</label>
            <input
              type="date"
              className="form-control"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Time:</label>
            <input
              type="time"
              className="form-control"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Select a Doctor:</label>
            <select
              className="form-select"
              value={formData.doctor}
              onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
            >
              <option>Dr. Smith</option>
              <option>Dr. John</option>
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Service:</label>
            <select
              className="form-select"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option>Panchakarma Therapy</option>
              <option>Abhyanga Massage</option>
            </select>
          </div>
        </div>
        {!isAdmin && (
          <div className="col-12 text-center">
            <button type="button" className="btn-patient-appointment btn-success" onClick={onSubmit}>
              Book Appointment
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default CommonAppointmentForm;
