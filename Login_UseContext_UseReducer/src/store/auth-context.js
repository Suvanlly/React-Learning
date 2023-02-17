import React from 'react';

// AuthContext is an object that contains component
const AuthContext = React.createContext({
  isLoggedIn: false
});

export default AuthContext;