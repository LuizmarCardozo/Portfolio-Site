function playjogosound() {
    const sound = new Audio('styles/sounds/start.mp3');
    sound.play();
}


document.querySelector('.luiz').addEventListener('click', playjogosound);