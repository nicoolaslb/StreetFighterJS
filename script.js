/*jslint eqeq: true, sloppy: true*/
/*global createjs, keyPress, keyRelease,creationPerso1,creationPerso2,tick,walkRightPerso1,gestionVie*/

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
        numPad1: 0,
        numPad2: 0,
        bas: 0
    },
    bg,
    viePerso1 = 100,
    viePerso2 = 100,
    bmpViePerso1,
    bmpViePerso2;

window.onkeydown = keyPress;
window.onkeyup = keyRelease;

function keyPress(e) {

    // PERSO 1
    if (e.keyCode == 81) {
        clavier1.gauche = 1;
        perso1.gotoAndPlay("walkPerso1");
    }
    if (e.keyCode == 68) {
        clavier1.droite = 1;
        perso1.gotoAndPlay("walkPerso1");

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
    if (e.keyCode == 97) {
        clavier2.numPad1 = 1;
        perso2.gotoAndPlay("punch1Perso2");
    }
    if (e.keyCode == 98) {
        clavier2.numPad2 = 1;
        perso2.gotoAndPlay("kick1Perso2");
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
    if (e.keyCode == 97) {
        clavier2.numPad1 = 0;
        perso2.gotoAndPlay("standPerso2");
    }
    if (e.keyCode == 98) {
        clavier2.numPad2 = 0;
        perso2.gotoAndPlay("standPerso2");
    }

}

function init() {
    stage = new createjs.Stage('canvas');

    bg = new createjs.Bitmap("img/arena.png");
    bg.regX = 328.5;
    bg.regY = 112;
    bg.scaleX = 1.8;
    bg.scaleY = 1.8;
    bg.x = stage.canvas.width / 2;
    bg.y = stage.canvas.height / 2;
    stage.addChild(bg);
    stage.update();

    imgPerso1.src = "img/ken.png";
    imgPerso1.onload = creationPerso1();

    imgPerso2.src = "img/ryu.png";
    imgPerso2.onload = creationPerso2();

    bmpViePerso1 = new createjs.Bitmap("img/vie/100.png");
    bmpViePerso2 = new createjs.Bitmap("img/vie/100.png");
    bmpViePerso1.regX = 256;
    bmpViePerso1.regY = 16;
    bmpViePerso2.regX = 256;
    bmpViePerso2.regY = 16;
    bmpViePerso1.scaleX = 1;
    bmpViePerso1.scaleY = 0.85;
    bmpViePerso2.scaleX = -1;
    bmpViePerso2.scaleY = 0.85;
    bmpViePerso1.x = stage.canvas.width / 2 - 50;
    bmpViePerso1.y = 50;
    bmpViePerso2.x = bmpViePerso1.x + 100;
    bmpViePerso2.y = 50;
    stage.addChild(bmpViePerso1);
    stage.addChild(bmpViePerso2);
    stage.update();

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
            walkPerso1: [4, 8, true, 0.1],
            punch1Perso1: [10, 12, false, 0.15],
            kick1Perso1: [13, 15, false, 0.1]
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
            walkPerso2: [4, 8, true, 0.1],
            punch1Perso2: [10, 12, false, 0.1],
            kick1Perso2: [13, 15, false, 0.1]
        }
    });

    perso2 = new createjs.Sprite(ss, "standPerso2");
    perso2.x = stage.canvas.width / 2 + 200;
    perso2.y = stage.canvas.height / 2 + 111;
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
    gestionVie();

    stage.update();
}

function gestionVie() {
    if (clavier1.U == 1 && perso2.x - perso1.x < 100) {
        viePerso2 = viePerso2 - 5;
    }
    if (clavier2.numPad1 == 1 && perso2.x - perso1.x < 100) {
        viePerso1 = viePerso1 - 5;
    }

}

window.onload = init;