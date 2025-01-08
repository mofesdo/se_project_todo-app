class Popup{
    constructor({popupSelector}){
        this._popupEl = document.querySelector(popupSelector);
        this._popupCloseBtn = this._popupEl.querySelector(".popup__close");
        console.log(this._popupEl);
    }
    open(){
        this._popupEl.classList.add("popup_visible");
    }
    close(){
        this._popupEl.classList.remove("popup_visible");
    }
    setEventListeners(){
        this._popupCloseBtn.addEventListener("click", ()=>{
            this.close();
        })
    }

}
export default Popup;