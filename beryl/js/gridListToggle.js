function gridToggleOff(){
    document.querySelector('.directory-grid').classList.remove('grid-mode');
    document.querySelector('.directory-grid').classList.add('list-mode');
}

function listToggleOff(){
    document.querySelector('.directory-grid').classList.remove('list-mode');
    document.querySelector('.directory-grid').classList.add('grid-mode');
}