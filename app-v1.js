const container = document.querySelector('.container');
const sliderButton = document.querySelector('.slider-button');
let isDragging = false;

if (container) {
  document.querySelector('.slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
  });
}

if (sliderButton) {
  sliderButton.addEventListener('touchstart', () => {
    isDragging = true;
  });

  sliderButton.addEventListener('touchmove', (e) => {
    if (isDragging) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = sliderButton.getBoundingClientRect();
      const containerLeft = containerRect.left;
      const containerRight = containerRect.right;
      const buttonWidth = buttonRect.width;
      let x = e.touches[0].clientX;
      
      if (x < containerLeft + buttonWidth / 2) {
        x = containerLeft + buttonWidth / 2;
      } else if (x > containerRight - buttonWidth / 2) {
        x = containerRight - buttonWidth / 2;
      }

      const position = ((x - containerLeft) / containerRect.width) * 100;
      container.style.setProperty('--position', `${position}%`);
    }
  });

  sliderButton.addEventListener('touchend', () => {
    isDragging = false;
  });
}