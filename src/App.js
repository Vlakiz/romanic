import AppHeader from './components/AppHeader/AppHeader';
import AppMain from './components/AppMain/AppMain';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <AppHeader/>
        <AppMain/>
      </div>
    </BrowserRouter>
  );
}

export default App;
