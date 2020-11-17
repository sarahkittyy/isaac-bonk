window.addEventListener('DOMContentLoaded', () => {
	var btn = document.getElementById('start');
	btn.addEventListener('click', onClick);

	function onClick() {
		btn.removeEventListener('click', onClick);

		var audio = document.createElement('audio');
		audio.src = 'public/noise.m4a';
		audio.volume = 0.1;
		audio.play();

		btn.style = 'display: none'

		document.getElementById('isaac-pre').style = '';
		document.getElementById('isaac-post').style = '';
		document.getElementById('timedisplay').style = '';

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
	}
});
