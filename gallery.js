var bigImage = document.getElementById("bigImageHolder");
var thumbnailsHolder = document.getElementById("thumbnailsHolder");

function imgFunc() {
    thumbnailsHolder.addEventListener("click", function (event) {
        if (event.target.tagName == "IMG") {
            bigImage.src = event.target.src;
        }
    }, false);
}

window.addEventListener("load", imgFunc, false);