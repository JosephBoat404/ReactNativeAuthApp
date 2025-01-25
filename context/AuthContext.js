import React, { createContext, useState } from 'react';

// Create the context
export const AuthContext = createContext();

/**
 * AuthProvider wraps the app and provides authentication state and methods.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  /**
   * Logs the user in.
   * @param {string} email - User email.
   * @param {string} password - User password.
   */
  const login = (email, password) => {
    console.log('User logged in:', email);
    setUser({ email });
  };

  /**
   * Signs up the user.
   * @param {string} email - User email.
   * @param {string} password - User password.
   */
  const signup = (email, password) => {
    console.log('User signed up:', email);
    setUser({ email });
  };

  /**
   * Logs the user out.
   */
  const logout = () => {
    console.log('User logged out');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
