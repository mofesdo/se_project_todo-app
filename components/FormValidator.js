class FormValidator{
    constructor(settings, formEl){
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._formEl = formEl;
        }

        //TODO implement all other methods

        _showInputError(inputElement){
            const errorElementId = `#${inputElement.id}-error`;
            const errorElement = this._formEl.querySelector(errorElementId);
            inputElement.classList.add(this._inputErrorClass);
            errorElement.textContent = inputElement.validationMessage;
            errorElement.classList.add(this._errorClass);
        }
        _hideInputError(inputElement){

        }
        _checkInputValidity(inputElement){
            //TODO implement method (1)
            console.log(inputElement);
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
            //   const buttonElement = formElement.querySelector(
            //     settings.submitButtonSelector,
            //   );
            
            //   toggleButtonState(inputList, buttonElement, settings);
            
              inputList.forEach((inputElement) => {
                inputElement.addEventListener("input", () => {
                  this._checkInputValidity(inputElement);
                //   toggleButtonState(inputList, buttonElement, settings);
                });
              });
        }
        enableValidation(){
            this._formEl.addEventListener("submit", (evt) => {
            evt.preventDefault();
            });
            this._setEventListeners();
        }
}

export default FormValidator;