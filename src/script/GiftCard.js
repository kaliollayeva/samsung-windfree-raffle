//Класс для отрисовки карточек "Подарки от Samsung"

// export class GiftCard {
//   constructor(template, nodeTemplate, localLanguage) {
//     this._template = template;
//     this._nodeTemplate = nodeTemplate;
//     this._localLanguage = localLanguage;
//   }

//   // _getTemplate() { //Создаем нужные DOM-узлы

//   //   const cardWrapper = document.createElement('li');
//   //   cardWrapper.classList.add('gift__item')

//   //   const cardImage = document.createElement('img');
//   //   cardImage.src = '';
//   //   cardImage.classList.add('gift__image');
//   //   cardWrapper.appendChild(cardImage);

//   //   const cardTitle = document.createElement('h3');
//   //   cardTitle.classList.add('gift__item-title');
//   //   cardWrapper.appendChild(cardTitle);

//   //   const cardSubtitle = document.createElement('p');
//   //   cardSubtitle.classList.add('gift__subtitle');
//   //   cardWrapper.appendChild(cardSubtitle);

//   //   return cardWrapper;
//   // }

//   // renderCard(item) { //Присваиваем нужные значения для контента
//   //   this._card = this._getTemplate();
//   //   this._cardImage = this._card.querySelector('.gift__image');
//   //   this._cardTitle = this._card.querySelector('.gift__item-title');
//   //   this._cardDescription = this._card.querySelector('.gift__subtitle');
//   //   // this._cardLink = this._card.querySelector('.gift__link'); //Раскоммент, если есть ссылка на подарок

//   //   this._cardImage.src = item.image;

//   //   if (this._localLanguage == 'kk') { //Перевод
//   //     this._cardTitle.textContent = item.kkTitle;
//   //     this._cardDescription.textContent = `${item.count} д.`;
//   //   } else {
//   //     this._cardTitle.textContent = item.title;
//   //     this._cardDescription.textContent = `${item.count} шт.`;
//   //   }

//   //   // this._cardLink.href = item.link; //Раскоммент, если есть ссылка на подарок

//   //   return this._card;
//   // }

//   renderPoint(item) { //Объединяем в общий метод
//     this._point = this._getTemplate();    
//     this._point.textContent = item;

//     return this._point;
//   }
// }