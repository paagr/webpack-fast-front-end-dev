import './styles.scss';

import p5 from 'p5';

new p5(sketch);

function sketch(p) {
	let r = Math.min(p.windowWidth / 3, p.windowHeight / 3);
	let t = 0;
	let x, y;

	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
	};

	p.draw = () => {
		p.background(200);

		x = p.windowWidth / 2 + r * p.cos(p.TWO_PI * t);
		y = p.windowHeight / 2 + r * p.sin(p.TWO_PI * t);

		p.ellipse(x, y, 10, 10);
		p.noStroke();
		p.fill(255, 0, 0);

		t += 0.01;
	};

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
		r = Math.min(p.windowWidth / 3, p.windowHeight / 3);
	};
}
