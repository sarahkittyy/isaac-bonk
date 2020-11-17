window.addEventListener('DOMContentLoaded', () => {
	var audio	 = document.getElementById('bgm');
	audio.volume = 0.1;

	var ct = document.getElementById('times');
	fetch('https://sushicat.rocks/api/isaac-bonk')
		.then((res) => res.json())
		.then((json) => {
			ct.innerHTML = json.count;
		})
		.catch(console.error);

	// make hammer visible
	var hammer = document.getElementById('mallet');
	setInterval(() => {
		hammer.style = '';
	}, 1750);
});
