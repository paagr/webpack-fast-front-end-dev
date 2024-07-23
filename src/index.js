import './styles.scss';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Corrected import path

// Constants
const NUM_LINES = 13;
const RADIUS = 5;
const START_DISTANCE_FACTOR = 0.1;

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.z = 8;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create gizmo
const gizmo = new THREE.AxesHelper(1); // Length of axes lines is 2 units
scene.add(gizmo);

// Create lines
for (let i = 0; i < NUM_LINES; i++) {
	const angle = (i / NUM_LINES) * Math.PI * 2;
	const startPoint = new THREE.Vector3(0, 0, 0);
	const endPoint = new THREE.Vector3(
		Math.cos(angle) * RADIUS,
		Math.sin(angle) * RADIUS,
		0
	);
	const newStartPoint = calculateNewStartPoint(
		startPoint,
		endPoint,
		START_DISTANCE_FACTOR
	);
	const line = createLine(newStartPoint, endPoint);
	scene.add(line);
}

// Create OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Event listeners
window.addEventListener('resize', onWindowResize);

// Render loop
animate();

function calculateNewStartPoint(startPoint, endPoint, factor) {
	const direction = endPoint.clone().normalize();
	return startPoint.clone().addScaledVector(direction, RADIUS * factor);
}

function createLine(startPoint, endPoint) {
	const lineGeometry = new THREE.BufferGeometry().setFromPoints([
		startPoint,
		endPoint,
	]);
	const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
	return new THREE.Line(lineGeometry, lineMaterial);
}

function render() {
	renderer.render(scene, camera);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	render();
}

function animate() {
	requestAnimationFrame(animate);
	controls.update();
	render();
}