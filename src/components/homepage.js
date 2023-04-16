
import "../styles/introPage.css"
import "../styles/animation.css"
import Container from 'react-bootstrap/Container';
import { useState, useEffect, useRef } from 'react';


function HomePage({
    show,
    isScrollDown}) {  
        
    console.log("Value show:"+show)
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
        if (show) setRender(true);
      }, [show]);
    
      const onAnimationEnd = () => {
        if (!show) setRender(false);
      };
    

    return(
        shouldRender && (
        <Container fluid className="IntroCaption" id="IntroPage"
        style={{ animation: `${show 
            ? (isScrollDown ? "ComponentAppearFromBottom 2s forwards" : "ComponentAppearFromTop 2s forwards")
            : (isScrollDown ? "ComponentFadeAwayToTop 0.5s forwards" : "ComponentFadeAwayToBottom 0.5s forwards")} ` }}
        onAnimationEnd={onAnimationEnd}>
            <div> 
                <span className="caption-Header caption-white" >I am Abhirupa, a Programmer</span>
            </div>
            <div> 
                <span className="caption-Header caption-white">and I</span>
                <span className="caption-Header caption-color">write code</span>
            </div>
            <div> 
                <span className="caption-Header caption-white">as a full time job</span>
            </div>            
        </Container>)
             
    )
}


export default HomePage;