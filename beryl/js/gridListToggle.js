function gridToggleOff(){
    document.getElementById('directory-grid').classList.remove('grid-mode');
    document.getElementById('directory-grid').classList.add('list-mode');
}

function listToggleOff(){
    document.getElementById('directory-grid').classList.remove('list-mode');
    document.getElementById('directory-grid').classList.add('grid-mode');
}