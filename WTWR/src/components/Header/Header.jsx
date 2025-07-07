import "../Header/Header.css";
import wtwrLogo from "../../assets/WTWR_Logo.svg";
import wtwrAvatar from "../../assets/wtwr__avatar-img.svg";

function Header({ onAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

  return (
    <>
      <header className="header">
        <img className="header__logo" src={wtwrLogo} />
        <p className="header__date-location">{currentDate}, {weatherData.city}</p>
        <button onClick={onAddClick} type="button" className="header__button">
          + Add Clothes
        </button>
        <div className="header__user-container">
          <p className="header__username">USERNAME</p>
          <img className="header__avatar" src={wtwrAvatar} />
        </div>
      </header>
    </>
  );
}

export default Header;
