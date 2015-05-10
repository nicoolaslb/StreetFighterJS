/*jslint eqeq: true, sloppy: true*/
/*global createjs, keyPress, keyRelease,creationPerso1,creationPerso2,tick,gestionVie,ko,shapes*/

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
    bmpViePerso1,
    bmpViePerso2,
    shape1,
    shape2;

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

    // Creation de l'arène
    bg = new createjs.Bitmap("img/arena.png");
    bg.regX = 328.5;
    bg.regY = 112;
    bg.scaleX = 1.8;
    bg.scaleY = 1.8;
    bg.x = stage.canvas.width / 2;
    bg.y = stage.canvas.height / 2;
    stage.addChild(bg);
    stage.update();

    // On crée le personnage 1
    imgPerso1.src = "img/ken.png";
    imgPerso1.onload = creationPerso1();
    stage.update();

    // Idem pour le personnage 2
    imgPerso2.src = "img/ryu.png";
    imgPerso2.onload = creationPerso2();
    stage.update();

    // Fonction génératrice de la barre de vie
    shapes();

    // Fond de la barre de vie (en rouge)
    bmpViePerso1 = new createjs.Bitmap("img/VIE.png");
    bmpViePerso1.regX = 256;
    bmpViePerso1.regY = 16;
    bmpViePerso1.x = stage.canvas.width / 2 - 50;
    bmpViePerso1.y = 50;
    bmpViePerso1.scaleX = 1.01;
    bmpViePerso1.scaleY = 0.85;


    bmpViePerso2 = new createjs.Bitmap("img/VIE.png");
    bmpViePerso2.regX = 256;
    bmpViePerso2.regY = 16;
    bmpViePerso2.scaleX = -1.01;
    bmpViePerso2.scaleY = 0.85;
    bmpViePerso2.x = bmpViePerso1.x + 100;
    bmpViePerso2.y = 50;

    stage.addChild(bmpViePerso1);
    stage.addChild(bmpViePerso2);


    stage.update();

    // Ticker
    createjs.Ticker.useRAF = true;
    createjs.Ticker.setFPS(40);
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
            hitPerso1: [20, 23, false, 0.25],
            koPerso1: [25, 27, false, 0.10]
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
            hitPerso2: [20, 23, false, 0.15],
            koPerso2: [25, 27, false, 0.10]

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

function shapes() {

    shape1 = new createjs.Shape();
    shape1.graphics.beginFill("#FFCC00").drawRect(0, 0, 238, 16);
    shape1.x = stage.canvas.width / 2 - 52;
    shape1.scaleY = 1.2;
    shape1.scaleX = 1;
    shape1.y = 59;
    shape1.regX = 238;
    shape1.regY = 16;

    shape2 = new createjs.Shape();
    shape2.graphics.beginFill("#FFCC00").drawRect(0, 0, 238, 16);
    shape2.x = stage.canvas.width / 2 + 52;
    shape2.scaleX = -1;
    shape2.scaleY = 1.2;
    shape2.y = 59;
    shape2.regX = 238;
    shape2.regY = 16;


    stage.addChild(shape1);
    stage.addChild(shape2);

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

    // Quand un personnage n'a plus de vie, on arrête le jeu
    if (shape1.scaleX <= 0) {
        ko();
        perso1.gotoAndPlay("koPerso1");
    }
    if (shape2.scaleX >= 0) {
        ko();
        perso2.gotoAndPlay("koPerso2");
    }

    stage.update();
}

function gestionVie() {

    if (clavier1.U == 1 && Math.abs(perso2.x - perso1.x) < 80 && clavier2.numPad3 == 0) {
        shape2.scaleX = shape2.scaleX + 0.05;
        perso2.x = perso2.x + 20;
        perso2.gotoAndPlay("hitPerso2");
        stage.update();
    }
    if (clavier1.I == 1 && Math.abs(perso2.x - perso1.x) < 95 && clavier2.numPad3 == 0) {
        shape2.scaleX = shape2.scaleX + 0.1;
        perso2.x = perso2.x + 40;
        perso2.gotoAndPlay("hitPerso2");
        stage.update();

    }

    if (clavier2.numPad1 == 1 && Math.abs(perso2.x - perso1.x) < 80 && clavier1.O == 0) {

        shape1.scaleX = shape1.scaleX - 0.05;
        perso1.x = perso1.x - 20;
        perso1.gotoAndPlay("hitPerso1");
        stage.update();

    }
    if (clavier2.numPad2 == 1 && Math.abs(perso2.x - perso1.x) < 95 && clavier1.O == 0) {
        shape1.scaleX = shape1.scaleX - 0.1;
        perso1.x = perso1.x - 40;
        perso1.gotoAndPlay("hitPerso1");
        stage.update();

    }
}

function ko() {
    clavier1.gauche = 0;
    clavier1.droite = 0;
    clavier2.gauche = 0;
    clavier2.droite = 0;
    window.onkeydown = null;
    window.onkeyup = null;
}

window.onload = init;