//PASSO 1 CRIAR AS VARIÁVEIS
var trex_correndo, trex;
var solo, soloImagem, soloInvisivel;
var nuvem, nuvemImagem;

//como há 6 imagens de cacto, logo há 6 variáveis para guardá-las

//CARREGAR ARQUIVOS DE MÍDIA
function preload() {
    soloImagem = loadImage("solo.png");
    nuvemImagem = loadImage("nuvem.png");
    //esses códigos guardam as imagens dos cactos nas variáveis
    //dessa maneira, elas ficam salvas na memória do programa
 


    trex_correndo = loadAnimation("trex1.png", "trex2.png", "trex3.png");
}

function setup() {
    createCanvas(600, 200);
    //trex
    trex = createSprite(50, 180, 50, 50);
    trex.addAnimation("correndo", trex_correndo);
    trex.scale = 0.5;

    //solo
    solo = createSprite(300, 190, 600, 20);
    solo.addImage(soloImagem);
    solo.velocityX = -3;

    soloInvisivel = createSprite(300, 199, 600, 2);
    soloInvisivel.visible = false;
}

function draw() {
    background("black");

    if (solo.x < 0) {
        solo.x = solo.width / 1.99;
    }

    if (keyDown("space") && trex.y > 140) {
        trex.velocityY = -10;
    }

    trex.velocityY += 0.8;

    trex.collide(soloInvisivel);

    gerarNuvens();
  
    drawSprites();

}

function gerarNuvens() {

    if (frameCount % 60 == 0) {
        var y = Math.round(random(1, 100));
        var nuvem = createSprite(600, y, 50, 20);
        nuvem.addImage(nuvemImagem);
        nuvem.velocityX = -3;
        //o tamanho da nuvem é 0.5
        
        //a nuvem permanece na tela por 206 quadros
       
        //a profundidade do trex é mais alta que a da nuvem
       
    }

}
//código para criar os cactos
