import './styles.scss';
import gsap from 'gsap';

const isTouchDevice = 'ontouchstart' in window;

const imgW = 520;
const imgH = 520;

const searchTerms = [
	'night',
	'model',
	'girl',
	'female',
	'developer',
	'design',
	'code',
	'javascript',
	'typography',
	'party',
	'dj',
];

const getRandomSearchTerm = () => {
	return searchTerms[Math.floor(Math.random() * searchTerms.length)];
};

const preloadImage = (url) => {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = () => {
			resolve(url);
		};
		image.onerror = (error) => {
			reject(error);
		};
		image.src = url;
	});
};

const getUnsplashImage = () => {
	return new Promise(async (resolve, reject) => {
		const searchTerm = getRandomSearchTerm();
		const imageUrl = `https://source.unsplash.com/random/?${searchTerm}`;
		try {
			await preloadImage(imageUrl); // Preload the image
			resolve(imageUrl);
		} catch (error) {
			reject(error);
		}
	});
};

const createImagePop = async () => {
	let lastX = -Infinity;
	let lastY = -Infinity;

	let ongoingX = null;
	let ongoingTime = null;
	let velocity = 0;

	window.addEventListener('mousemove', async (e) => {
		const { x, y } = e;

		const currentTime = Date.now();
		const currentX = e.pageX;

		if (ongoingX !== null && ongoingTime !== null) {
			const deltaTime = currentTime - ongoingTime;
			const deltaX = currentX - ongoingX;
			velocity = deltaX / deltaTime;
		}

		ongoingX = currentX;
		ongoingTime = currentTime;

		const distanceX = Math.abs(x - lastX);
		const distanceY = Math.abs(y - lastY);
		if (distanceX >= 55 || distanceY >= 55) {
			lastX = x;
			lastY = y;

			const imageUrl = await getUnsplashImage();
			const image = new Image();
			image.onload = () => {
				image.style.position = 'absolute';
				image.style.width = `${imgW}px`;
				image.style.height = `${imgH}px`;
				image.style.objectFit = 'contain';
				image.style.left = `${x - imgW / 2}px`;
				image.style.top = `${y - imgH / 2}px`;

				document.body.appendChild(image);

				gsap.fromTo(
					image,
					{ scale: 0, rotation: 0 },
					{
						duration: 0.89,
						scale: 1,
						x: `+=${velocity * 21}`,
						y: `+=${velocity * 21}`,
						rotation: velocity * 2.33,
						ease: 'power1.inOut',
					}
				);

				setTimeout(() => {
					gsap.to(image, {
						duration: 1,
						y: '+=100%',
						opacity: 0,
						onComplete: () => {
							document.body.removeChild(image);
						},
					});
				}, 3000);
			};
			image.onerror = (error) => {
				console.error('Error loading image:', error);
			};
			image.src = imageUrl;
		}
	});
};

if (!isTouchDevice) {
	createImagePop();
}
