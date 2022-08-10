import React from "react";
import Profile from "../img/profile.jpg";
import './AppHeader.css';

const AppHeader = () => {
    return <>
    <div className="flex ProfileHeader">
        <img className="ImageRadius" src={Profile} alt="" />
        <div className="ProfileText">
            <h1>Stephen Fajardo</h1>
        </div>
    </div>
    </>
}

export default AppHeader;