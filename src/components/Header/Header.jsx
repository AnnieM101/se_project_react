import { Link } from "react-router-dom";
import "../Header/Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import wtwrLogo from "../../assets/WTWR_Logo.svg";
import wtwrAvatar from "../../assets/wtwr__avatar-img.svg";

function Header({ onAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

  return (
      <header className="header">
        <Link to="/" className="header__link"><img className="header__logo" src={wtwrLogo} alt="WTWR logo" /></Link>
        <p className="header__date-location">{currentDate}, {weatherData.city}</p>
        <ToggleSwitch></ToggleSwitch>
        <button onClick={onAddClick} type="button" className="header__button">
          + Add Clothes
        </button>
        <Link to="/profile" className="header__link">
        <div className="header__user-container">
          <p className="header__username">USERNAME</p>
          <img className="header__avatar" src={wtwrAvatar} alt="user avatar"/>
        </div>
        </Link>
      </header>
  );
}

export default Header;
