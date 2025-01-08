class Popup{
    constructor({popupSelector}){
        this._popupEl = document.querySelector(popupSelector);
        this._popupCloseBtn = this._popupEl.querySelector(".popup__close");
        console.log(this._popupEl);
    }
    _handleEscapeClose(evt){
        if(evt.key === "Escape"){
            console.log("escape key is pressed");
            this.close();
        }
    }
    open(){
        this._popupEl.classList.add("popup_visible");
        document.addEventListener("keyup", this._handleEscapeClose);
    }
    close(){
        this._popupEl.classList.remove("popup_visible");
        document.removeEventListener("keyup", this._handleEscapeClose);
    }
    setEventListeners(){
        this._popupEl.addEventListener("mousedown", (evt)=>{
            if(evt.target.classList.contains("popup__close") || evt.target.classList.contains("popup")){
                this.close();
            }
        });
    }

}
export default Popup;