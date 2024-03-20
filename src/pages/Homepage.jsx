
import FirstComponent from '../components/FirstComponent'
import AllWebsites from '../components/AllWebsites'
import { useRef } from 'react';
import './home.css'



const Homepage = () => {
  
  const containerRef = useRef(null)

  const handleAction = () => {
    const container = containerRef.current;
    if (container) {
      const startPosition = window.pageYOffset;
      const targetPosition = container.getBoundingClientRect().top + window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 300; // Duration of the scroll animation in milliseconds
  
      let start = null;
  
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * percentage);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };
  
      window.requestAnimationFrame(step);
    }
  };
  return(
    <div className=" w-full bg-white home-bg ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center"></div>
        <FirstComponent  onButtonClick={handleAction}/>
        <div ref={containerRef}>
          <AllWebsites/>
        </div>
    </div>
  )
}

export default Homepage





    