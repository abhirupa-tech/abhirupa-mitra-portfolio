
import "../styles/introPage.css"
import "../styles/animation.css"
import Container from 'react-bootstrap/Container';
import { useState, useEffect, useRef } from 'react';


function IntroPage({
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
            : (isScrollDown ? "ComponentFadeAwayToTop 1s forwards" : "ComponentFadeAwayToBottom 8s forwards")} ` }}
        onAnimationEnd={onAnimationEnd}>
            {/* <div>  */}
                <span className="caption-Header caption-white" color='blue'>I actualize ideas </span><br/>
            {/* </div> */}
            {/* <div>  */}
                <span className="caption-Header caption-white">to create </span>
                <span className="caption-Header caption-color">digital experiences </span><br/>
            {/* </div> */}
            {/* <div>  */}
                <span className="caption-Header caption-underline caption-white">that matter.</span>
            {/* </div>             */}
        </Container>)
             
    )
}


export default IntroPage;