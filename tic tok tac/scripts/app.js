const playerConfigOverlayElement=document.getElementById('config-overlay');
const backdropElement= document.getElementById('backdrop');
const formElement= document.querySelector('form');


const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelconfigBtnelement =document.getElementById('cancle-config-btn');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelconfigBtnelement.addEventListener('click', closerplayerconfig);
backdropElement.addEventListener('click',closerplayerconfig);

formElement.addEventListener('click',savePlayerConfig);
