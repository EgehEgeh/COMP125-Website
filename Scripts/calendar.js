var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"];

var customers = ["Jim Bob", "Marissa Jones", "Guy Vazquez", "Toni Miller",
    "Ron Lee", "A Robot"];

var inOrOut = ["Eat-in", "Eat-in", "Eat-in", "Eat-in", "Take out", "Take out",
    "Eat-in", "Eat-in", "Take out", "Take out", "Eat-in", "Take out",
    "Take out", "Eat-in", "Eat-in", "Take out", "Take out", "Take out", "Take out",
    "Take out", "Eat-in", "Take out", "Eat-in", "Take out", "Eat-in",
    "Eat-in", "Eat-in", "Eat-in", "Take out", "Eat-in"];

var food = ["Hamburger", "Chicken burger", "Veggie burger", "Fries", "Coffee", "Tea", "Soda" ]

function addColumnHeaders () {
    var i = 0;
    while (i < 7) {
        document.getElementsByTagName("th")[i].innerHTML
        = daysOfWeek[i];
        i++;
    }
}

function calendarPopulator() {
    var i = 0;
    while (i < 30) {
        document.getElementsByClassName("customer")[i].innerHTML 
        = customers[Math.floor(Math.random()*customers.length)];
        document.getElementsByClassName("item")[i].innerHTML 
        = food[Math.floor(Math.random()*food.length)];
        document.getElementsByClassName("eatWhere")[i].innerHTML 
        = inOrOut[Math.floor(Math.random()*inOrOut.length)];
        i++;
    }
}

window.addEventListener ("load", addColumnHeaders, false);
window.addEventListener ("load", calendarPopulator, false);