import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./utils/scrollToTop";

import AppHeader from 'src/components/layout/header/AppHeader';
import AppMain from 'src/components/layout/AppMain';
import AppFooter from 'src/components/layout/footer/AppFooter';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppHeader/>
      <AppMain/>
      <AppFooter/>
    </BrowserRouter>
  );
}

export default App;
