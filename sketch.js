let mostrarFolder = true;
let FondoA;
let camara;
let usarCamara = false;
let personajeX = 0;
let personajeY = 0;

let arrastrando = false;
let offsetX = 0;
let offsetY = 0;

let BaseA, BaseB, BaseC, BaseD, BaseE;
let BocaA, BocaB, BocaC, BocaD, BocaE, BocaF, BocaG;
let NarizA, NarizB, NarizC, NarizD, NarizE, NarizF;
let OjoA, OjoB, OjoC, OjoD, OjoE, OjoF, OjoG;
let PeloA, PeloB, PeloC, PeloD, PeloE, PeloF;

let botonbaseder, botonbaseizq;
let botonbocader, botonbocaizq;
let botonnarizder, botonnarizizq;
let botonojosder, botonojosizq;
let botonpeloder, botonpeloizq;
let folder;

let bases = [];
let bocas = [];
let narices = [];
let ojos = [];
let pelos = [];

let baseActual = 0;
let bocaActual = 0;
let narizActual = 0;
let ojosActual = 0;
let peloActual = 0;

function preload() {

  FondoA = loadImage("FondoA.png");

  BaseA = loadImage("BaseA.png");
  BaseB = loadImage("BaseB.png");
  BaseC = loadImage("BaseC.png");
  BaseD = loadImage("BaseD.png");
  BaseE = loadImage("BaseE.png");

  BocaA = loadImage("BocaA.png");
  BocaB = loadImage("BocaB.png");
  BocaC = loadImage("BocaC.png");
  BocaD = loadImage("BocaD.png");
  BocaE = loadImage("BocaE.png");
  BocaF = loadImage("BocaF.png");
  BocaG = loadImage("BocaG.png");

  NarizA = loadImage("NarizA.png");
  NarizB = loadImage("NarizB.png");
  NarizC = loadImage("NarizC.png");
  NarizD = loadImage("NarizD.png");
  NarizE = loadImage("NarizE.png");
  NarizF = loadImage("NarizF.png");

  OjoA = loadImage("OjoA.png");
  OjoB = loadImage("OjoB.png");
  OjoC = loadImage("OjoC.png");
  OjoD = loadImage("OjoD.png");
  OjoE = loadImage("OjoE.png");
  OjoF = loadImage("OjoF.png");
  OjoG = loadImage("OjoG.png");

  PeloA = loadImage("PeloA.png");
  PeloB = loadImage("PeloB.png");
  PeloC = loadImage("PeloC.png");
  PeloD = loadImage("PeloD.png");
  PeloE = loadImage("PeloE.png");
  PeloF = loadImage("PeloF.png");

  botonbaseder = loadImage("botonbaseder.png");
  botonbaseizq = loadImage("botonbaseizq.png");

  botonbocader = loadImage("botonbocader.png");
  botonbocaizq = loadImage("botonbocaizq.png");

  botonnarizder = loadImage("botonnarizder.png");
  botonnarizizq = loadImage("botonnarizizq.png");

  botonojosder = loadImage("botonojosder.png");
  botonojosizq = loadImage("botonojosizq.png");

  botonpeloder = loadImage("botonpeloder.png");
  botonpeloizq = loadImage("botonpeloizq.png");
  folder = loadImage("003-folder.png");
}

function setup() {
 let canvas = createCanvas(400, 400);
 canvas.parent('canvas-contenedor');


  bases = [BaseA, BaseB, BaseC, BaseD, BaseE];

  bocas = [
    BocaA,
    BocaB,
    BocaC,
    BocaD,
    BocaE,
    BocaF,
    BocaG
  ];

  narices = [
    NarizA,
    NarizB,
    NarizC,
    NarizD,
    NarizE,
    NarizF
  ];

  ojos = [
    OjoA,
    OjoB,
    OjoC,
    OjoD,
    OjoE,
    OjoF,
    OjoG
  ];

  pelos = [
    PeloA,
    PeloB,
    PeloC,
    PeloD,
    PeloE,
    PeloF
  ];
  camara = createCapture(VIDEO);
camara.size(400, 400);
camara.hide();
}

