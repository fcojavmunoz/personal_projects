let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
// let newBtn = document.getElementById("new-btn")
let routeEl = document.getElementById("route-el")
let count = 0
let travellers = [];

function increment() {
    count += 1
    countEl.textContent = count
}
function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    travellers.push(count);
    console.log(travellers);
    saveEl.textContent += countStr
    count = 0;
    countEl.textContent = count;
}

function route(){
    routeEl.textContent += travellers + "||";
    
    
}


