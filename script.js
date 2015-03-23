/*jslint eqeq: true, sloppy: true*/
/*global createjs, keyPress, keyRelease,persoKen,persoRyu,tick*/

var stage,
    imgKen = new Image(),
    ken,
    imgRyu = new Image(),
    ryu,
    clavier = {
        gauche: 0,
        droite: 0
    };

window.onkeydown = keyPress;
window.onkeyup = keyRelease;

function keyPress(e) {
    if (e.keyCode == 37) {
        clavier.gauche = 1;
        ken.gotoAndPlay("walkKen");

    }
    if (e.keyCode == 39) {
        clavier.droite = 1;
        ken.gotoAndPlay("walkKen");

    }
}

function keyRelease(e) {
    if (e.keyCode == 37) {
        clavier.gauche = 0;
        ken.gotoAndPlay("standKen");
    }
    if (e.keyCode == 39) {
        clavier.droite = 0;
        ken.gotoAndPlay("standKen");
    }
}

function init() {
    stage = new createjs.Stage('canvas');

    imgKen.src = "img/ken.png";
    imgKen.onload = persoKen();

    imgRyu.src = "img/ryu.gif";
    imgRyu.onload = persoRyu();

    createjs.Ticker.useRAF = true;
    createjs.Ticker.setFPS(40);
    createjs.Ticker.addEventListener("tick", stage);
    createjs.Ticker.addEventListener("tick", tick);
}

function persoKen() {
    var ss = new createjs.SpriteSheet({
        images: [imgKen],
        frames: {
            width: 70,
            height: 80,
            regX: 35,
            regY: 40
        },
        animations: {
            standKen: [7, 10, true, 0.2],
            walkKen: [21, 25, true, 0.2]
        }
    });

    ken = new createjs.Sprite(ss, "standKen");
    ken.x = stage.canvas.width / 2 - 100;
    ken.y = stage.canvas.height / 2;

    stage.addChild(ken);
    stage.update();
}


function persoRyu() {
    var ss = new createjs.SpriteSheet({
        images: [imgRyu],
        frames: {
            width: 58,
            height: 93.04,
            regX: 29,
            regY: 46.52
        },
        animations: {
            standRyu: [6, 9, true, 0.2],
            walkRyu: [16, 20, true, 0.2]
        }
    });

    ryu = new createjs.Sprite(ss, "standRyu");
    ryu.x = stage.canvas.width / 2 + 100;
    ryu.y = stage.canvas.height / 2;

    ryu.gotoAndPlay("stand");
    stage.addChild(ryu);
    stage.update();
}

function deplacement() {
    if (clavier.gauche == 1) {
        ken.x = ken.x - 3;
    }
    if (clavier.droite == 1) {
        ken.x = ken.x + 3;
    }
}

function tick() {
    deplacement();
    stage.update();
}

window.onload = init;
