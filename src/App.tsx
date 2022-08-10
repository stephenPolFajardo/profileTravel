import { useEffect, useState } from 'react'
import './App.css'
import oneImage from './img/image3.jpg'
import twoImage from './img/image1.jpg'
import threeImage from './img/image2.jpg'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


function App() {
  const [show, setCount] = useState(0);

  useEffect(() => {
    const interVal = setInterval(() => {
      if(show === 2){
        setCount(0);
      } else {
        setCount(show + 1)
      }
    }, 5000)

    console.log(show);
    return () => clearInterval(interVal);
  }, [show])
  
  return (
    <div>
        <div className="slideshow-container">

        <div className={classNames(show === 0 ? "mySlidesShow fade" :"mySlides fade" )}>
          <div className="numbertext">1 / 3</div>
          <img src={oneImage} alt=""/>
          <div className="text">I</div>
        </div>

        <div className={classNames(show === 1 ? "mySlidesShow fade" :"mySlides fade" )}>
          <div className="numbertext">2 / 3</div>
          <img src={twoImage} alt="" />
          <div className="text">Love</div>
        </div>

        <div className={classNames(show === 2 ? "mySlidesShow fade" :"mySlides fade" )}>
          <div className="numbertext">3 / 3</div>
          <img src={threeImage} alt="" />
          <div className="text">You</div>
        </div>

        </div>

      {/* <div>
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
      </div> */}
    </div>
  );
}

export default App;
