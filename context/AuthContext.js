// context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Simulate login logic
    console.log('User logged in:', email);
    setUser({ email });
  };

  const signup = (email, password) => {
    // Simulate signup logic
    console.log('User signed up:', email);
    setUser({ email });
  };

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};