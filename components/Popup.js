class Popup{
    constructor({popupSelector}){
        this._popupEl = document.querySelector(popupSelector);
        console.log(this._popupEl);
    }

}
export default Popup;