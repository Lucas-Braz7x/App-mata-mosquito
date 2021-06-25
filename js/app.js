var height = 0;
var width = 0;
//Recovery height:  and width
function handleGameWindow(){
  height = window.innerHeight;
  width = window.innerWidth; 
  console.log(height, width);
}
handleGameWindow();

//Create the html
function randomPosition(){
  let positionX= Math.floor(Math.random() * width ) - 50;
  let positionY = Math.floor(Math.random() * height ) - 50; 

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  let fly = document.createElement('img');
  fly.src = 'imagens/mosca.png';
  fly.className = 'mosquito1';
  fly.style.left = positionX + 'px';
  fly.style.top= positionY + 'px';
  fly.style.position ='absolute';

  document.body.appendChild(fly);
}
