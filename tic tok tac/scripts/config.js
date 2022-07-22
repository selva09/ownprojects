function openPlayerConfig(){
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closerplayerconfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData= new FormData(event);
    const enterdplayername=formData.get('playername');
    console.log(enterdplayername);



}