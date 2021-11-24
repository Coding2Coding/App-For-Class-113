//function preload() {}

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.position(570, 320);
    camera = createCapture(VIDEO);
    camera.hide();
    filterColor = "";
}

function draw() {
    image(camera, 0, 0, 400, 400);
    tint(filterColor);
}

function filter() {
    filterColor = document.getElementById("filterColor").value;
}

function takePicture() {
    save("picture.png");
}