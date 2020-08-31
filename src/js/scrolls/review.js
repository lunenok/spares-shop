import {smoothScroll, debounce} from "./utils.js";

const REVIEW_ITEM_COUNT = 4;
const reviewIndicators = document.querySelectorAll('.reviews__slider-button');
const reviewScroller = document.querySelector('.reviews-container');
const backButton = document.querySelector(`.reviews__button--back`);
const forwardButton = document.querySelector(`.reviews__button--forward`)

function setReviewButtonChecked(buttons ,index) {
  buttons.forEach((item, i) => {
    item.classList.remove(`reviews__slider-button--active`);
    if (i === index) {
      item.classList.add(`reviews__slider-button--active`);
    }
  })
}

forwardButton.addEventListener('click', e => {
  e.preventDefault();
  const itemWidth = reviewScroller.scrollWidth / REVIEW_ITEM_COUNT;
  const currentPosition = reviewScroller.scrollLeft;
  const scrollLeft = currentPosition + itemWidth;
  smoothScroll(reviewScroller, scrollLeft, true);
});

backButton.addEventListener('click', e => {
  e.preventDefault();
  const itemWidth = reviewScroller.scrollWidth / REVIEW_ITEM_COUNT;
  const currentPosition = reviewScroller.scrollLeft;
  const scrollLeft = currentPosition - itemWidth;
  smoothScroll(reviewScroller, scrollLeft, true);
});

reviewIndicators.forEach((indicator, i) => {
  indicator.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const scrollLeft = Math.floor(reviewScroller.scrollWidth * (i / REVIEW_ITEM_COUNT));
    smoothScroll(reviewScroller, scrollLeft, true);
  })
});

reviewScroller.addEventListener('scroll', debounce(() => {
  let index = Math.round((reviewScroller.scrollLeft / reviewScroller.scrollWidth) * REVIEW_ITEM_COUNT);
  setReviewButtonChecked(reviewIndicators, index);
}, 50))
