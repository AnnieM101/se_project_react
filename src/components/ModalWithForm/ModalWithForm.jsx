import "../ModalWithForm/ModalWithForm.css";
function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  closeActiveModal,
  onSubmit,
  isOpen
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close-button"
          type="button"
          onClick={closeActiveModal}
        />
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
