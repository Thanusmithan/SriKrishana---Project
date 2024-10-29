import React from 'react';
import './Css/Patient_Service.css';
import Header from './Componets/Patient_Header';
import Footer from './Componets/Footer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const Patient_Service = () => {
  const services = [
    {
      serviceName: 'Panchakarma Therapy',
      description: 'Detoxification and rejuvenation therapy.',
      doctorName: 'Dr. Shyam Patil',
    },
    {
      serviceName: 'Abhyanga Massage',
      description: 'Full-body oil massage for relaxation.',
      doctorName: 'Dr. Maya Sen',
    },
    {
      serviceName: 'Abhyanga Massage',
      description: 'Full-body oil massage for relaxation.',
      doctorName: 'Dr. Maya Sen',
    },
    {
      serviceName: 'Abhyanga Massage',
      description: 'Full-body oil massage for relaxation.',
      doctorName: 'Dr. Maya Sen',
    },
    {
      serviceName: 'Abhyanga Massage',
      description: 'Full-body oil massage for relaxation.',
      doctorName: 'Dr. Maya Sen',
    },
    {
      serviceName: 'Abhyanga Massage',
      description: 'Full-body oil massage for relaxation.',
      doctorName: 'Dr. Maya Sen',
    },
    // Add more services as needed
  ];

  return (
    <div className="patient-service-page">
      <Header />
      <div className="container my-5">

        <h2 className="page-title text-center mb-4">Available Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Card className="service-card shadow h-100">
                <Card.Header>
                  <FontAwesomeIcon icon={faClipboardList} className="me-2" />
                  {service.serviceName}
                </Card.Header>
                <Card.Body>
                  <Card.Text>{service.description}</Card.Text>
                  <footer className="blockquote-footer">
                    <FontAwesomeIcon icon={faUserMd} className="me-2" />
                    <cite>{service.doctorName}</cite>
                  </footer>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button variant="primary">Book Appointment</Button>
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

export default Patient_Service;
