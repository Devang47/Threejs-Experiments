void main() 
{
    vec4 textureColor = texture2D(uFlag, vUv);
    gl_FragColor = textureColor;
}