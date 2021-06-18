// Get the button, h1 and Select Element
const button = document.querySelector('button');
const h2El = document.querySelector('h2');
const bgEl = document.querySelector('section');

// listen to the click Event And pass a call back function to change the color
button.addEventListener('click', () => {
    let color = '#';
    // generating a random hex-code color with the math.random method
    color += Math.random().toString(16).slice(2, 8);
    bgEl.style.backgroundColor = color;

    h2El.innerText = color;
})