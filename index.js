// Code your solutions in this file
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}

const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    let i = 0
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        i++
    }
    return gifts
}

wrapGifts(gifts)


function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")


function countDown(number) {
    let countStart = number
    while (countStart >= 0)
    console.log(countStart--)

    return number
}

countDown(10)


