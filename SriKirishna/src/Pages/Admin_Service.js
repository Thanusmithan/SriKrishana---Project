// Admin_Service.js
import React, { useState, useContext, useEffect } from 'react';
import './Css/Admin_Services.css'; // Separate CSS file for styling
import { ServicesContext } from './Componets/ServicesContext'; // Context for shared services
import Header from './Componets/Admin_Header';
import Footer from './Componets/Footer';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaEdit, FaTrash } from "react-icons/fa"
import { faClipboardList, faUserMd, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Admin_Service = () => {
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [showAlert, setShowAlert] = useState(false); // State for validation alert visibility
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State for success alert visibility
  const { services, addService, editService, deleteService } = useContext(ServicesContext); // Using context

  useEffect(() => {
    // Auto dismiss alerts after 2 seconds
    if (showSuccessAlert) {
      const timer = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 2000);
      return () => clearTimeout(timer); // Cleanup on unmount or change
    }
  }, [showSuccessAlert]);

  const handleAddService = () => {
    // Validation check
    if (!serviceName || !serviceDescription || !doctorName) {
      setShowAlert(true); // Show alert if any field is empty
      setTimeout(() => setShowAlert(false), 2000); // Hide alert after 2 seconds
      return;
    }

    if (editingIndex !== null) {
      // Edit existing service
      editService(editingIndex, { serviceName, serviceDescription, doctorName });
      setEditingIndex(null);
      setShowSuccessAlert(true); // Show success alert
    } else {
      // Add new service
      addService({ serviceName, serviceDescription, doctorName });
      setShowSuccessAlert(true); // Show success alert
    }

    // Reset form fields
    setServiceName('');
    setServiceDescription('');
    setDoctorName('');
  };

  const handleEditService = (index) => {
    const serviceToEdit = services[index];
    setServiceName(serviceToEdit.serviceName);
    setServiceDescription(serviceToEdit.serviceDescription);
    setDoctorName(serviceToEdit.doctorName);
    setEditingIndex(index);
  };

  return (
    <div className="page-wrapper">
      <Header />
      <div className="container my-5">
        {/* Alert for empty inputs */}
        {showAlert && (
          <div className="d-flex justify-content-center mb-4">
            <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible style={{ maxWidth: '500px', width: '100%', position: 'fixed', top: '70px', right: '114px' }} className='ser_alert'>
              <strong>Please fill in all fields before submitting!</strong>
            </Alert>
          </div>
        )}

        {/* Success alert for adding a service */}
        {showSuccessAlert && (
          <div className="d-flex justify-content-center mb-4">
            <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible style={{ maxWidth: '500px', width: '100%', position: 'fixed', top: '70px', right: '114px' }}>
              <strong>Service added successfully!</strong>
            </Alert>
          </div>
        )}

        {/* Service Form */}
        <div className="service-form-container">
          <h2 className="page-title text-center mb-4">Manage Hospital Services</h2>
          <form className="service-form">
            <div className="mb-3">
              <label className="form-label">
                <FontAwesomeIcon icon={faClipboardList} className="me-2" />
                Service Name:
              </label>
              <input
                type="text"
                className="form-control"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                placeholder="Enter service name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <FontAwesomeIcon icon={faClipboardList} className="me-2" />
                Service Description:
              </label>
              <textarea
                className="form-control"
                value={serviceDescription}
                onChange={(e) => setServiceDescription(e.target.value)}
                placeholder="Enter service description"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <FontAwesomeIcon icon={faUserMd} className="me-2" />
                Doctor's Name:
              </label>
              <input
                type="text"
                className="form-control"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                placeholder="Enter doctor's name"
              />
            </div>
            <button type="button" className="btn btn-service-primary" onClick={handleAddService}>
              <FontAwesomeIcon icon={faPlusCircle} className="me-2" />
              {editingIndex !== null ? 'Update Service' : 'Add Service'}
            </button>
          </form>
        </div>

        {/* Services List Cards */}
        <h3 className="mt-4">Existing Services</h3>
        <div className="row mt-3">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Card className="service-card shadow h-100">
                <Card.Header>{service.serviceName}</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>{service.serviceDescription}</p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">{service.doctorName}</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Dropdown className="w-100"> {/* Added w-100 class for full width */}
                    <Dropdown.Toggle
                      variant="success"
                      id={`dropdownMenuButton-${index}`}
                      aria-expanded="false"
                      style={{ width: '100%', backgroundColor: "#28a745", color: "white" }} // Set width to 100%
                    >
                      Manage
                    </Dropdown.Toggle>
                    <Dropdown.Menu aria-labelledby={`dropdownMenuButton-${index}`}>
                      <Dropdown.Item
                        onClick={() => handleEditService(index)}
                        style={{ color: "#007bff", display: "flex", alignItems: "center" }}
                      >
                        <FaEdit style={{ marginRight: "8px" }} /> Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => deleteService(index)}
                        style={{ color: "#dc3545", display: "flex", alignItems: "center" }}
                      >
                        <FaTrash style={{ marginRight: "8px" }} /> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin_Service;
