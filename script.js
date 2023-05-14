const pianoKeys = document.querySelectorAll('.section-two .key');
const volume = document.querySelector('.section-one .volume input');
const keyValue = [];
const audio = new Audio('./tunes/a.wav');

function playTune(key) {
	const clickKey = document.querySelector(`[data-key='${key}']`);
	clickKey.classList.add('active');

	audio.src = `./tunes/${key}.wav`;
	if (keyValue.includes(key)) audio.play();

	setTimeout(() => {
		clickKey.classList.remove('active');
	}, 200);
}

pianoKeys.forEach((element) => {
	keyValue.push(element.dataset.key);
	element.addEventListener('click', () => {
		playTune(element.dataset.key);
	});
});

function handleVolume(e) {
	audio.volume = e.target.value / 100;
}

volume.addEventListener('input', handleVolume);
document.addEventListener('keypress', (e) => {
	const keyValue = e.key.toUpperCase();
	playTune(keyValue);
});
