var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"];

var customers = ["Customer ", "Customer ", "Customer ", "Customer ",
    "Customer ", "Customer ", "Customer ",
    "Customer ", "Customer ", "Customer ",
    "Customer ", "Customer ", "Customer ",
    "Customer ", "Customer ", "Customer ",
    "Customer ", "Customer ", "Customer ",
    "Customer ", "Customer ", "Customer ",
    "Customer ", "Customer ", "Customer ", "Customer ",
    "Customer ", "Customer ", "Customer ", "Customer ",];

var inOrOut = ["Eat-in", "Eat-in", "Eat-in", "Eat-in", "Take out", "Take out",
    "Eat-in", "Eat-in", "Take out", "Take out", "Eat-in", "Take out",
    "Take out", "Eat-in", "Eat-in", "Take out", "Take out", "Take out", "Take out",
    "Take out", "Eat-in", "Take out", "Eat-in", "Take out", "Eat-in",
    "Eat-in", "Eat-in", "Eat-in", "Take out", "Eat-in"];

function addColumnHeaders () {
    var i = 0;
    while (i < 7) {
        document.getElementsByTagName("th")[i].innerHTML
        = daysOfWeek[i];
        i++;
    }
}

window.addEventListener ("load", addColumnHeaders, false);