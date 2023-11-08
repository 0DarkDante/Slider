let slider = document.querySelector('#slider');
let texts = ['text1', 'text2', 'text3'];
let i = 0;

slider.textContent = texts[0];

left.addEventListener('click', function() {
	i--;
  if (i < 0) {
		i = texts.length - 1;
	}
  slider.textContent = texts[i];
});
right.addEventListener('click', function() {
	i++;
  if (i > 2) {
    i = 0;
  }
  slider.textContent = texts[i];
});