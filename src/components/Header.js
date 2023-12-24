import logo from '../assets/logo.png';
import '../components/css/header.css'
import { useState } from "react";

export const Header = () => {
  const [isLogoClicked, setLogoClicked] = useState(false);
  const headername = 'Ikshana Falcon'
  const h2name = 'News not noise '

    const handleLogoClick = () => {
    setLogoClicked(true);
    // Add a delay to remove the animation class after the animation is complete
      setTimeout(() => {
        setLogoClicked(false);
      }, 4000);
    };
  
    return (
      <div className='header-container'>
      <span className="logo-container" onClick={handleLogoClick}>
        <img className={`logo ${isLogoClicked ? 'fly' : ''}`} src={logo} alt="" />
        <h1 className="header-text">{headername}</h1>
        <h1 className="h2-text">{h2name}</h1>
      </span>

    </div>
  )
}
