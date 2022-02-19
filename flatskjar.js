const canvas;
const gl;

let numVertices = 36;

let spinX = 0;
let spinY = 0;
let origX;
let origY;

const proLoc;
const mvLoc;

const cubeVertices = [
    vec3( -0.5, -0.5,  0.5 ),
    vec3( -0.5,  0.5,  0.5 ),
    vec3(  0.5,  0.5,  0.5 ),
    vec3(  0.5, -0.5,  0.5 ),
    vec3( -0.5, -0.5, -0.5 ),
    vec3( -0.5,  0.5, -0.5 ),
    vec3(  0.5,  0.5, -0.5 ),
    vec3(  0.5, -0.5, -0.5 )
];

const indices = [
    1, 0, 3,
    3, 2, 1,
    2, 3, 7,
    7, 6, 2,
    3, 0, 4,
    4, 7, 3,
    6, 5, 1,
    1, 2, 6,
    4, 5, 6,
    6, 7, 4,
    5, 4, 0,
    0, 1, 5
];

window.onload = function init() {
    canvas = document.getElementById('gl-canvas');

    gl = WebGlUtils.setupWebGl();

    if (!gl) {
        alert('WebGL isnt available');
    }

    gl.enable(gl.DEPTH_TEST);

    const program = initShaders(gl, 'vertex-shader', 'fragment-shader');

    const iBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(indices), gl.STATIC_DRAW);

    const vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeVertices));

    proLoc = gl.getUniformLocation(program, 'projection');
    mvLoc = gl.getUniformLocation(program, 'modelview');
    
    let proj = perspective(50.0, 1.0, 0.2, 100.0);

    canvas.addEventListener('mousedown', function(e) {
        movement=true;
        origX = e.offsetX;
        origY = e.offsetY;

        e.prefentDefault();
    });

    canvas.addEventListener('mouseup', function(e) {
        movement = false;
    });

    canvas.addEventListener('mousemove', function(e) {
        if (movement) {
            spinY = (spinY + (e.offsetX - origX));
            spinX = (spinX + (origY - e.offsetY));


        }
    });

    render();
}

function render() {

    //Staðsetja áhorfandann.
    let mv = lookAt(

    );

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);



}