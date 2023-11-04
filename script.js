document.addEventListener('DOMContentLoaded', function () {
  var currentCard = 1;

  var nextButton1 = document.getElementById('nextButton1');
  var nextButton2 = document.getElementById('nextButton2');

  nextButton1.addEventListener('click', function () {
    document.getElementById('card1').setAttribute('visible', 'false');
    document.getElementById('card2').setAttribute('visible', 'true');
  });

  nextButton2.addEventListener('click', function () {
    console.log('Next button clicked on card 2');
  });
});
