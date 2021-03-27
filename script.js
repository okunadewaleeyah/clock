
window.addEventListener('load', () => {
    // use setInterval to call a certain function every second
    setInterval(setClock, 1000) //every 1000 milisecond, setClock is called

const hourHand = document.querySelector('[data-hour-hand')
const minuteHand = document.querySelector('[data-minute-hand')
const secondHand = document.querySelector('[data-second-hand')


// defining setClock function
function setClock() {
    const currentDate = new Date() //to get the current date
    const secondsRatio = currentDate.getSeconds() / 60   // divided by 60 because there are 60 seconds in a minute
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60  //  secondsRatio is added since I dont want the nimute hand to jump by entire minutes
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12   // divided by 12 cos there are 12 hours on the clock
    
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}

// set the values for rotation of the diffrent hands

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360) // *360 to get the element to move from 0deg-360deg
}
setClock()
})
