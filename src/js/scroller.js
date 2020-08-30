// via https://github.com/tootsuite/mastodon/blob/f59ed3a4fafab776b4eeb92f805dfe1fecc17ee3/app/javascript/mastodon/scroll.js

// common function
const ITEM_COUNT = 5;

const easingOutQuint = (x, t, b, c, d) =>
  c * ((t = t / d - 1) * t * t * t * t + 1) + b

function smoothScrollPolyfill (node, key, target) {
  const startTime = Date.now()
  const offset = node[key]
  const gap = target - offset
  const duration = 1000
  let interrupt = false

  const step = () => {
    const elapsed = Date.now() - startTime
    const percentage = elapsed / duration

    if (interrupt) {
      return
    }

    if (percentage > 1) {
      cleanup()
      return
    }

    node[key] = easingOutQuint(0, elapsed, offset, gap, duration)
    requestAnimationFrame(step)
  }

  const cancel = () => {
    interrupt = true
    cleanup()
  }

  const cleanup = () => {
    node.removeEventListener('wheel', cancel)
    node.removeEventListener('touchstart', cancel)
  }

  node.addEventListener('wheel', cancel, { passive: true })
  node.addEventListener('touchstart', cancel, { passive: true })

  step()

  return cancel
}

function testSupportsSmoothScroll () {
  let supports = false
  try {
    let div = document.createElement('div')
    div.scrollTo({
      top: 0,
      get behavior () {
        supports = true
        return 'smooth'
      }
    })
  } catch (err) {} // Edge throws an error
  return supports
}

const hasNativeSmoothScroll = testSupportsSmoothScroll()

function smoothScroll (node, topOrLeft, horizontal) {
  if (hasNativeSmoothScroll) {
    return node.scrollTo({
      [horizontal ? 'left' : 'top']: topOrLeft,
      behavior: 'smooth'
    })
  } else {
    return smoothScrollPolyfill(node, horizontal ? 'scrollLeft' : 'scrollTop', topOrLeft)
  }
}

function debounce(func, ms) {
	let timeout
	return () => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			timeout = null
      func()
		}, ms)
	}
}

// sales scroll
{
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
}

// review scroll
{
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
}

