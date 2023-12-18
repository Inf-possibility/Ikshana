import logo from '../assets/logo.png';
import '../components/header.css'

export const Header = () => {
  const headername = 'Ikshana - News not notice '
  const h2name = 'Follow Falcon'
  return (
    <div className="header-container">
        <img className='logo' src={logo} alt="" />
        <h1 className="header-text">{headername}</h1>
        <h1 className="h2-text">{h2name}</h1>
    </div>

  )
}
