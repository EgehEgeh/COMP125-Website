bigImage = document.getElementById('bigImage');
const thumbs = document.querySelectorAll('#thumbnailsHolder img');
thumbs.forEach(img => img.addEventListener('click', imgClick));

function imgClick (e) {
    bigImage.src = e.target.src;
}