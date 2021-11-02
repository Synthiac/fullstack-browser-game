// resize
// window.onresize = () => {
//     let d = document.querySelector("div#canvas");
//     w = d.clientWidth;
//     h = w;
//     app.renderer.resize(w, h);
//     reset();
// }


// let app = new PIXI.Application({ 
//     width: 512, 
//     height: 512, 
//     antialias: true });
// let pressed = {};
// // resize on size, set fixed
// app.renderer.backgroundColor = 0x456268;
// document.querySelector("div#canvas").appendChild(app.view);
// setupControls();
// window.onresize();


// //up and down key events
// function onkeydown(ev) {
//     switch (ev.key) {
//         case "ArrowLeft":
//         case "a":
//             player.v.x = -player.speed;
//             pressed['left'] = true;
//             break;

//         case "ArrowRight":
//         case "d":
//             player.v.x = player.speed;
//             pressed['right'] = true;
//             break;

//         case "ArrowUp":
//         case "w":
//             player.v.y = -player.speed;
//             pressed['up'] = true;
//             break;

//         case "ArrowDown":
//         case "s":
//             player.v.y = player.speed;
//             pressed['down'] = true;
//             break;
//     }
// }
// function onkeyup(ev) {
//     switch (ev.key) {
//         case "ArrowLeft":
//         case "a":
//             player.v.x = pressed['right'] ? player.speed : 0;
//             pressed['left'] = false;
//             break;

//         case "ArrowRight":
//         case "d":
//             player.v.x = pressed['left'] ? -player.speed : 0;
//             pressed['right'] = false;
//             break;

//         case "ArrowUp":
//         case "w":
//             player.v.y = pressed['down'] ? player.speed : 0;
//             pressed['up'] = false;
//             break;

//         case "ArrowDown":
//         case "s":
//             player.v.y = pressed['up'] ? -player.speed : 0;
//             pressed['down'] = false;
//             break;
//     }
// }
// //controls for key events
// function setupControls() {
//     window.addEventListener("keydown", onkeydown);
//     window.addEventListener("keyup", onkeyup);
// }

// // app.stage
// // PIXI.utils.TextureCache["assets/images/characters.png"]
// // refernece texture code
// // const charTexture = PIXI.Utils.TextureCache['assets/images/characters.png'];
// // const sprite = new PIXI.Sprite(charTexture);

// // PIXI.Loader.shared
// // .add()