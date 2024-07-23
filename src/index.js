import './styles.scss';
import p5 from 'p5';

new p5(sketch);

function sketch(p) {
	let numCols = 64;
	let numRows = 8;
	let iteration = 0;
	let colors;

	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);

		colors = [];
		colors.push(p.color('#ff0000'));
		colors.push(p.color('#ffff00'));
		colors.push(p.color('#00ff00'));
		colors.push(p.color('#00ffff'));
		colors.push(p.color('#0000ff'));
		colors.push(p.color('#ff00ff'));
	}

	p.draw = () => {
		p.background(238);
		p.noStroke();

		let duration = 64;
		let progress = p.frameCount % duration;
		if (progress === 0) iteration++;

		let numRowsDrawn = numRows + 1 + iteration;
		let rowH = p.height / numRows;

		for (let y = 0; y < numRowsDrawn; y++) {
			let targetY = p.height - (y + 1) * rowH + iteration + rowH;
			let currentY = p.map(progress, 0, duration, targetY, targetY + rowH);
			let yInfluence = p.map(currentY / numRows, 0, rowH, 1, numRows + 1) * 0.7;
			let extraCols = Math.pow(2, yInfluence) - 1;

			for (let x = 0; x < numCols; x++) {
				if (targetY > p.height) continue;

				let colW = p.width / numCols;
				let currentW = colW + extraCols * colW;
				let posX = x * currentW - (extraCols * yInfluence + 1) * colW;

				let amount = p.map(targetY % rowH, 0, rowH, 0, 1);
				let c1 = colors[(y + x) % colors.length];
				let c2 = colors[(y + x + 1) % colors.length];
				let c = p.lerpColor(c1, c2, amount);

				p.fill(c);
				p.rect(posX, currentY, currentW * 0.6, rowH);
			}
		}
	}
}
