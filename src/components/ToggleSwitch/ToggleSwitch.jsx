import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";

function ToggleSwitch() {
    const {handleToggleSwitchChange, currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext);
  return (
    <>
      <label className="toggle-switch">
        <input type="checkbox" className="toggle-switch__checkbox" onChange={handleToggleSwitchChange} />
        <span className="toggle-switch__circle"></span>
        <span className={`toggle-switch__text toggle-switch__text_F ${currentTemperatureUnit === "F" ? "toggle-switch__text_white" : ""}`}>
          F
        </span>
        <span className={`toggle-switch__text toggle-switch__text_C ${currentTemperatureUnit === "C" ? "toggle-switch__text_white" : ""}`}>
          C
        </span>
      </label>
    </>
  );
}

export default ToggleSwitch;
