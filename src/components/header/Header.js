import HeaderLogo from './header-logo/HeaderLogo'
import Navbar from './navbar/Navbar'
import './header.css';

function Header(){
  return(
    <div className="header">
      <div className="container">
        <HeaderLogo />
        <Navbar />
      </div> 
    </div>
  );
}


export default Header;
