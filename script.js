
function openImage(src) {
    document.getElementById("fullImage").src = src;
    document.getElementById("imageViewer").style.display = "flex";
}

function closeImage() {
    document.getElementById("imageViewer").style.display = "none";
}

function toggleZoom(img) {
    img.classList.toggle("active");
}
