let ball = $('.ball');
let field = $('.field');
let fieldWidth = field.width() - ball.width();
let fieldHeight = field.height() - ball.width();
let count;
let checkGoal;

ball.on('click', function () {
  ball.animate(
    {
      left: count ? 0 : fieldWidth,
      top: (checkGoal = randomInteger(0, fieldHeight)),
    },
    function () {
      if (
        checkGoal >= fieldHeight / 2 - 0.1 * fieldHeight &&
        checkGoal <= fieldHeight / 2 + 0.1 * fieldHeight
      ) {
        alert('GOAL');
      }
    }
  );

  count = !count;
});

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
}
