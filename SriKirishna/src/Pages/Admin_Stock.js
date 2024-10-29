import React, { useState } from 'react'; // Added useState here
import './Css/Stock.css';
import Header from './Componets/Admin_Header';
import Footer from './Componets/Footer';
import { Button, Table, Badge, Card, Row, Col, Form } from 'react-bootstrap';
import { FaPlus, FaFileExport, FaUser } from 'react-icons/fa';
import { saveAs } from 'file-saver';

const StockManagement = () => {
  // Initial product data
  const [products] = useState([
    { name: 'Ashwagandha', category: 'Herbs', sku: 'AY001', incoming: 20, price: 15, stock: 50, value: 750, status: 'In Stock' },
    { name: 'Triphala', category: 'Digestive Health', sku: 'AY002', incoming: 15, price: 10, stock: 10, value: 100, status: 'Low Stock' },
    // Add more product data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on the search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Export product data to CSV format
  const exportToCSV = () => {
    const csvRows = [
      ['Product Name', 'Category', 'SKU', 'Incoming Now', 'Unit Price', 'In Stock', 'Total Value', 'Status'],
      ...filteredProducts.map(product => [
        product.name,
        product.category,
        product.sku,
        product.incoming,
        `LKR ${product.price}`,
        product.stock,
        `LKR ${product.value}`,
        product.status,
      ])
    ];

    const csvContent = csvRows.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'stock_data.csv');
  };

  return (
    <div className="stock-management">
      <Header />
      <div className="stock-management-container my-5">
        <h2 className="stock-header">Stock Management</h2>

        <Row className="summary-cards">
          <Col md={4}>
            <Card className="summary-card">
              <Card.Body>
                <Card.Title>Categories</Card.Title>
                <Card.Text>Total Items</Card.Text>
                <h3>5</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="summary-card">
              <Card.Body>
                <Card.Title>Total Products</Card.Title>
                <Card.Text>Current Stock</Card.Text>
                <h3>100</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="summary-card">
              <Card.Body>
                <Card.Title>Low Stock</Card.Title>
                <Card.Text>Reorder Needed</Card.Text>
                <h3>8</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />

        <div className="table-actions">
          <h4 className="stock-header">Stock Details</h4>
          <Row className="action-row">
            <Col md={6} className="search-col">
              <Form.Control
                type="text"
                placeholder="Search Products..."
                className="search-input"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Col>
            <Col md={6} className="action-buttons-right">
              <Button variant="success" className="action-button">
                <FaPlus /> Add Product
              </Button>
              <Button variant="outline-secondary" className="action-button">
                <FaUser /> Supplier
              </Button>
              <Button variant="outline-secondary" className="action-button" onClick={exportToCSV}>
                <FaFileExport /> Export
              </Button>
            </Col>
          </Row>
        </div>

        <div className="table-container">
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>SKU</th>
                <th>Incoming Now</th>
                <th>Unit Price</th>
                <th>In Stock</th>
                <th>Total Value</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.sku}</td>
                  <td>{product.incoming}</td>
                  <td>LKR {product.price}</td>
                  <td>{product.stock}</td>
                  <td>LKR {product.value}</td>
                  <td>
                    <Badge bg={product.status === 'In Stock' ? 'success' : 'danger'}>
                      {product.status}
                    </Badge>
                  </td>
                  <td><Button variant="outline-secondary" size="sm">...</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StockManagement;