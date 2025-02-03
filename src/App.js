import AppHeader from './components/AppHeader/AppHeader';
import AppMain from './components/AppMain/AppMain';
import AppFooter from './components/AppFooter/AppFooter'
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="container">
        <AppHeader/>
        <AppMain/>
        <AppFooter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
