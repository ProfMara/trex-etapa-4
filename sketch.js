//declarando as variáveis..
var trex_correndo, trex;
var solo, soloImagem, soloInvisivel;
//carregando os arquivos de mídia
function preload() {
    soloImagem = loadImage("solo.png");
    nuvemImg = loadImage("nuvem.png");
    trex_correndo = loadAnimation("trex1.png", "trex2.png", "trex3.png");
}

function setup() {
    createCanvas(600, 200);

    //criando o solo...    
    solo = createSprite(300, 190, 600, 20);
    
    soloInvisivel = createSprite(300, 200, 600, 20);
    soloInvisivel.visible = false;
    solo.addImage(soloImagem);
    solo.velocityX = -3;

    //criando o trex..
    trex = createSprite(50, 180, 50, 50);
    trex.addAnimation("correndo", trex_correndo);
    trex.scale = 0.5;  


}

function draw() {
    background("white");
    
    if (solo.x < 0) {
        solo.x = solo.width / 1.99;
    }

    if (keyDown("space") && trex.isTouching(solo)) {
        trex.velocityY = -10;
    }

    trex.velocityY += 0.8
    trex.collide(soloInvisivel);
    drawSprites();
    //chama a função
    criarNuvens();

 
}

function criarNuvens(){
    if(frameCount%250==0){
        var nuvem = createSprite(600,Math.round(random(0, 100)));
        nuvem.addImage(nuvemImg);
        nuvem.velocityX = -3; 
        //deixa o trex na frente da nuvem;
        trex.depth = nuvem.depth + 1;
    }

}
