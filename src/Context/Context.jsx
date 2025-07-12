import React, { createContext as reactCreateContext, useState } from 'react';

// React Context
export const Context = reactCreateContext();

// Context Provider
export const ContextProvider = ({ children }) => {
  const [resumeInfo, setResumeInfo] = useState({});
  return (
    <Context.Provider value={{ resumeInfo, setResumeInfo }}>
      {children}
    </Context.Provider>
  );
};