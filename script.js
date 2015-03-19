/*jslint sloppy: true*/
/*global createjs*/

var stage;

function init() {
    stage = new createjs.Stage('canvas');
}
window.onload = init;
