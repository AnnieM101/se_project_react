import { useContext } from "react";
import "../TemperatureSwitch/TemperatureSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";

function TemperatureSwitch() {
    const {handleToggleSwitchChange, currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext);
  return (
    <>
      <label className="temperature-switch">
        <input type="checkbox" className="temperature-switch__checkbox" onChange={handleToggleSwitchChange} />
        <span className="temperature-switch__circle"></span>
        <span className={`temperature-switch__text temperature-switch__text_F ${currentTemperatureUnit === "F" ? "temperature-switch__text_white" : ""}`}>
          F
        </span>
        <span className={`temperature-switch__text temperature-switch__text_C ${currentTemperatureUnit === "C" ? "temperature-switch__text_white" : ""}`}>
          C
        </span>
      </label>
    </>
  );
}

export default TemperatureSwitch;
