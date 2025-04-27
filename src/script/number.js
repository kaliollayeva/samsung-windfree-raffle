// phoneMask.js
export function setupPhoneMask(inputElement) {
    inputElement.addEventListener('focus', () => {
      if (!inputElement.value.startsWith('+7')) {
        inputElement.value = '+7';
      }
    });
  
    inputElement.addEventListener('keydown', (e) => {
      if (inputElement.selectionStart <= 2 && (e.key === 'Backspace' || e.key === 'Delete')) {
        e.preventDefault();
      }
    });
  
    inputElement.addEventListener('input', () => {
      formatPhoneInput(inputElement);
    });
  
    inputElement.addEventListener('paste', (e) => {
      e.preventDefault();
      const paste = (e.clipboardData || window.clipboardData).getData('text');
      const numbers = paste.replace(/\D/g, '');
  
      if (numbers.startsWith('7')) {
        formatPhoneInput(inputElement, numbers.substring(1));
      } else {
        formatPhoneInput(inputElement, numbers);
      }
    });
  }
  
  function formatPhoneInput(inputElement, pastedValue = null) {
    let value = pastedValue !== null
      ? pastedValue
      : inputElement.value.replace(/\D/g, '');
  
    if (value.startsWith('7')) {
      value = value.substring(1);
    }
  
    let formatted = '+7';
  
    if (value.length > 0) {
      formatted += '-' + value.substring(0, 3);
    }
    if (value.length >= 4) {
      formatted += '-' + value.substring(3, 6);
    }
    if (value.length >= 7) {
      formatted += '-' + value.substring(6, 8);
    }
    if (value.length >= 9) {
      formatted += '-' + value.substring(8, 10);
    }
  
    inputElement.value = formatted;
  }
  