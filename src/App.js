import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/nav.js';
import HomePage from './components/homepage';
import ContactMe from './components/contact';
import IntroPage from './components/introPage';
import { useState, useEffect, useRef } from 'react';
import './styles/App.css';
import Saly from "./img/Saly.png"
import $ from 'jquery';


function App() {

const [currentComponentIndex, setCurrentComponentIndex] =  useState(0);
const [isScrolling, setIsScrolling] =  useState(false);
const [showPage1, setShowPage1] = useState(true);
const [showPage2, setShowPage2] = useState(false);
const [showPage3, setShowPage3] = useState(false);
const [isScrollingDown, setIsScrollingDown] = useState(true);


console.log("Current Component Index Value: " + currentComponentIndex);
const totalComponents = 3;


useEffect(() => {
    switch (currentComponentIndex){
      case 0:
        setShowPage2(false);
        setShowPage3(false);
        setTimeout(setShowPage1(true), 1000);
        break;
      
      case 1:
        setShowPage1(false);
        setShowPage3(false);
        setTimeout(setShowPage2(true), 1000);
        break;

      case 2:
        setShowPage1(false);
        setShowPage2(false);        
        setTimeout(setShowPage3(true), 1000);
        break;
      
    }
}, [currentComponentIndex])


var scrollTimeout;
$(window).on('mousewheel', function(event) {
    if(isScrolling) {    
        return;
    }
    setIsScrolling(true);
    console.log("Scrolling Current Component Index: " + currentComponentIndex)

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        console.log('Scroll ended');
        setIsScrolling(false)
    }, 500);

    if (event.originalEvent.wheelDelta >= 0) {
        console.log('Scroll direction up');
        if(currentComponentIndex > 0) {        
            console.log("Current Component Index: " + currentComponentIndex)      
            setIsScrollingDown(false);
            setCurrentComponentIndex (currentComponentIndex - 1);  
            console.log("Current updated component index: " + currentComponentIndex)
        }
    }
    else {
        console.log('Scroll  direction down');
        if(currentComponentIndex < totalComponents - 1) {
            console.log("Current Component Index: " + currentComponentIndex)                
            setIsScrollingDown(true);
            setCurrentComponentIndex (currentComponentIndex + 1) 
            console.log("Current updated component index: " + currentComponentIndex)
        }
  }
});



  return (
    <div className="App">
      <NavbarComponent/>
      <IntroPage show = {showPage1} isScrollDown = {isScrollingDown}/>
      <HomePage show = {showPage2} isScrollDown = {isScrollingDown}/>
      <ContactMe show = {showPage3} isScrollDown = {isScrollingDown}/>

      <img src={Saly} className="img-end"/>
    </div>
  );
}

export default App;

