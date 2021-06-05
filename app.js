function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  // const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, 0, ${b})`
}

const h1 = document.querySelector('h1')
h1.style.color = randomRGB();


const letters = document.querySelectorAll('.letter')
// use the dot to denote a class rather than a tag

setInterval(function() {
  for (let letter of letters) {
    letter.style.color = randomRGB()
  }
}, 1000);


// const h2 = document.querySelector('h2')

// setInterval(function () {
//   if (h2.classList.contains('big')) {
//     h2.innerText = "SAD"
//   } else {
//     h2.innerText = "HAPPY"
//   }
//   h2.classList.toggle('big')
//   h2.classList.toggle('small')
// }, 1000);