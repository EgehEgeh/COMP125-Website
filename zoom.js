var largeImage = document.getElementById('bigImage');

function imageOpen () {
    var expandedImage = window.open(largeImage.src, "Food", "height=1500 width=200");
}

function imageClose () {
    expandedImage.close();
}

largeImage.addEventListener("click", imageOpen, false);
