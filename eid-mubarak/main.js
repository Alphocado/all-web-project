import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// tampilkan dimana
const box = document.querySelector(".box");
box.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;

// // Kubusnya
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// // warna kotak
// // meshbasic, tidak terpengaruh jika dikasih cahaya
// // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// // meshlambert, terpengaruh jika dikasih cahaya
// const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// posisi kamera
camera.position.z = 5;
camera.position.x = 4;
camera.position.y = -0.5;

// ambientlight
const ambientLight = new THREE.AmbientLight(0xffffff, 10);
scene.add(ambientLight);

const hemilight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(hemilight);

const loader = new GLTFLoader();
let ketupat;
loader.load("ketupat/scene.gltf", function (gltf) {
  ketupat = gltf.scene;
  ketupat.scale.set(30, 30, 30);
  ketupat.rotation.z = 0.3;
  scene.add(ketupat);
});

// display
function animate() {
  requestAnimationFrame(animate);

  if (ketupat) {
    ketupat.rotation.y += 0.01;
  }

  // cube.rotation.x += 0.01;
  // cube.rotation.z += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
