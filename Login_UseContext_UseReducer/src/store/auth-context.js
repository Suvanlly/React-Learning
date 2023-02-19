import React from 'react';

// AuthContext is an object that contains component
const AuthContext = React.createContext({
  isLoggedIn: false,
  // because in app.js we added onLogout in AuthContext.Provider, we added here as dummy function
  onLogout: () => {}
});

export default AuthContext;