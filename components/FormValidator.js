class FormValidator{
    constructor(settings, formEl){
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._formEl = formEl;
        }

        _hasInvalidInput(inputList){
            return inputList.some((inputElement) => {
                return !inputElement.validity.valid;
              });
        }
        _toggleButtonState(inputList, buttonElement){
            if (this._hasInvalidInput(inputList)) {
                buttonElement.classList.add(this._inactiveButtonClass);
                buttonElement.disabled = true;
              } else {
                buttonElement.classList.remove(this._inactiveButtonClass);
                buttonElement.disabled = false;
              }
        }

        _showInputError(inputElement){
            const errorElementId = `#${inputElement.id}-error`;
            const errorElement = this._formEl.querySelector(errorElementId);
            inputElement.classList.add(this._inputErrorClass);
            errorElement.textContent = inputElement.validationMessage;
            errorElement.classList.add(this._errorClass);
        }
        _hideInputError(inputElement){
            const errorElementId = `#${inputElement.id}-error`;
            const errorElement = this._formEl.querySelector(errorElementId);
            inputElement.classList.remove(this._inputErrorClass);
            errorElement.classList.remove(this._errorClass);
            errorElement.textContent = "";
        }
        _checkInputValidity(inputElement){
            if (!inputElement.validity.valid) {
                this._showInputError(inputElement);
              } else {
                this._hideInputError(inputElement);
              }
        }
        _setEventListeners(){
            const inputList = Array.from(
                this._formEl.querySelectorAll(this._inputSelector),
              );
              //TODO - finish implementing seteventlisteners (2)
              const buttonElement = this._formEl.querySelector(this._submitButtonSelector);
              this._toggleButtonState(inputList, buttonElement);
            
              inputList.forEach((inputElement) => {
                inputElement.addEventListener("input", () => {
                  this._checkInputValidity(inputElement);
                   this._toggleButtonState(inputList, buttonElement);
                });
              });
        }
        enableValidation(){
            this._formEl.addEventListener("submit", (evt) => {
            evt.preventDefault();
            });
            this._setEventListeners();
        }
        resetValidation(){
            //resets forms
            const inputList = Array.from(
                this._formEl.querySelectorAll(this._inputSelector),
              );
            const buttonElement = this._formEl.querySelector(this._submitButtonSelector);
            inputList.forEach((inputElement) => {
                inputElement.value = "";
            });
            this._toggleButtonState(inputList, buttonElement);
        }
}

export default FormValidator;