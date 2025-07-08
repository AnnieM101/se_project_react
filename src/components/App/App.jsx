import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import {
  getWeather,
  filterWeatherData,
  getWeatherType,
} from "../../utils/weatherAPI";
import { coordinates, APIkey } from "../../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const onAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
      <div className="app">
        <div className="app__content">
          <Header onAddClick={onAddClick} weatherData={weatherData} />
          <Main weatherData={weatherData} handleCardClick={handleCardClick} />
          <Footer />
        </div>
        <ModalWithForm
          buttonText="Add garment"
          title="New garment"
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
        >
          <label className="modal__label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          ></input>
          <label className="modal__label" htmlFor="image">
            Image
          </label>
          <input
            placeholder="Image URL"
            type="url"
            className="modal__input"
            id="image"
          ></input>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend" htmlFor="weather">
              Select the weather type:
            </legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="hot"
                className="modal__radio-input"
                type="radio"
                name="radio-button"
              ></input>
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="warm"
                className="modal__radio-input"
                type="radio"
                name="radio-button"
              ></input>
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="cold"
                className="modal__radio-input"
                type="radio"
                name="radio-button"
              ></input>
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          closeActiveModal={closeActiveModal}
        />
      </div>
  );
}

export default App;
