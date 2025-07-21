import "../SideBar/SideBar.css";
import wtwrAvatar from "../../assets/wtwr__avatar-img.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={wtwrAvatar} alt="Default avatar" />
      <p className="sidebar__username">Mr. Default</p>
    </div>
  );
}

export default SideBar;
