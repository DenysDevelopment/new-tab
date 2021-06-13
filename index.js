const clock = document.querySelector('.clock');

const canvas = document.querySelector('.canvas');
const COUNT_CELL = 4000;




for (let i = 0; i < COUNT_CELL; i++) {
  const rect = document.createElement('div');
  rect.classList.add('rect')

  rect.addEventListener('mouseover', () => {
    setColor(rect)
  })
  rect.addEventListener('mouseleave', () => {
    removeColor(rect)
  })

  canvas.append(rect)
}

function setColor(el) {
  const color = getRandomColor()
  el.style.background = `${color}`
  el.style.boxShadow = `0 0 80px ${color}, 0 0 52px ${color}`

}

function removeColor(el) {
  el.style.background = `#1d1d1d`
  el.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}

function formatDate(date) {
  return date >= 9 ? date : `0${date}`
}

function getCurrentTime() {
  return {
    seconds: new Date().getSeconds(),
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    day: new Date().getDate(),
    month: new Date().getMonth(),
    format: {
      seconds: formatDate(new Date().getSeconds()),
      hours: formatDate(new Date().getHours()),
      minutes: formatDate(new Date().getMinutes()),
    }
  }


}

setInterval(() => {
  changeBackgroundForTime(getCurrentTime().hours)

  clock.innerHTML = `${getCurrentTime().format.hours}<span>:</span>${getCurrentTime().format.minutes}<span>:</span>${getCurrentTime().format.seconds}`
}, 1000);


function changeBackgroundForTime(time) {
  if (time <= 6) {
    document.body.style.background = '#333'
  } else if (time >= 7 && time <= 10) {
    document.body.style.background = '#444'
  } else if (time >= 10 && time <= 13) {
    document.body.style.background = '#555'
  } else if (time >= 13 && time <= 16) {
    document.body.style.background = 'purple'
  } else if (time >= 16 && time < 20) {
    document.body.style.background = '#333'
  }
}
