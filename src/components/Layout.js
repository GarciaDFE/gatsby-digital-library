import React from "react";
import { ThemeProvider } from "styled-components";
import "typeface-ubuntu";
import "typeface-roboto";

import { FirebaseContext, useAuth } from "./Firebase"
import GlobalStyles from "../styles/globalStyles";
import theme from "../styles/projectStyles";
import Header from "./Header"

const Layout = ({ children }) => {
  const { user, firebase, loading } = useAuth()
  
  return (
    <FirebaseContext.Provider value={{ user, firebase, loading }}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <>
          <Header />
          {children}
        </>
      </ThemeProvider>
    </FirebaseContext.Provider>
  );
};

export default Layout;
