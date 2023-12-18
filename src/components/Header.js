import logo from '../assets/logo.png';
import '../ikshana.css'

export const Header = () => {
    const headername = 'Ikshana - News not notice '
  return (
    <div >
      <div className="logo-container">
      <img className='logo' src={logo} alt=""/>
    <h1 className="header-text">{headername}</h1>
    </div>


      <p className="para">Counter </p>
      </div>
  )
}
