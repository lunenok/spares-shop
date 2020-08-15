import "./less/style.less";
import "./image/svg/logo.svg";

const menuButton = document.querySelector('.navigation__button');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const menuButtonContainer = menuButton.querySelector('.nav-button');
  const isClosed = menuButtonContainer.classList.contains('nav-button--close')
  navigation.classList.toggle('navigation--open');
  if (isClosed) {
    menuButtonContainer.classList.add('nav-button--open');
    menuButtonContainer.classList.remove('nav-button--close');
  } else {
    menuButtonContainer.classList.remove('nav-button--open');
    menuButtonContainer.classList.add('nav-button--close');
  }
});
