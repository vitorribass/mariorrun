const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const pontuacao = document.querySelector("p")

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {

        mario.classList.remove('jump')

    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; // Pegar posição esquerda do Pipe
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ') // Pegar posição do bottom Mario
    // console.log(marioPosition)

    let countPipes = 0;

    if(pipePosition < 0)
    {
        countPipes++
        pontuacao.innerHTML = countPipes
        console.log(`${countPipes}`)
        // setTimeout(loop, 1500)
    }

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80)
    {
        pipe.style.animation = 'none'  //- Parar a anim
        pipe.style.left = `${pipePosition}px` //- Definir a posição atual
    
        mario.style.animation = 'none'  //- Parar a anim
        mario.style.bottom = `${marioPosition}px` //- Definir a posição atual
    
        mario.src = './components/images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }
}, 10)

 document.addEventListener('keydown' || Touch, jump) //- Qualquer tecla tocada, efetuará a função
