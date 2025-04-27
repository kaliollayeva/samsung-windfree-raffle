export function validateForm() {
    let isValid = true;
  
    // Проверяем поле ФИО
    const name = document.getElementById('form-name');
    const nameError = name.closest('.form__input-container').querySelector('.form-number-error');
    if (!name.value.trim()) {
      nameError.classList.add('form-error_active');
      isValid = false;
    } else {
      nameError.classList.remove('form-error_active');
    }
  
    // Проверяем поле Номер телефона
    const phone = document.getElementById('form-number');
    const phoneError = phone.closest('.form__input-container').querySelector('.form-number-error');
    if (!phone.value.trim()) {
      phoneError.classList.add('form-error_active');
      isValid = false;
    } else {
      phoneError.classList.remove('form-error_active');
    }
  
    // Проверяем поле Город
    const city = document.getElementById('form-city');
    const cityError = city.closest('.form__input-container').querySelector('.form-number-error');
    if (!city.value.trim()) {
      cityError.classList.add('form-error_active');
      isValid = false;
    } else {
      cityError.classList.remove('form-error_active');
    }
  
    // Проверяем поле Дата покупки
    const purchaseDate = document.getElementById('form-date');
    const purchaseDateError = purchaseDate.closest('.form__input-container').querySelector('.form-number-error');
    if (!purchaseDate.value.trim()) {
      purchaseDateError.classList.add('form-error_active');
      isValid = false;
    } else {
      purchaseDateError.classList.remove('form-error_active');
    }
  
    // Проверяем поле Номер заказа
    const orderNumber = document.getElementById('form-order-number');
    const orderNumberError = orderNumber.closest('.form__input-container').querySelector('.form-number-error');
    if (!orderNumber.value.trim()) {
      orderNumberError.classList.add('form-error_active');
      isValid = false;
    } else {
      orderNumberError.classList.remove('form-error_active');
    }
  
    // Проверяем поле Номер чека
    const checkNumber = document.getElementById('form-check-number');
    const checkNumberError = checkNumber.closest('.form__input-container').querySelector('.form-number-error');
    if (!checkNumber.value.trim()) {
      checkNumberError.classList.add('form-error_active');
      isValid = false;
    } else {
      checkNumberError.classList.remove('form-error_active');
    }
  
    return isValid;
  }