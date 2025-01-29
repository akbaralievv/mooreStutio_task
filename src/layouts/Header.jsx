import Navbar from '../components/Navbar';

import logo from '../assets/images/logo.png';
import bag from '../assets/icons/bag.svg';
import profile from '../assets/icons/profile.svg';
import burgerMenu from '../assets/icons/burgerMenu.svg';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Navbar />
      <div className="profile">
        <div>
          <img src={bag} alt="bag" />
        </div>
        <div>
          <img src={profile} alt="profile" />
        </div>
        <div className="burger_menu">
          <img src={burgerMenu} alt="burgerMenu" />
        </div>
      </div>
    </header>
  );
}

export default Header;
