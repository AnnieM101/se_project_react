import "../ItemModal/ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";

function ItemModal({ activeModal, card, closeActiveModal, clothingItems,onDelete }) {
  return (
    <>
      {" "}
      <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
        <div className="modal__content modal__content_type_image">
          <button
            className="modal__close-button-preview"
            onClick={closeActiveModal}
          ></button>
          <img src={card.imageUrl} alt={card.name} className="modal__image" />
          
          <div className="modal__description">
            <div className="modal__footer">
            <h2 className="modal__caption">{card.name}</h2>
            <button type="button" className="modal__delete-button" onClick={() => onDelete(card._id)}>Delete item</button>
            </div>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemModal;
