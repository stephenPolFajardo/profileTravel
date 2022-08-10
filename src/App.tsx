import { useEffect, useState } from 'react'
import './App.css'
import oneImage from './img/image3.jpg'
import twoImage from './img/image1.jpg'
import threeImage from './img/image2.jpg'
import AppHeader from './header/AppHeader'
import AppFooter from './footer/AppFooter'
import AppNote from './common/notebook/AppNote'

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
    <div className='BlackPreal'>
      <AppHeader />
      <div className='bodyContainer'>
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

        <div className='dotContainer'>
          <span className={classNames(show === 0 ? "active" :"", "dot" )} tabIndex={0} onClick={() => setCount(0)}></span> 
          <span className={classNames(show === 1 ? "active" :"", "dot" )} tabIndex={0} onClick={() => setCount(1)}></span> 
          <span className={classNames(show === 2 ? "active" :"", "dot" )} tabIndex={0} onClick={() => setCount(2)}></span> 
        </div>
      </div>
      <br /><br /><br /><br />
      <AppNote />
      <br /><br /><br /><br /><br /><br /><br />
      <AppFooter />
    </div>
  );
}

export default App;
