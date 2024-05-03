export class Section {
  constructor({items, renderer}, containerSelector) {
    this._data = items;
    this.renderer = renderer;
    this._containerNode = document.querySelector(containerSelector);
  }

  addElement(element) {
    this._containerNode.append(element);
  }

  changedContent(element) {
    this._containerNode.textContent= element;
  }

  renderItems() {
    this._data.forEach(element => {
      this.renderer(element)
    });
  }
}