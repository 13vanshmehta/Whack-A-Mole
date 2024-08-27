const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.Holes')]
const scoreSpan = document.querySelector('.ScoreBox span');
const Smash_Sound = new Audio("assests/Smash-Sound.mp3");
let score = 0;

function Whack_Mole(){
    const pop = Math.floor(Math.random() * holes.length)
    const hole = holes[pop]
    let time = null;

    const img = document.createElement('img')
    img.classList.add('Mole')
    img.src = 'assests/Mole.png';

    img.addEventListener('click', () => {
        score += 10;
        Smash_Sound.play();
        scoreSpan.textContent = score;
        img.src = 'assests/Whacked-Mole.png';
    })
    hole.appendChild(img)

    time = setTimeout(() => {
        hole.removeChild(img);
        Whack_Mole();
    }, 1000)
}

Whack_Mole()

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})

window.addEventListener('mousedown', e => {
    cursor.classList.add('clicked');
})

window.addEventListener('mouseup', e => {
    cursor.classList.remove('clicked');
})

