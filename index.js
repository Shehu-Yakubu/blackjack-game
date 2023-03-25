// Object declaration and initiation
let player = {
    name: "Shehu",
    chips: 150
}

// Variables declaration and initiation
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// DOM assessment
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// Calling and using an object
playerEl.textContent = player.name + ": $" + player.chips

// Functions
function getRandomCard() {
    // Math object and its methods
    let randomNumber = Math.floor( Math.random()*13 ) + 1

    // If conditions
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    // Working with arrays
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    // Loop conditions
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)

        // Calling a function inside another function
        renderGame()        
    }
}
