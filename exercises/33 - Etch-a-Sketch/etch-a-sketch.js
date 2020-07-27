console.log('it works!');

//select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');

const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 40;

// Setup our canvas for drawing
//make a variable called height and width from the same properties on our canvas

// const width = canvas.width;
// const height = canvas.height;

// console.log(width, height);

const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// create random x and y starting points

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function

function draw({ key }) {
  //increment the hue
  hue = hue + 10;
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  //   console.log(options);
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move x and y values depending on users
  //   x = x - MOVE_AMOUNT;
  //   y = y - MOVE_AMOUNT;
  switch (key) {
    case 'ArrowUp':
      y = y - MOVE_AMOUNT;

      break;
    case 'ArrowRight':
      x = x + MOVE_AMOUNT;

      break;
    case 'ArrowDown':
      y = y + MOVE_AMOUNT;

      break;
    case 'ArrowLeft':
      x = x - MOVE_AMOUNT;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
  draw({ key: e.key });
}

// clear or shake function

//listen for arrow keys

window.addEventListener('keydown', handleKey);
