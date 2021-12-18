document.addEventListener('DOMContentLoaded', ()=>{
    const cardArray = [{
        name:'pic1',
        img:'images/pic1.png'
    },
    {
        name:'pic1',
        img:'images/pic1.png'
    },
    {
        name:'pic2',
        img:'images/pic2.png'
    },
    {
        name:'pic2',
        img:'images/pic2.png'
    },
    {
        name:'pic3',
        img:'images/pic3.png'
    },
    {
        name:'pic3',
        img:'images/pic3.png'
    },
    {
        name:'pic4',
        img:'images/pic4.png'
    },
    {
        name:'pic4',
        img:'images/pic4.png'
    },
    {
        name:'pic5',
        img:'images/pic5.png'
    },
    {
        name:'pic5',
        img:'images/pic5.png'
    },
    {
        name:'pic6',
        img:'images/pic6.png'
    },
    {
        name:'pic6',
        img:'images/pic6.png'
    }
];

cardArray.sort(()=>0.5-Math.random())
console.log(cardArray)
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChoosen =[]
let cardsChoosenId = []
const cardsWon =[]

//create your board
function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src','images/pic7.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
//check for matches
function checkForMatch(){
let cards = document.querySelectorAll('img')
const optionOneId = cardsChoosenId[0]
const optionTwoId = cardsChoosenId[1]

if (cardsChoosen[0] === cardsChoosen[1]) {
    alert('you found a match')
cards[optionOneId].setAttribute('src','images/white.png')
cards[optionTwoId].setAttribute('src','images/white.png')
    cardsWon.push(cardsChoosen)
}
else{
   cards[optionOneId].setAttribute('src', 'images/pic7.png')
   cards[optionTwoId].setAttribute('src', 'images/pic7.png')
   alert('sorry try again')
}
console.log(cardsChoosen)
cardsChoosen = []
cardsChoosenId = []

resultDisplay.textContent = cardsWon.length
console.log(cardArray.length/2)
if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'congratulation! you found them all'
}
}

//flip your card

function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChoosen.push(cardArray[cardId].name)
    cardsChoosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChoosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}
createBoard()
})