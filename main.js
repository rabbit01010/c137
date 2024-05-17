img = "";

function preload(){
 img = loadImage('st2.jpg');
}

function setup() {
    canvas = createCanvas(640, 300);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 300);
    fill("#FF0000");
    text("books", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60 , 450, 350);

    fill("#FF0000");
    text("table", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 80 , 150, 250);
    
}