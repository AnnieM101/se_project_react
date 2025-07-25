import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

function AddItemModal({
  closeActiveModal,
  activeModal,
  onAddItemModalSubmit,
  isOpen,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");
  const handleSubmit = (e) => {
  e.preventDefault();
  onAddItemModalSubmit({ name, imageUrl, weather });
};

useEffect(() => {
  setName("");
  setImageUrl("");
  setWeather("");
}, [isOpen]);

  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New garment"
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      isOpen={activeModal === "add-garment"}
    >
      <label className="modal__label" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        className="modal__input"
        id="name"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      ></input>
      <label className="modal__label" htmlFor="image">
        Image
      </label>
      <input
        placeholder="Image URL"
        type="url"
        className="modal__input"
        id="image"
        onChange={(e) => {
          setImageUrl(e.target.value);
        }}
        value={imageUrl}
      ></input>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend" htmlFor="weather">
          Select the weather type:
        </legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            className="modal__radio-input"
            type="radio"
            name="radio-button"
            value="hot"
            onChange={(e) => {
              setWeather(e.target.value);
            }}
            checked={weather === "hot"}
          ></input>
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            className="modal__radio-input"
            type="radio"
            name="radio-button"
            value="warm"
            onChange={(e) => {
              setWeather(e.target.value);
            }}
            checked={weather === "warm"}
          ></input>
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            className="modal__radio-input"
            type="radio"
            name="radio-button"
            value="cold"
            onChange={(e) => {
              setWeather(e.target.value);
            }}
            checked={weather === "cold"}
          ></input>
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
export default AddItemModal;
