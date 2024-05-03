export const handleAccordions = () => {
  const accordionsButtons = document.querySelectorAll('.accordions__button');

  for (let i = 0; i < accordionsButtons.length; i++) {
    accordionsButtons[i].addEventListener('click', function () {
      this.classList.toggle('accordions__button--active');
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 16 + 'px';
      }
    });
  }
}