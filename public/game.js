const PIXI = require('pixi.js')


//controls for key events
function setupControls() {
    window.addEventListener("keydown", onkeydown);
    window.addEventListener("keyup", onkeyup);
}

// resize
window.onresize = () => {
    let d = document.querySelector("div#canvas");
    w = d.clientWidth;
    h = w;
    app.renderer.resize(w, h);
}

let w = 512, h = 512;
let app = new PIXI.Application({
    view: canvas,
    width: w,
    height: h,
    antialias: true
});
let pressed = {};

canvas.backgroundColor = 0x456268;
const canvas = document.getElementById('canvas')
canvas.appendChild(app.view);
setupControls();
window.onresize();

const texture = PIXI.Texture.from('/images/sprite.jpg');
const img = new PIXI.Sprite(texture)
img.x = app.renderer.width / 2;
img.y = app.renderer.height / 2;
img.anchor.x = 0.5;
img.anchor.y = 0.5;
app.stage.addChild(img);


//up and down key events
function onkeydown(ev) {
    switch (ev.key) {
        case "ArrowLeft":
        case "a":
            player.v.x = -player.speed;
            pressed['left'] = true;
            break;

        case "ArrowRight":
        case "d":
            player.v.x = player.speed;
            pressed['right'] = true;
            break;

        case "ArrowUp":
        case "w":
            player.v.y = -player.speed;
            pressed['up'] = true;
            break;

        case "ArrowDown":
        case "s":
            player.v.y = player.speed;
            pressed['down'] = true;
            break;
    }
}
function onkeyup(ev) {
    switch (ev.key) {
        case "ArrowLeft":
        case "a":
            player.v.x = pressed['right'] ? player.speed : 0;
            pressed['left'] = false;
            break;

        case "ArrowRight":
        case "d":
            player.v.x = pressed['left'] ? -player.speed : 0;
            pressed['right'] = false;
            break;

        case "ArrowUp":
        case "w":
            player.v.y = pressed['down'] ? player.speed : 0;
            pressed['up'] = false;
            break;

        case "ArrowDown":
        case "s":
            player.v.y = pressed['up'] ? -player.speed : 0;
            pressed['down'] = false;
            break;
    }
}