function draw() {

if (usarCamara) {
  push();
  translate(width, 0);
  scale(-1, 1);
  image(camara, 0, 0, width, height);
  pop();
} else {
  image(FondoA, 0, 0);
}

image(bases[baseActual], personajeX, personajeY);
image(bocas[bocaActual], personajeX, personajeY);
image(narices[narizActual], personajeX, personajeY);
image(ojos[ojosActual], personajeX, personajeY);
image(pelos[peloActual], personajeX, personajeY);
  
  if (usarCamara && mostrarFolder) {
  image(folder, 10, 10, 50, 50);
}

  if (!usarCamara) {

  image(botonbaseder, 0, 0);
  image(botonbaseizq, 0, 0);

  image(botonbocader, 0, 0);
  image(botonbocaizq, 0, 0);

  image(botonnarizder, 0, 0);
  image(botonnarizizq, 0, 0);

  image(botonojosder, 0, 0);
  image(botonojosizq, 0, 0);

  image(botonpeloder, 0, 0);
  image(botonpeloizq, 0, 0);

 }
}


function mousePressed() {
 
  // BOTON DESCARGAR
if (
  usarCamara &&
  mouseX > 10 &&
  mouseX < 42 &&
  mouseY > 10 &&
  mouseY < 42
) {

  mostrarFolder = false;

  redraw();

  saveCanvas('avatar', 'png');

  mostrarFolder = true;

  return;
}
if (
  mouseX > 376 &&
  mouseX < 396 &&
  mouseY > 7 &&
  mouseY < 27
) {

  usarCamara = !usarCamara;

  // Si volvemos al editor
  if (!usarCamara) {
    personajeX = 0;
    personajeY = 0;
    arrastrando = false;
  }

  return;
}

  // ARRASTRAR PERSONAJE
  if (usarCamara) {

    if (
      mouseX > personajeX &&
      mouseX < personajeX + 400 &&
      mouseY > personajeY &&
      mouseY < personajeY + 400
    ) {

      arrastrando = true;

      offsetX = mouseX - personajeX;
      offsetY = mouseY - personajeY;
    }

    return;
  }

  // BASE
  if (mouseX > 39 && mouseX < 79 && mouseY > 335 && mouseY < 375) {
    baseActual = (baseActual - 1 + bases.length) % bases.length;
  }

  if (mouseX > 315 && mouseX < 355 && mouseY > 335 && mouseY < 375) {
    baseActual = (baseActual + 1) % bases.length;
  }

  // BOCA
  if (mouseX > 47 && mouseX < 67 && mouseY > 210 && mouseY < 230) {
    bocaActual = (bocaActual - 1 + bocas.length) % bocas.length;
  }

  if (mouseX > 329 && mouseX < 349 && mouseY > 210 && mouseY < 230) {
    bocaActual = (bocaActual + 1) % bocas.length;
  }

  // NARIZ
  if (mouseX > 47 && mouseX < 67 && mouseY > 180 && mouseY < 200) {
    narizActual = (narizActual - 1 + narices.length) % narices.length;
  }

  if (mouseX > 329 && mouseX < 349 && mouseY > 180 && mouseY < 200) {
    narizActual = (narizActual + 1) % narices.length;
  }

  // OJOS
  if (mouseX > 47 && mouseX < 67 && mouseY > 150 && mouseY < 170) {
    ojosActual = (ojosActual - 1 + ojos.length) % ojos.length;
  }

  if (mouseX > 329 && mouseX < 349 && mouseY > 150 && mouseY < 170) {
    ojosActual = (ojosActual + 1) % ojos.length;
  }

  // PELO
  if (mouseX > 47 && mouseX < 67 && mouseY > 118 && mouseY < 138) {
    peloActual = (peloActual - 1 + pelos.length) % pelos.length;
  }

  if (mouseX > 329 && mouseX < 349 && mouseY > 118 && mouseY < 138) {
    peloActual = (peloActual + 1) % pelos.length;
   }
  }
function mouseDragged() {

  if (usarCamara && arrastrando) {
    personajeX = mouseX - offsetX;
    personajeY = mouseY - offsetY;
  }

}
  function mouseReleased() {
    arrastrando = false;
  }
