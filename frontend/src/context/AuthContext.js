import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to manage user authentication

  const signIn = (userData) => {
    setUser(userData); // Simulate user sign-in
  };

  const signOut = () => {
    setUser(null); // Simulate user sign-out
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
