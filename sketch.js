// Modulo Motor de fisica
const MotorFisica = Matter.Engine;
// Modulo que cria o mundo
const Mundo = Matter.World;
// Modulo que cria o corpo / objeto
const Objetos = Matter.Bodies;
// 
const Corpo = Matter.Body;

let motorDeFisica;
let mundo, bola, chao;
var angulo=60;
var raio = 20;
var pedra, raioPedra = 10;
// var wedge;
// var poly;

// Configuracao
function setup() {
  createCanvas(400, 400);
  
  // criando um motor de fisica
  motorDeFisica = MotorFisica.create();
  // criando o mundo
  mundo = motorDeFisica.world;

  var opcoes_bola = {
    // elasticidade
    restitution: 0.95,
    // atrito do ar sobre o objeto
    frictionAir: 0.01
  }

  // criando objeto bola
  bola = Objetos.circle(100, 10, raio, opcoes_bola);
  Mundo.add(mundo, bola);

  var opcoes_chao = {
    // se é estático ou não (se vai ficar parado na tela)
    isStatic: true
  }

  // objeto chao
  chao = Objetos.rectangle(200, 390, 400, 20, opcoes_chao);
  Mundo.add(mundo, chao);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

// função desenhar
function draw() 
{
  background("black");

  // atualizar movimentos
  MotorFisica.update(motorDeFisica);
 
  ellipse(bola.position.x, bola.position.y, raio);
  rect(chao.position.x, chao.position.y, 400, 20);
}
