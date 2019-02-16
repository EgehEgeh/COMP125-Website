var largeImage = document.getElementById('bigImage');
var thumbs = document.querySelectorAll('#thumbnailsHolder img');
thumbs.forEach(img => img.addEventListener('click', imgClick));

function imgClick (e) {
    bigImage.src = e.target.src;
}

function imageOpen () {
    window.open(largeImage.src, "Food", "height=1500 width=200");
}

function imageClose () {
    expandedImage.Close();
}

largeImage.addEventListener("click", imageOpen, false);