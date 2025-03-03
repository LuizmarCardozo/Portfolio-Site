function playProjectSound() {
    const sound = new Audio('styles/sounds/start.mp3');
    sound.play();
}

function playGTSound() {
    const sound = new Audio('styles/sounds/start.mp3');
    sound.play();
}

function playPythonSound() {
    const sound = new Audio('styles/sounds/start.mp3');
    sound.play();
}

function playLowCodeSound() {
    const sound = new Audio('styles/sounds/start.mp3');
    sound.play();
}

function playluizsound() {
    const sound = new Audio('styles/sounds/start.mp3');
    sound.play();
}

document.querySelector('.project img').addEventListener('click', playProjectSound);
document.querySelector('.gt img').addEventListener('click', playGTSound);
document.querySelector('.python img').addEventListener('click', playPythonSound);
document.querySelector('.lowcode img').addEventListener('click', playLowCodeSound);
document.querySelector('.luiz').addEventListener('click', playluizsound);