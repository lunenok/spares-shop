import {smoothScroll, debounce} from "./utils.js";

const SALE_ITEM_COUNT = 5;
const saleIndicators = document.querySelectorAll('.sale__slider-button')
const saleScroller  = document.querySelector('.sale__card-container')

function setButtonChecked(buttons ,index) {
  buttons.forEach((item, i) => {
    item.classList.remove(`sale__slider-button--active`);
    if (i === index) {
      item.classList.add(`sale__slider-button--active`);
    }
  })
}

saleIndicators.forEach((indicator, i) => {
  indicator.addEventListener('click', e => {
    e.preventDefault()
    e.stopPropagation()
    const scrollLeft = Math.floor(saleScroller.scrollWidth * (i / SALE_ITEM_COUNT))
    smoothScroll(saleScroller , scrollLeft, true)
  })
})

saleScroller .addEventListener('scroll', debounce(() => {
  let index = Math.round((saleScroller .scrollLeft / saleScroller .scrollWidth) * SALE_ITEM_COUNT)
  setButtonChecked(saleIndicators, index);
}, 50))
