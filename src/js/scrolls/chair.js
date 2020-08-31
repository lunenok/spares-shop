const scrollItems = document.querySelectorAll(`.swiper__item`);
const scrollButtons = document.querySelectorAll(`.swiper__slider-button`);

function setMainButtonChecked(buttons ,index) {
  buttons.forEach((item, i) => {
    item.classList.remove(`swiper__slider-button--active`);
    if (i === index) {
      item.classList.add(`swiper__slider-button--active`);
    }
  })
}

scrollButtons.forEach((button, index) => {

  button.addEventListener(`click`, (evt) => {
    const currentPosition = evt.target.dataset.buttonId;
    const movePosition = currentPosition - 1;

    scrollItems.forEach((item) => {
      item.style.transform = `translateX(-${100 * movePosition}%)`;
    });

    setMainButtonChecked(scrollButtons, index);
  })

});
