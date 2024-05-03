export class Popup {
  constructor(popupSelector, data) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);    
    this._popupTitle = this._popup.querySelector('.popup__title');
    this._popupText = this._popup.querySelector('.popup__text');
    this._closeButton = this._popup.querySelector('.popup__close-button');
    this._data = data;
    this._handleEscCloseBound = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key == 'Escape') {      
      this.close();
    }
  }  

  async open() {
    const newData = await this._data;

    const localLanguage = localStorage.getItem('locale');
    
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscCloseBound);
    
    if(localLanguage == 'kk') {
      this._popupTitle.textContent = newData.kkTitle;
      this._popupText.textContent = newData.kkText;
    } else {
      this._popupTitle.textContent = newData.title;
      this._popupText.textContent = newData.text;
    }    
  }

  close() {
    this._popup.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscCloseBound);
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if(evt.target.classList.contains('popup')) {
        this.close();
      }
      this._closeButton.addEventListener('click', () => {
        this.close();
      });
    })
  }
}