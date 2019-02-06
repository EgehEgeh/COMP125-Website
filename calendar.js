var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"];

var customers = ["Customer 1", "Customer 2", "Customer 3", "Customer 4",
    "Customer 5", "Customer 6", "Customer 7"];

var inOrOut = ["Eat-in", "Eat-in", "Eat-in", "Eat-in", "Take out", "Take out",
    "Eat-in", "Eat-in", "Take out", "Take out", "Eat-in", "Take out",
    "Take out", "Eat-in", "Eat-in", "Take out", "Take out", "Take out", "Take out",
    "Take out", "Eat-in", "Take out", "Eat-in", "Take out", "Eat-in",
    "Eat-in", "Eat-in", "Eat-in", "Take out", "Eat-in"];

var food = ["Spaghetti", "Hamburger", "Fried chicken", ]

function addColumnHeaders () {
    var i = 0;
    while (i < 7) {
        document.getElementsByTagName("th")[i].innerHTML
        = daysOfWeek[i];
        i++;
    }
}

function randomCustomer() {
    var i = 0;
    while (i < 30) {
        document.getElementsByTagName("p")[i].innerHTML 
        = customers[Math.floor(Math.random()*customers.length)];
        document.getElementsByTagName("p")[i].innerHTML 
        = inOrOut[Math.floor(Math.random()*inOrOut.length)];
        i++;
    }
}

function randomInOrOut() {
    return inOrOut[Math.floor(Math.random()*inOrOut.length)];
}

function randomFood() {
    return food[Math.floor(Math.random()*food.length)];
}

window.addEventListener ("load", addColumnHeaders, false);
window.addEventListener ("load", randomCustomer, false);