function calcTotal() {
    var total = 0;
    var tax = 1.13;
    var items = document.getElementsByTagName("input");
    for (var i = 0; i < 8; i++) {
        if (items[i].checked) {
            total += (items[i].value * tax);
        }
    }
    document.getElementById("total").innerHTML = "Your total is $" + total;
}

var submit = document.getElementById("itemSubmit");
if (submit.addEventListener) {
    submit.addEventListener("click", calcTotal, false);
} else if (submit.attachEvent) {
        submit.attachEvent("onclick", calcTotal); 
}