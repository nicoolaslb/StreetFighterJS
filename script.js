/*jslint eqeq: true, sloppy: true*/
/*global createjs, keyPress, keyRelease,creationPerso1,creationPerso2,tick,walkRightPerso1,gestionVie,reloadPage*/

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
        O: 0,
        bas: 0
    },
    clavier2 = {
        gauche: 0,
        droite: 0,
        numPad1: 0,
        numPad2: 0,
        numPad3: 0,
        bas: 0
    },
    bg,
    viePerso1 = 100,
    viePerso2 = 100,
    bmpViePerso1,
    bmpViePerso2,
    bmp90,
    bmp80,
    bmp70,
    bmp60,
    bmp50,
    bmp40,
    bmp30,
    bmp20,
    bmp10,
    bmp05,
    bmp00,
    coup1 = 0,
    coup2 = 0;

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
    if (e.keyCode == 79) {
        clavier1.O = 1;
        perso1.gotoAndPlay("blockPerso1");
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
    if (e.keyCode == 99) {
        clavier2.numPad3 = 1;
        perso2.gotoAndPlay("blockPerso2");
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
    if (e.keyCode == 79) {
        clavier1.O = 0;
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
    if (e.keyCode == 99) {
        clavier2.numPad3 = 0;
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


    bmp90 = new createjs.Bitmap("img/vie/90.png");
    bmp80 = new createjs.Bitmap("img/vie/80.png");
    bmp70 = new createjs.Bitmap("img/vie/70.png");
    bmp60 = new createjs.Bitmap("img/vie/60.png");
    bmp50 = new createjs.Bitmap("img/vie/50.png");
    bmp40 = new createjs.Bitmap("img/vie/40.png");
    bmp30 = new createjs.Bitmap("img/vie/30.png");
    bmp20 = new createjs.Bitmap("img/vie/20.png");
    bmp10 = new createjs.Bitmap("img/vie/10.png");
    bmp05 = new createjs.Bitmap("img/vie/5.png");
    bmp00 = new createjs.Bitmap("img/vie/0.png");

    stage.update();

    createjs.Ticker.useRAF = true;
    createjs.Ticker.setFPS(40);
    // createjs.Ticker.addEventListener("tick", stage);
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
            standPerso1: [0, 3, true, 0.15],
            walkPerso1: [4, 8, true, 0.15],
            punch1Perso1: [10, 12, false, 0.25],
            kick1Perso1: [13, 15, false, 0.15],
            blockPerso1: [16, 16, false, 0.15],
            hitPerso1: [20, 23, false, 0.25]
        }
    });

    perso1 = new createjs.Sprite(ss, "standPerso1");
    perso1.scaleX = 1.9;
    perso1.scaleY = 1.9;
    perso1.x = stage.canvas.width / 2 - 200;
    perso1.y = stage.canvas.height - 110;

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
            standPerso2: [0, 3, true, 0.15],
            walkPerso2: [4, 8, true, 0.15],
            punch1Perso2: [10, 12, false, 0.25],
            kick1Perso2: [13, 15, false, 0.15],
            blockPerso2: [16, 16, false, 0.15],
            hitPerso2: [20, 23, false, 0.25]
        }
    });

    perso2 = new createjs.Sprite(ss, "standPerso2");
    perso2.x = stage.canvas.width / 2 + 200;
    perso2.y = stage.canvas.height / 2 + 90;
    perso2.scaleX = -1.9;
    perso2.scaleY = 1.9;

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
    baisseVie();

    stage.update();
}

function gestionVie() {

    if (clavier1.U == 1 && perso2.x - perso1.x < 80 && clavier2.numPad3 == 0) {
        viePerso2 = viePerso2 - 10;
        perso2.gotoAndPlay("hitPerso2");
    }
    if (clavier1.I == 1 && perso2.x - perso1.x < 95 && clavier2.numPad3 == 0) {
        viePerso2 = viePerso2 - 10;
        perso2.gotoAndPlay("hitPerso2");
    }

    if (clavier2.numPad1 == 1 && perso2.x - perso1.x < 80 && clavier1.O == 0) {
        viePerso1 = viePerso1 - 10;
        perso1.gotoAndPlay("hitPerso1");
    }
    if (clavier2.numPad2 == 1 && perso2.x - perso1.x < 95 && clavier1.O == 0) {
        viePerso1 = viePerso1 - 10;
        perso1.gotoAndPlay("hitPerso1");
    }

    switch (viePerso1) {

    case 90:
        bmpViePerso1.image = bmp90.image;
        stage.update();
        break;

    case 80:
        bmpViePerso1.image = bmp80.image;
        stage.update();
        break;

    case 70:
        bmpViePerso1.image = bmp70.image;
        stage.update();
        break;

    case 60:
        bmpViePerso1.image = bmp60.image;
        stage.update();
        break;

    case 50:
        bmpViePerso1.image = bmp50.image;
        stage.update();
        break;

    case 40:
        bmpViePerso1.image = bmp40.image;
        stage.update();
        break;

    case 30:
        bmpViePerso1.image = bmp30.image;
        stage.update();
        break;

    case 20:
        bmpViePerso1.image = bmp20.image;
        stage.update();
        break;

    case 10:
        bmpViePerso1.image = bmp10.image;
        stage.update();
        break;

    case 0:
        bmpViePerso1.image = bmp00.image;
        stage.update();
        break;
    }

    switch (viePerso2) {

    case 90:
        bmpViePerso2.image = bmp90.image;
        stage.update();
        break;

    case 80:
        bmpViePerso2.image = bmp80.image;
        stage.update();
        break;

    case 70:
        bmpViePerso2.image = bmp70.image;
        stage.update();
        break;

    case 60:
        bmpViePerso2.image = bmp60.image;
        stage.update();
        break;

    case 50:
        bmpViePerso2.image = bmp50.image;
        stage.update();
        break;

    case 40:
        bmpViePerso2.image = bmp40.image;
        stage.update();
        break;

    case 30:
        bmpViePerso2.image = bmp30.image;
        stage.update();
        break;

    case 20:
        bmpViePerso2.image = bmp20.image;
        stage.update();
        break;

    case 10:
        bmpViePerso2.image = bmp10.image;
        stage.update();
        break;

    case 0:
        bmpViePerso2.image = bmp00.image;
        stage.update();
        break;
    }
}

// Dès que la page est chargée, on appelle notre fonction init, initiatrice du projet.
window.onload = init;

// GERER PROBLEME VIE QUI DESCEND TROP VITE !