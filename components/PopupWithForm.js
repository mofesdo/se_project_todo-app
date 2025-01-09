import Popup from "./Popup.js";
class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupEl.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
  }
  _getInputValues() {
    const values = {};
    this._inputList.forEach((input) => {
      //add a key/value pair to the values object for each input
      //the key is input.name
      //value is input.value;
      //need to use brackets notation, not dot notation
      values[input.name] = input.value;
    });
    return values;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      //pass result of _getInputValues to submission handler
      this._handleFormSubmit(inputValues);
    });
  }
}
export default PopupWithForm;
