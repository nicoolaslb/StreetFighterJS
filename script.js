/*jslint eqeq: true, sloppy: true*/
/*global createjs, keyPress, keyRelease,creationPerso1,creationPerso2,tick,walkRightPerso1*/

var stage,
    imgPerso1 = new Image(),
    perso1,
    imgPerso2 = new Image(),
    perso2,
    clavier1 = {
        gauche: 0,
        droite: 0,
        U: 0,
        I: 0,
        bas: 0
    },
    clavier2 = {
        gauche: 0,
        droite: 0,
        haut: 0,
        bas: 0
    },
    bitmap;

window.onkeydown = keyPress;
window.onkeyup = keyRelease;

function keyPress(e) {

    // PERSO 1
    if (e.keyCode == 81) {
        clavier1.gauche = 1;
        perso1.gotoAndPlay("walkLeftPerso1");
    }
    if (e.keyCode == 68) {
        clavier1.droite = 1;
        perso1.gotoAndPlay("walkRightPerso1");

    }
    if (e.keyCode == 85) {
        clavier1.U = 1;
        perso1.gotoAndPlay("punch1Perso1");
    }
    if (e.keyCode == 73) {
        clavier1.I = 1;
        perso1.gotoAndPlay("kick1Perso1");
    }
    // PERSO 2
    if (e.keyCode == 37) {
        clavier2.gauche = 1;
        perso2.gotoAndPlay("walkPerso2");

    }
    if (e.keyCode == 39) {
        clavier2.droite = 1;
        perso2.gotoAndPlay("walkPerso2");

    }
    if (e.keyCode == 38) {
        clavier2.haut = 1;
        perso2.gotoAndPlay("jumpPerso2");
    }

}

function keyRelease(e) {
    // PERSO 1
    if (e.keyCode == 81) {
        clavier1.gauche = 0;
        perso1.gotoAndPlay("standPerso1");
    }
    if (e.keyCode == 68) {
        clavier1.droite = 0;
        perso1.gotoAndPlay("standPerso1");

    }
    if (e.keyCode == 85) {
        clavier1.U = 0;
        perso1.gotoAndPlay("standPerso1");
    }
    if (e.keyCode == 73) {
        clavier1.I = 0;
        perso1.gotoAndPlay("standPerso1");
    }
    // PERSO 2
    if (e.keyCode == 37) {
        clavier2.gauche = 0;
        perso2.gotoAndPlay("standPerso2");

    }
    if (e.keyCode == 39) {
        clavier2.droite = 0;
        perso2.gotoAndPlay("standPerso2");

    }
    if (e.keyCode == 38) {
        clavier2.haut = 0;
        perso2.gotoAndPlay("standPerso2");
    }
}

function init() {
    stage = new createjs.Stage('canvas');

    bitmap = new createjs.Bitmap("img/arena.png");
    bitmap.regX = 328.5;
    bitmap.regY = 112;
    bitmap.scaleX = 1.8;
    bitmap.scaleY = 1.8;
    bitmap.x = stage.canvas.width / 2;
    bitmap.y = stage.canvas.height / 2;
    stage.addChild(bitmap);
    stage.update();

    imgPerso1.src = "img/ken.png";
    imgPerso1.onload = creationPerso1();

    imgPerso2.src = "img/ryu.png";
    imgPerso2.onload = creationPerso2();

    createjs.Ticker.useRAF = true;
    createjs.Ticker.setFPS(40);
    createjs.Ticker.addEventListener("tick", stage);
    createjs.Ticker.addEventListener("tick", tick);
}


function creationPerso1() {
    var ss = new createjs.SpriteSheet({
        images: [imgPerso1],
        frames: {
            width: 100,
            height: 100,
            regX: 50,
            regY: 50
        },
        animations: {
            standPerso1: [0, 3, true, 0.1],
            walkRightPerso1: [4, 8, true, 0.1],
            walkLeftPerso1: [4, 8, true, 0.1],
            punch1Perso1: [10, 12, false, 0.15],
            kick1Perso1: [13, 15, true, 0.1]
        }
    });

    perso1 = new createjs.Sprite(ss, "standPerso1");
    perso1.scaleX = 1.2;
    perso1.scaleY = 1.2;
    perso1.x = stage.canvas.width / 2 - 200;
    perso1.y = stage.canvas.height - 90;

    stage.addChild(perso1);
    stage.update();
}


function creationPerso2() {
    var ss = new createjs.SpriteSheet({
        images: [imgPerso2],
        frames: {
            width: 100,
            height: 100,
            regX: 50,
            regY: 50
        },
        animations: {
            standPerso2: [0, 3, true, 0.1],
            walkPerso2: [90, 95, true, 0.2]
        }
    });

    perso2 = new createjs.Sprite(ss, "standPerso2");
    perso2.x = stage.canvas.width / 2 + 200;
    perso2.y = stage.canvas.height / 2 + 115;
    perso2.scaleX = -1.2;
    perso2.scaleY = 1.2;

    perso2.gotoAndPlay("standPerso2");
    stage.addChild(perso2);
    stage.update();
}

function deplacement() {
    if (clavier1.gauche == 1) {
        perso1.x = perso1.x - 3;
    }
    if (clavier1.droite == 1) {
        perso1.x = perso1.x + 3;
    }
    if (clavier2.gauche == 1) {
        perso2.x = perso2.x - 3;
    }
    if (clavier2.droite == 1) {
        perso2.x = perso2.x + 3;
    }
}

function tick() {
    deplacement();
    stage.update();
}

window.onload = init;