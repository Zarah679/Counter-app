
let count = 0;

const counter = document.getElementById("counter")
const decrementBtn = document.getElementById("decrementBtn")
const incrementBtn = document.getElementById("incrementBtn")
const resetBtn = document.getElementById("reset")

//Event: click to decrement
decrementBtn.addEventListener('click', () => {
    count--;
    counter.textContent = count;

    if(count <= 9) {
        counter.style.color = "black"
    }
    else{
        counter.style.color = "red"
    }
})

//Event: click to increment
incrementBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;

    if(count >= 10) {
        counter.style.color = "red"
    }
    else{
        counter.style.color ="black"
    }
})

resetBtn.addEventListener( 'click', () => {
    count = 0 //reset counter to 0
    counter.textContent = count
    counter.style.color = "black"
}) 

