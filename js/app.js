var height = 0;
var width = 0;
var lifes = 1;
var time = 10;
var createFlyTime = 1800; 

var selectedLevel = window.location.search;
selectedLevel = selectedLevel.replace('?', '');

if(selectedLevel === 'facil'){
  createFlyTime = 1500;
}else if (selectedLevel === 'normal'){
  createFlyTime = 1300;
}else if(selectedLevel === 'dificil'){
  createFlyTime = 1000;
}else{
  createFlyTime = 750;
}
console.log(selectedLevel)
//show timer
function stopwatch (){
  if(time < 0){
    clearInterval(createImg);
    window.location.href='vitoria.html';
  }else{
    document.getElementById('stopwatchNumber').innerHTML = time;
  }
  time--;
};
//Recovery height:  and width
function handleGameWindow(){
  height = window.innerHeight;
  width = window.innerWidth; 
  console.log(height, width);
}
handleGameWindow();

//Random class
function randomHeight(){
  let classe = Math.floor(Math.random() *3);
  
  switch(classe){
    case 0:
      return 'mosquito1';
    case 1: 
      return 'mosquito2';
    case 2: 
      return 'mosquito3';
  } 
}
//Define image side
function randomSide(){
  let classe = Math.floor(Math.random() *2);
  
  switch(classe){
    case 0:
      return 'sideA';
    case 1: 
      return 'sideB';
  } 
}

//Create the html
function randomPosition(){
  let imgId = 'fly';
  
  if(!document.getElementById(imgId)){
    console.log('entrou aqui')
    let positionX= Math.floor(Math.random() * width ) - 90;
    let positionY = Math.floor(Math.random() * height ) - 90; 

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    let fly = document.createElement('img');
    fly.src = 'imagens/mosca.png';
    fly.className = randomHeight() + ' ' + randomSide();
    fly.style.left = positionX + 'px';
    fly.style.top= positionY + 'px';
    fly.style.position ='absolute';
    fly.id = imgId;
    fly.onclick = function (){
      this.remove();
    }

    document.body.appendChild(fly);
  }else{
    document.getElementById(imgId).remove();
    if(lifes > 3){
      clearInterval(createImg);
      window.location.href='fim-de-jogo.html';
    }else{
      document.getElementById('life' + lifes).src="imagens/coracao_vazio.png";
      lifes++;
    }
  }
}

function restart (){
  window.location.href='index.html';
}

//Start Game
function startGame (){
  let = level = document.getElementById('level').value;

  if(level === ''){
    alert('Selecione um nivel');  
    return;
  }else{
    window.location.href=`app.html?${level}`
  }
  
}

