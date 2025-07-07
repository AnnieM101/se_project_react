import "../ItemModal/ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";
import { defaultClothingItems } from "../../utils/constants";

function ItemModal({ activeModal, card, closeActiveModal }) {
  return (
    <>
      {" "}
      <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
        <div className="modal__content modal__content_type_image">
          <button
            className="modal__close-button-preview"
            onClick={closeActiveModal}
          ></button>
          <img src={card.link} alt={card.name} className="modal__image" />
          <div className="modal__description">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemModal;
