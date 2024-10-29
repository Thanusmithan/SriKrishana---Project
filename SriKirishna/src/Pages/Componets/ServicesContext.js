import React, { createContext, useState } from 'react';

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices((prevServices) => [...prevServices, service]);
  };

  const editService = (index, updatedService) => {
    const newServices = [...services];
    newServices[index] = updatedService;
    setServices(newServices);
  };

  const deleteService = (index) => {
    setServices((prevServices) => prevServices.filter((_, i) => i !== index));
  };

  return (
    <ServicesContext.Provider value={{ services, addService, editService, deleteService }}>
      {children}
    </ServicesContext.Provider>
  );
};
