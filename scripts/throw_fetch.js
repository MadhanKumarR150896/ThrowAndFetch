const background = document.querySelector('.js-background');

function throwBall() {
  background.classList.remove('play');
  void background.offsetWidth;
  background.classList.add('play');
};

function stopPLay() {
  background.classList.remove('play');
};


document.querySelector('.js-ball')
  .addEventListener('click', () => {
    throwBall();
  });

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'b') {
    throwBall();
  }
});

document.querySelector('.js-sun')
  .addEventListener('click', () => {
    stopPLay();
  });

document.body.addEventListener('keydown', (event) => {
  if (event.key === 's') {
    stopPLay();
  }
});
