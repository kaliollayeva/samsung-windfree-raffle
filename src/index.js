import './style/main.scss'

import { gifts } from './script/gifts';
import { giftList } from './script/gift-list';
import { handleAccordions } from './script/accardeon';
import { GiftCard } from './script/GiftCard';
import { Section } from './script/Section';
import { dataSelect } from './script/data';
import { validateForm } from './script/validation';
import { setupPhoneMask } from './script/number';



const showMoreButton = document.querySelector('.gift__more-button');

const tabs = document.querySelector('.periods__tabs');
const giftListElement = document.querySelector('.periods__gifts');
const giftListDateElement = document.querySelector('.periods__title_date');

const localLanguage = localStorage.getItem('locale') || 'ru';

handleAccordions(); // Слушатель для аккордеона 

const tabContent = giftList.map((item) => item.content);
const kkTabContent = giftList.map((item) => item.kkContent);
const tabDate = giftList.map((item) => item.period);

let selectedTab;

function changeTabContent(elementId) {

  if(kkTabContent[elementId] && localLanguage == 'kk') {
    giftListElement.innerHTML = kkTabContent[elementId];
  } else {
    giftListElement.innerHTML = tabContent[elementId];
  }  
  giftListDateElement.textContent = tabDate[elementId];
}

function toggleTab(tabElement) { //Переключение табов
  if(selectedTab) {
    selectedTab.classList.remove('periods__tab_active');
  }
  selectedTab = tabElement;
  selectedTab.classList.add('periods__tab_active')
}

tabs.addEventListener('click', ({target}) => {
  if(target.classList.contains('periods__tab')) {
    toggleTab(target);
    changeTabContent(target.id);
  }
})

changeTabContent(0);
toggleTab(document.querySelectorAll('.periods__tab')[0]); //Выделяем первый таб по дефолту

//Swiper

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

//Swiper

//REES46 uncomment for production
// function changeProductsTitles(skus) {
//   fetch('https://api.technodom.kz/katalog/api/v1/products/titles', {
//       headers: {
//         'Content-Language': 'kk-KK',
//       },
//       method: 'POST',
//       body: JSON.stringify({
//           skus,
//       })
//   }).then(response => response.json()).then(data => {
//       data.forEach(({ sku, name }) => {
//           const productCard = document.querySelector(`[data-sku="${sku}"]`);
//           productCard.querySelector('.product__title').textContent = name;
//           changeInstallmentCaptions(productCard);
//       })
//   })
// }

// function changeInstallmentCaptions(cardElement) {  
//   const installmentBuy = cardElement.querySelector('.product__button');

//   installmentBuy.textContent = 'Қоржынға';
// }

// r46("recommend", "45b9e7adbfdcc545efc06b02f9948262", {
//   items: [238439, 238440, 269368, 269371, 257535, 257538, 257541, 257544, 272235, 272238],
//   locations: [JSON.parse(localStorage.getItem('cityMagentoId'))?.data],
//   }, function (response) {

//   if (response.html) { //Дастан гей
//     document.querySelector('#reco').innerHTML += response.html;

//     if (localLanguage === 'kk') {
//       changeProductsTitles(response.recommends);
//     }
//   }
//   }, function (error) {

// });
//REES46


// const giftCards = new GiftCard('.template_type_gift-card', '.gift__item', localLanguage); //Карточка подарка
// const cardsContainer = new Section({
//   items: gifts,
//   renderer: (element) => {
//     cardsContainer.addElement(element);
//   }
// }, '.gift__list');

// let firstHalfGifts = gifts.splice(0, 10);

// function renderCard() {
//   firstHalfGifts.forEach(gift => {
//     const cardToRender = giftCards.renderCard(gift);

//     cardsContainer.addElement(cardToRender);
//   });
// }

// function showMore() {
//   gifts.forEach(gift => {
//     const cardToRender = giftCards.renderCard(gift);

//     cardsContainer.addElement(cardToRender);
//   });
// }

// showMoreButton.addEventListener('click', () => {
//   showMore();
//   showMoreButton.remove();
// });

// renderCard();

const tabButtonsContainer = document.querySelector('.periods__tabs-new');
const tabButtons = tabButtonsContainer.querySelectorAll('.periods__tab');
const giftListContainer = document.querySelector('.periods__gifts-cards');
let currentTabIndex = 0;

function displayGifts(tabIndex) {
  giftListContainer.innerHTML = ''; // очищаем содержимое
  const index = Number(tabIndex);
  const giftsForTab = gifts[tabIndex];
  
  if (!giftsForTab) {
    console.error(`Нет подарков для таба с индексом ${index}`);
    return;
  }

  giftsForTab.forEach(gift => {
    const giftElement = document.createElement('li');
    giftElement.classList.add('gift__item');

    giftElement.innerHTML = `
      <img class="gift__image" src="${gift.image}" alt="${gift.title}">
      <h3 class="gift__item-title">${gift.title}</h3>
      <p class="gift__subtitle">${gift.count}</p>
      
    `;

    giftListContainer.appendChild(giftElement);
  });
};

tabButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const tabIndex = Number(event.target.dataset.tab); // Преобразуем в число
    currentTabIndex = tabIndex; // Обновляем текущий индекс таба

    tabButtons.forEach(btn => btn.classList.remove('periods__tab_active'));
    event.target.classList.add('periods__tab_active');
    
    displayGifts(tabIndex); // Отображаем подарки для нового таба
  });
});

displayGifts(currentTabIndex);

const cityInput = document.querySelector('#form-city');
const cityList = document.querySelector('#city-list');

function populateCities() {
  const cities = Object.keys(dataSelect); // берём все города (ключи объекта)

  cities.forEach((city) => {
    const option = document.createElement('option');
    option.value = city;
    cityList.appendChild(option);
  });
}

populateCities();

const storeSelect = document.querySelector('#store-select');
const promoterSelect = document.querySelector('#promoter-select');

const storeContainer = document.querySelector('#store-container');
const promoterContainer = document.querySelector('#promoter-container');

// Функция очистки выпадающих списков
function clearSelect(selectElement) {
  selectElement.innerHTML = '';
}

// Обработчик выбора города
cityInput.addEventListener('input', () => {
  const selectedCity = cityInput.value.trim();

  clearSelect(storeSelect);
  clearSelect(promoterSelect);
  promoterContainer.style.display = 'none';

  if (dataSelect[selectedCity]) {
    const stores = Object.keys(dataSelect[selectedCity]);

    if (stores.length > 0) {
      // 👉 добавляем placeholder-опцию
      const placeholderOption = document.createElement('option');
      placeholderOption.value = '';
      placeholderOption.textContent = 'Выберите магазин';
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      storeSelect.appendChild(placeholderOption);
    }
    
    stores.forEach((storeName) => {
      const option = document.createElement('option');
      option.value = storeName;
      option.textContent = storeName;
      storeSelect.appendChild(option);
    });

    storeContainer.style.display = 'block';
  } else {
    storeContainer.style.display = 'none';
  }
});

// Обработчик выбора магазина
storeSelect.addEventListener('change', () => {
  const selectedCity = cityInput.value.trim();
  const selectedStore = storeSelect.value;

  clearSelect(promoterSelect);

  if (dataSelect[selectedCity] && dataSelect[selectedCity][selectedStore]) {
    const promoters = dataSelect[selectedCity][selectedStore];

    const placeholderOption = document.createElement('option');
    placeholderOption.value = '';
    placeholderOption.textContent = 'Выберите промоутера';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    promoterSelect.appendChild(placeholderOption);
    
    promoters.forEach((promoterName) => {
      const option = document.createElement('option');
      option.value = promoterName;
      option.textContent = promoterName;
      promoterSelect.appendChild(option);
    });

    promoterContainer.style.display = 'block';
  } else {
    promoterContainer.style.display = 'none';
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // остановим обычную отправку
  const isValid = validateForm(); // вызываем валидацию

  if(isValid){

      const submitButton = form.querySelector('button[type="submit"]'); // найдём кнопку отправки
      const originalButtonText = submitButton.textContent; // сохраним оригинальный текст кнопки

      submitButton.innerHTML = `<span class="loader"></span> Отправка...`;
      submitButton.disabled = true; 
      
      const data = {
      name: document.getElementById('form-name').value,
      phone: document.getElementById('form-number').value,
      city: document.getElementById('form-city').value,
      purchaseDate: document.getElementById('form-date').value,
      orderNumber: document.getElementById('form-order-number').value,
      checkNumber: document.getElementById('form-check-number').value,
      store: document.getElementById('store-select').value,
      promoter: document.getElementById('promoter-select').value
    };

    fetch('https://script.google.com/macros/s/AKfycbyYssNT6J5tjmjS3cH7O8p_nCfuNpgoXF1SF5nWSYgzyYEKSBENg4bzTZmYz90jz8EOtA/exec', {
      method: 'POST',
      mode: 'no-cors', // чтобы избежать CORS-ошибкиё
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(() => {
      submitButton.textContent = 'Зарегистрировано'; // меняем текст кнопки
      
      setTimeout(() => {
        form.reset(); // очистка формы через 3 секунды
        clearSelect(storeSelect);
        clearSelect(promoterSelect);
        storeContainer.style.display = 'none';
        promoterContainer.style.display = 'none';

        submitButton.textContent = originalButtonText; // возвращаем исходный текст кнопки
        submitButton.disabled = false;
      }, 3000);  
    }).catch((error) => {
      console.error('Ошибка!', error.message);
    });
  } else {
    console.log('Форма не прошла валидацию');
  }

});

const phoneInput = document.getElementById('form-number');
setupPhoneMask(phoneInput);

