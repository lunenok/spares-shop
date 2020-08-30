// via https://github.com/tootsuite/mastodon/blob/f59ed3a4fafab776b4eeb92f805dfe1fecc17ee3/app/javascript/mastodon/scroll.js
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

const indicators = document.querySelectorAll('.sale__slider-button')
const scroller = document.querySelector('.sale__card-container')

function setButtonChecked(buttons ,index) {
  buttons.forEach((item, i) => {
    item.classList.remove(`sale__slider-button--active`);
    if (i === index) {
      item.classList.add(`sale__slider-button--active`);
    }
  })
}

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', e => {
    e.preventDefault()
    e.stopPropagation()
    const scrollLeft = Math.floor(scroller.scrollWidth * (i / ITEM_COUNT))
    smoothScroll(scroller, scrollLeft, true)
  })
})

scroller.addEventListener('scroll', debounce(() => {
  let index = Math.round((scroller.scrollLeft / scroller.scrollWidth) * ITEM_COUNT)
  setButtonChecked(indicators, index);
}, 50))
