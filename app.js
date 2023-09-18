const scorePoint = document.querySelector('.score')
const scissor = document.querySelector('.play__scissor')
const paper = document.querySelector('.play__paper')
const rock = document.querySelector('.play__rock')
const lizard = document.querySelector('.play__lizard')
const spock = document.querySelector('.play__spock')
const playSec = document.querySelector('.play__section')
const resultSec = document.querySelector('.result__section')
const logoPicYou =  document.querySelector('.result__choice--you__pic')
const logoPicHouse = document.querySelector('.result__choice--house__pic')
const yourChoice = document.querySelector('.result__choice--you')
const houseChoice = document.querySelector('.result__choice--house')
const decision = document.querySelector('.result__decision')
const mainResult = document.querySelector('.main--result')
const ruleBtn = document.querySelector('.rules--component')
const rulePreview = document.querySelector('.rules__overlay')
const closeBtn = document.querySelector('.close')
const againBtn = document.querySelector('.again')

let houseChoiceNum = 0;
let logoRandom = 0

const again = function () {
    playSec.classList.remove('hidden')
    resultSec.classList.add('hidden')
    houseChoiceNum = Math.trunc(Math.random()*5) + 1
console.log(houseChoiceNum)
if (houseChoiceNum === 1) {
    logoRandom = 'scissor'
} else if (houseChoiceNum === 2) {
    logoRandom = 'paper'
} else if (houseChoiceNum === 3) {
    logoRandom = 'rock'
} else if (houseChoiceNum === 4) {
    logoRandom = 'lizard'
} else if (houseChoiceNum === 5) {
    logoRandom = 'spock' 
}
}
again()

let score = 0
scorePoint.textContent = 0

scissor.addEventListener('click', function () {
    playSec.classList.add('hidden')
    resultSec.classList.remove('hidden')
    yourChoice.classList.add('scissor')
    logoPicYou.src = `images/icon-${1}.svg`;

    setTimeout(function(){    
            if (logoRandom === 'paper') {
        mainResult.textContent = 'win'
        score++
        scorePoint.textContent = score
    } else {
        mainResult.textContent = 'lose'
        score--
        scorePoint.textContent = score
    }
    },2000);
    
    setTimeout(function(){
    houseChoice.classList.add(logoRandom)
    logoPicHouse.src = `images/icon-${houseChoiceNum}.svg`
    logoPicHouse.classList.remove('hidden')
   },1000);

   setTimeout(function(){  
    decision.classList.remove('hidden')
   },1500);

})

paper.addEventListener('click', function () { 
    playSec.classList.add('hidden')
    resultSec.classList.remove('hidden')
    yourChoice.classList.add('paper')
    logoPicYou.src = `images/icon-${2}.svg`

    setTimeout(function(){    
        if (logoRandom === 'rock') {
            mainResult.textContent = 'win'
            score++
            scorePoint.textContent = score
        } else {
            mainResult.textContent = 'lose'
            score--
            scorePoint.textContent = score
        }
    },2000);

    setTimeout(function(){
        houseChoice.classList.add(logoRandom)
        logoPicHouse.src = `images/icon-${houseChoiceNum}.svg`
        logoPicHouse.classList.remove('hidden')
       },1000);

       setTimeout(function(){  
        decision.classList.remove('hidden')
       },1500);
})

rock.addEventListener('click', function () { 
    playSec.classList.add('hidden')
    resultSec.classList.remove('hidden')
    yourChoice.classList.add('rock')
    logoPicYou.src = `images/icon-${3}.svg`

    setTimeout(function(){   
        if (logoRandom === 'lizard') {
            mainResult.textContent = 'win'
            score++
            scorePoint.textContent = score
        } else {
            mainResult.textContent = 'lose'
            score--
            scorePoint.textContent = score
        } 
    },2000);

    setTimeout(function(){
        houseChoice.classList.add(logoRandom)
        logoPicHouse.src = `images/icon-${houseChoiceNum}.svg`
        logoPicHouse.classList.remove('hidden')
       },1000);

       setTimeout(function(){  
        decision.classList.remove('hidden')
       },1500);
})

lizard.addEventListener('click', function () { 
    playSec.classList.add('hidden')
    resultSec.classList.remove('hidden')
    yourChoice.classList.add('lizard')
    logoPicYou.src = `images/icon-${4}.svg`

    setTimeout(function(){    
        if (logoRandom === 'spock') {
            mainResult.textContent = 'win'
            score++
            scorePoint.textContent = score
        } else {
            mainResult.textContent = 'lose'
            score--
            scorePoint.textContent = score
        }
    },2000);

    setTimeout(function(){
        houseChoice.classList.add(logoRandom)
        logoPicHouse.src = `images/icon-${houseChoiceNum}.svg`
        logoPicHouse.classList.remove('hidden')
       },1000);

       setTimeout(function(){  
        decision.classList.remove('hidden')
       },1500);
})

spock.addEventListener('click', function () { 
    playSec.classList.add('hidden')
    resultSec.classList.remove('hidden')
    yourChoice.classList.add('spock')
    logoPicYou.src = `images/icon-${5}.svg`

    setTimeout(function(){
        if (logoRandom === 'scissor') {
            mainResult.textContent = 'win'
            score++
            scorePoint.textContent = score
        } else {
            mainResult.textContent = 'lose'
            score--
            scorePoint.textContent = score
        }    
    },2000);

    setTimeout(function(){
        houseChoice.classList.add(logoRandom)
        logoPicHouse.src = `images/icon-${houseChoiceNum}.svg`
        logoPicHouse.classList.remove('hidden')
       },1000);

       setTimeout(function(){  
        decision.classList.remove('hidden')
       },1500);
})

ruleBtn.addEventListener('click', function () {
    rulePreview.classList.remove('hidden')
})
closeBtn.addEventListener('click', function () {
    rulePreview.classList.add('hidden')
})

againBtn.addEventListener('click',  again)