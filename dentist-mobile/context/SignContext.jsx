// BooleanContext.js

import React, { createContext, useState } from 'react';

// Create the context with a default value of false
export const SignContext = createContext();

// Provider component
export const SignProvider = ({ children }) => {
  const [isData, setData] = useState(false);

  const setFormData = (data) => {
    setData(data);
  }
  
  return (
    <SignContext.Provider value={{ isData, setFormData }}>
      {children}
    </SignContext.Provider>
  );
};

