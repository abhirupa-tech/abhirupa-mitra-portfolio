import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/nav.js';
import HomePage from './components/homepage';
import ContactMe from './components/contact';
import AboutMe from './components/aboutMe';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>      
      <HomePage/>
      <AboutMe/>
      <ContactMe/>
    </div>
  );
}

export default App;
