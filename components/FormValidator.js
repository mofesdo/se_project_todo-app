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
        
        __checkInputValidity(inputElement){
            //TODO implement method (1)
            // if (!inputElement.validity.valid) {
            //     showInputError(
            //       formElement,
            //       inputElement,
            //       inputElement.validationMessage,
            //       settings,
            //     );
            //   } else {
            //     hideInputError(formElement, inputElement, settings);
            //   }
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
            
              this._inputList.forEach((inputElement) => {
                inputElement.addEventListener("input", () => {
                  this._checkInputValidity();
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