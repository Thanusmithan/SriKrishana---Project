import React, { useState } from 'react';
import './Css/Supplier.css';
import Header from './Componets/Admin_Header';
import Footer from './Componets/Footer';
import { Button, Table, Card, Row, Col, Form, Dropdown, Modal, Alert } from 'react-bootstrap';
import { FaPlus, FaFileExport } from 'react-icons/fa';
import { saveAs } from 'file-saver';

const AdminSupplier = () => {
  const [suppliers, setSuppliers] = useState([
    { name: 'Herbal Life', contact: '0771234567', email: 'contact@herbalife.com', address: 'Colombo' },
    { name: 'Ayurvedic Supply Co', contact: '0769876543', email: 'info@ayurvedic.com', address: 'Kandy' },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingSupplierIndex, setEditingSupplierIndex] = useState(null);
  const [supplierName, setSupplierName] = useState('');
  const [supplierContact, setSupplierContact] = useState('');
  const [supplierEmail, setSupplierEmail] = useState('');
  const [supplierAddress, setSupplierAddress] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // State for alerts specific to the modal
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // Handle search input
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // Filter suppliers based on search term
  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Export supplier data to CSV
  const exportToCSV = () => {
    const csvRows = [
      ['Supplier Name', 'Contact', 'Email', 'Address'],
      ...filteredSuppliers.map(supplier => [supplier.name, supplier.contact, supplier.email, supplier.address])
    ];
    const csvContent = csvRows.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'suppliers_data.csv');
  };

  // Function to handle adding or updating a supplier
  const handleAddOrUpdateSupplier = () => {
    // Validate input fields
    if (!supplierName || !supplierContact || !supplierEmail || !supplierAddress) {
      setShowAlert(true); // Show alert for empty inputs
      setTimeout(() => setShowAlert(false), 2000); // Hide alert after 2 seconds
      return;
    }

    const newSupplier = {
      name: supplierName,
      contact: supplierContact,
      email: supplierEmail,
      address: supplierAddress,
    };

    if (editingSupplierIndex !== null) {
      // Update existing supplier
      const updatedSuppliers = [...suppliers];
      updatedSuppliers[editingSupplierIndex] = newSupplier;
      setSuppliers(updatedSuppliers);
      setShowSuccessAlert(true); // Show success alert for update
      setTimeout(() => setShowSuccessAlert(false), 2000); // Hide alert after 2 seconds
    } else {
      // Add new supplier
      setSuppliers([...suppliers, newSupplier]);
      setShowSuccessAlert(true); // Show success alert for addition
      setTimeout(() => setShowSuccessAlert(false), 2000); // Hide alert after 2 seconds
    }

    // Reset state and close modal
    resetModal();
  };

  // Reset modal state
  const resetModal = () => {
    setSupplierName('');
    setSupplierContact('');
    setSupplierEmail('');
    setSupplierAddress('');
    setEditingSupplierIndex(null);
    setShowAddModal(false);
    setShowAlert(false); // Reset alert visibility
    setShowSuccessAlert(false); // Reset success alert visibility
  };

  // Handle supplier edit
  const handleEditSupplier = (index) => {
    const supplierToEdit = suppliers[index];
    setSupplierName(supplierToEdit.name);
    setSupplierContact(supplierToEdit.contact);
    setSupplierEmail(supplierToEdit.email);
    setSupplierAddress(supplierToEdit.address);
    setEditingSupplierIndex(index);
    setShowAddModal(true);
  };

  // Handle supplier delete
  const handleDeleteSupplier = (index) => {
    const updatedSuppliers = suppliers.filter((_, i) => i !== index);
    setSuppliers(updatedSuppliers);
    setShowSuccessAlert(true); // Show success alert for deletion
    setTimeout(() => setShowSuccessAlert(false), 2000); // Hide alert after 2 seconds
  };

  return (
    <div className="supplier-management">
      <Header />
      <div className="supplier-management-container mt-5 mb-5">
        <h2 className="supplier-header">Supplier Management</h2>

        {/* Summary Cards Section */}
        <Row className="summary-cards">
          <Col md={6}>
            <Card className="summary-card">
              <Card.Body>
                <Card.Title>Total Suppliers</Card.Title>
                <h3>{suppliers.length}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="summary-card">
              <Card.Body>
                <Card.Title>Active Suppliers</Card.Title>
                <h3>{suppliers.length}</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />

        {/* Actions - Search, Add, Export */}
        <div className="table-actions">
          <Row className="action-row">
            <Col md={6} className="search-col">
              <Form.Control
                type="text"
                placeholder="Search Suppliers..."
                className="search-input"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Col>
            <Col md={6} className="action-buttons-right">
              <Button variant="success" className="action-button" onClick={() => setShowAddModal(true)}>
                <FaPlus /> Add Supplier
              </Button>
              <Button variant="outline-secondary" className="action-button" onClick={exportToCSV}>
                <FaFileExport /> Export
              </Button>
            </Col>
          </Row>
        </div>

        {/* Suppliers Table */}
        <div className="table-container">
          <Table bordered hover responsive className="supplier-table">
            <thead>
              <tr>
                <th>Supplier Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredSuppliers.map((supplier, index) => (
                <tr key={index}>
                  <td>{supplier.name}</td>
                  <td>{supplier.contact}</td>
                  <td>{supplier.email}</td>
                  <td>{supplier.address}</td>
                  <td>
                    <Dropdown drop='start' className='sup-btn'>
                      <Dropdown.Toggle size="sm" className='sup-btn'>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleEditSupplier(index)}>Edit</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDeleteSupplier(index)}>Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      {/* Add Supplier Modal */}
      <Modal show={showAddModal} onHide={resetModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editingSupplierIndex !== null ? 'Edit Supplier' : 'Add New Supplier'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Alert for empty inputs */}
          {showAlert && (
            <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible style={{ position: "relative", top: '0.5px', right: '17px' }}>
              <strong>Please fill in all fields before submitting!</strong>
            </Alert>
          )}

          {/* Success alert for adding or updating a supplier */}
          {showSuccessAlert && (
            <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
              <strong>{editingSupplierIndex !== null ? 'Supplier updated successfully!' : 'Supplier added successfully!'}</strong>
            </Alert>
          )}

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Supplier Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter supplier name"
                value={supplierName}
                onChange={(e) => setSupplierName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact number"
                value={supplierContact}
                onChange={(e) => setSupplierContact(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={supplierEmail}
                onChange={(e) => setSupplierEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                value={supplierAddress}
                onChange={(e) => setSupplierAddress(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="primary" onClick={handleAddOrUpdateSupplier} style={{ width: '200px' }}>
            {editingSupplierIndex !== null ? 'Update Supplier' : 'Add Supplier'}
          </Button>
          <Button variant="secondary" onClick={resetModal} style={{ width: '200px' }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </div>
  );
};

export default AdminSupplier;
