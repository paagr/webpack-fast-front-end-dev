// import './styles.scss';

// import gsap from 'gsap';

// const isTouchDevice = 'ontouchstart' in window;

// const imgW = 520;
// const imgH = 520;

// const createImagePop = () => {
// 	let lastX = -Infinity;
// 	let lastY = -Infinity;

// 	const imgContainer = document.querySelector('.img-container');
// 	const images = imgContainer.querySelectorAll('.img-cursor');

// 	let ongoingX = null;
// 	let ongoingTime = null;
// 	let velocity = 0;

// 	window.addEventListener('mousemove', (e) => {
// 		const { x, y } = e;

// 		const currentTime = Date.now();
// 		const currentX = e.pageX;

// 		if (ongoingX !== null && ongoingTime !== null) {
// 			const deltaTime = currentTime - ongoingTime;
// 			const deltaX = currentX - ongoingX;
// 			velocity = deltaX / deltaTime;
// 		}

// 		ongoingX = currentX;
// 		ongoingTime = currentTime;

// 		const distanceX = Math.abs(x - lastX);
// 		const distanceY = Math.abs(y - lastY);
// 		if (distanceX >= 55 || distanceY >= 55) {
// 			lastX = x;
// 			lastY = y;

// 			const randomIndex = Math.floor(Math.random() * images.length);
// 			const randomImage = images[randomIndex];

// 			if (randomImage) {
// 				const image = randomImage.cloneNode(); // Create a clone of the randomly selected image
// 				image.style.position = 'absolute';
// 				image.style.width = `${imgW}px`;
// 				image.style.height = `${imgH}px`;
// 				image.style.objectFit = 'contain';
// 				image.style.left = `${x - imgW / 2}px`;
// 				image.style.top = `${y - imgH / 2}px`;

// 				document.body.appendChild(image);

// 				gsap.fromTo(
// 					image,
// 					{ scale: 0, rotation: 0 },
// 					{
// 						duration: 0.89,
// 						scale: 1,
// 						x: `+=${velocity * 55}`,
// 						y: `+=${velocity * 55}`,
// 						rotation: velocity * 2.33,
// 						ease: 'power1.inOut',
// 					}
// 				);

// 				setTimeout(() => {
// 					gsap.to(image, {
// 						duration: 1,
// 						y: '+=100%',
// 						opacity: 0,
// 						onComplete: () => {
// 							document.body.removeChild(image); // Remove the image after the animation completes
// 						},
// 					});
// 				}, 3000);
// 			}
// 		}
// 	});
// };

// if (!isTouchDevice) {
// 	createImagePop();
// }

// import './styles.scss';
// import gsap from 'gsap';

// const isTouchDevice = 'ontouchstart' in window;

// const imgW = 520;
// const imgH = 520;

// const getUnsplashImage = () => {
// 	return new Promise((resolve, reject) => {
// 		const imageUrl = 'https://source.unsplash.com/random';
// 		const image = new Image();
// 		image.onload = () => {
// 			resolve(image.src);
// 		};
// 		image.onerror = (error) => {
// 			reject(error);
// 		};
// 		image.src = imageUrl;
// 	});
// };

// const createImagePop = () => {
// 	let lastX = -Infinity;
// 	let lastY = -Infinity;

// 	const imgContainer = document.querySelector('.img-container');

// 	let ongoingX = null;
// 	let ongoingTime = null;
// 	let velocity = 0;

// 	window.addEventListener('mousemove', async (e) => {
// 		const { x, y } = e;

// 		const currentTime = Date.now();
// 		const currentX = e.pageX;

// 		if (ongoingX !== null && ongoingTime !== null) {
// 			const deltaTime = currentTime - ongoingTime;
// 			const deltaX = currentX - ongoingX;
// 			velocity = deltaX / deltaTime;
// 		}

// 		ongoingX = currentX;
// 		ongoingTime = currentTime;

// 		const distanceX = Math.abs(x - lastX);
// 		const distanceY = Math.abs(y - lastY);
// 		if (distanceX >= 55 || distanceY >= 55) {
// 			lastX = x;
// 			lastY = y;

// 			const imageUrl = await getUnsplashImage(); // Fetch a new image URL from Unsplash
// 			const image = new Image();
// 			image.onload = () => {
// 				image.style.position = 'absolute';
// 				image.style.width = `${imgW}px`;
// 				image.style.height = `${imgH}px`;
// 				image.style.objectFit = 'contain';
// 				image.style.left = `${x - imgW / 2}px`;
// 				image.style.top = `${y - imgH / 2}px`;

// 				document.body.appendChild(image);

// 				gsap.fromTo(
// 					image,
// 					{ scale: 0, rotation: 0 },
// 					{
// 						duration: 0.89,
// 						scale: 1,
// 						x: `+=${velocity * 55}`,
// 						y: `+=${velocity * 55}`,
// 						rotation: velocity * 2.33,
// 						ease: 'power1.inOut',
// 					}
// 				);

// 				setTimeout(() => {
// 					gsap.to(image, {
// 						duration: 1,
// 						y: '+=100%',
// 						opacity: 0,
// 						onComplete: () => {
// 							document.body.removeChild(image); // Remove the image after the animation completes
// 						},
// 					});
// 				}, 3000);
// 			};
// 			image.onerror = (error) => {
// 				console.error('Error loading image:', error);
// 			};
// 			image.src = imageUrl;
// 		}
// 	});
// };

// if (!isTouchDevice) {
// 	createImagePop();
// }

import './styles.scss';
import gsap from 'gsap';

const isTouchDevice = 'ontouchstart' in window;

const imgW = 520;
const imgH = 520;

// const getUnsplashImage = () => {
// 	return new Promise((resolve, reject) => {
// 		const imageUrl = 'https://source.unsplash.com/random';
// 		const image = new Image();
// 		image.onload = () => {
// 			resolve(image.src);
// 		};
// 		image.onerror = (error) => {
// 			reject(error);
// 		};
// 		image.src = imageUrl;
// 	});
// };

const searchTerms = ['night', 'flowers', 'design', 'nature', 'burlesque', 'lingerie', 'woman'];

const getRandomSearchTerm = () => {
	return searchTerms[Math.floor(Math.random() * searchTerms.length)];
};

const getUnsplashImage = () => {
	return new Promise((resolve, reject) => {
		const searchTerm = getRandomSearchTerm();
		const imageUrl = `https://source.unsplash.com/random/?${searchTerm}`;
		const image = new Image();
		image.onload = () => {
			resolve(image.src);
		};
		image.onerror = (error) => {
			reject(error);
		};
		image.src = imageUrl;
	});
};

const createImagePop = async () => {
	let lastX = -Infinity;
	let lastY = -Infinity;

	const imgContainer = document.querySelector('.img-container');

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

			const imageUrl = await getUnsplashImage(); // Fetch a new image URL from Unsplash
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
						x: `+=${velocity * 55}`,
						y: `+=${velocity * 55}`,
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
							document.body.removeChild(image); // Remove the image after the animation completes
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
