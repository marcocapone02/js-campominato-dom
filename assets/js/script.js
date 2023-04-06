const btnPlay = document.getElementById('play')
const difficultySelect = document.getElementById('difficulty');
const htmlMain = document.querySelector('main')
const r = document.querySelector(':root');


btnPlay.addEventListener('click', function(){
    campoMinato();
})

function campoMinato(){

    let difficultyValue = parseInt(difficultySelect.value)

    let bombs = bombsGenerator( difficultyValue)

    let gameOver = false
    let score = 0

    variabileDifficolta(difficultyValue)

    htmlMain.innerHTML = ''

    let divGrill = document.createElement('div')

    divGrill.classList.add('grill')

    htmlMain.append(divGrill)

    for (let i = 1; i <= difficultyValue; i++ ){
        let divCella = document.createElement('div')
        divCella.classList.add('item')

        divCella.innerText = i

        document.querySelector('.grill').append(divCella)

        divCella.addEventListener('click', function(){
            console.log(i)

            if(!gameOver){

                if( !bombs.includes(i)){
                    this.classList.add('clicked')
                    score++
                } else{
                    this.classList.add('clicked-bomb')
                    gameOver = true
                    document.querySelector('#game-over').append(document.innerHTML = `${score} punti`)
                    this.innerHTML = `<i class="fa-solid fa-bomb fa-beat" style="color: #0680ff;"></i>`
                    
                }
            } else{
                htmlMain.innerHTML = ''
                document.querySelector('#game-over').innerHTML = ``
            }
            
            
        })
    }

}

function variabileDifficolta(x) {
    x = Math.sqrt(x)

    r.style.setProperty('--numCelle', x);
}

function bombsGenerator(difficoltaParam){
    const arraybombs = []

    for( let k = 0; arraybombs.length < 16; k++){

        let bomb = numRandom(1, difficoltaParam)
        if(!arraybombs.includes( bomb )){
            arraybombs.push (bomb)
        }
    }

    console.log( arraybombs )
    return arraybombs
}

function numRandom(min, max){
    return Math.floor(Math.random() * max) + min
}