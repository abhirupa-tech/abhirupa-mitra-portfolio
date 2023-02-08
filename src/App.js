import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/nav.js';
import HomePage from './components/homepage';
import ContactMe from './components/contact';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>      
      <HomePage/>
      <ContactMe/>
    </div>
  );
}

export default App;
