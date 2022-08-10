import React from 'react';
import './AppNote.css';
import fourImage from '../../img/image4.jpg'
import fiveImage from '../../img/image5.jpg'




const AppNote = () => {

    let second = document.getElementById('second')!;

    const prevImg = () => {
        second.style.transform = "rotateY(0deg)";
        second.style.webkitTransform = "rotateY(0deg)";
        second.style.transform = "rotateY(0deg)";
    }
    const nextImg = () => {
        second.style.transform = "rotateY(-180deg)";
        second.style.webkitTransform = "rotateY(-180deg)";
        second.style.transform = "rotateY(-180deg)";
    }

    return <div className='flex AppNoteContainer'>
    <div className="container">
    <div className="page" id="first">
        <div className="back">
            <div className="outer">
                <div className="content">
                    <img src={fourImage} alt=''  height="300px"/>
                </div>
            </div>
        </div>
    </div>
    <div className="page" id="second">
        <div className="front">
            <div className="outer">
                <div className="content">
                    <div className='helper-class-to-make-bug-visbile'>
                        <img src={fourImage} alt=''  height="300px"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="back" id="third">
            <div className="outer">
                <div className="content">
                    <div className="helper-class-to-make-bug-visbile">
                        <img src={fiveImage} alt=''  height="300px"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="page" id="fourth">
        <div className="front">
            <div className="outer">
                <div className="content">
                    <img src={fiveImage} alt=''  height="300px"/>
                </div>
            </div>
        </div>
    </div>

    <div id="prev" onClick={prevImg}></div>
    <div id="next" onClick={nextImg}></div>
</div>
    </div>
}

export default AppNote;