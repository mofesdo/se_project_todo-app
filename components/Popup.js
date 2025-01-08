class Popup{
    constructor({popupSelector}){
        this._popupEl = document.querySelector(popupSelector);
        console.log(this._popupEl);
    }
    open(){
        this._popupEl.classList.add("popup_visible")
    }

}
export default Popup;