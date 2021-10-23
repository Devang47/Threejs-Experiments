import "./CSS/normalize.css";
import "./CSS/style.scss";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import fragmentShader from "./shader/fragment.glsl";
import vertexShader from "./shader/vertex.glsl";

init();

function init() {
  const scene = new THREE.Scene();

  // Sizes
  const sizes = {
    width: innerWidth,
    height: innerHeight,
  };

  /**
   * lights
   */
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  /**
   * objects
   */
  // Floor
  const planeMaterial = new THREE.ShaderMaterial({
    fragmentShader: `
      precision mediump float;
      
      void main() 
      {
         gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
      }
    `,
    vertexShader: `
      void main() 
      {
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
      }
    `,
  });

  const plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 5),
    planeMaterial
  );
  // plane.position.y = -0.5;
  plane.material.side = THREE.DoubleSide; // Render both sides
  scene.add(plane);

  /**
   * Add your objects here...
   */

  /**
   * Camera
   */
  const camera = new THREE.PerspectiveCamera(
    55,
    sizes.width / sizes.height,
    0.1,
    500
  );
  camera.position.set(0, 0, 4);

  /**
   * Renderer
   */
  const canvas = document.querySelector("#webgl");

  const renderer = new THREE.WebGL1Renderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  /**
   * Controls
   */
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; // Smooth camera movement

  /**
   * Update Canvas on Resize
   */
  addEventListener("resize", () => {
    sizes.height = innerHeight;
    sizes.width = innerWidth;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
  });

  /**
   * Shadows
   */
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  /**
   * rendering frames
   */
  const clock = new THREE.Clock();
  function animate() {
    const elapsedTime = clock.getElapsedTime();

    controls.update();
    // cameraHelper.update()

    renderer.render(scene, camera);

    requestAnimationFrame(animate);
  }
  animate();
}
