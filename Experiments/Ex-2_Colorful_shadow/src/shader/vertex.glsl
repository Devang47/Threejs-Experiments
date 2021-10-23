void main() {
    precision mediump float;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}