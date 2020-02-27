let modal, modalImg, captionText;

document.addEventListener("DOMContentLoaded", () => {
    modal = document.getElementById("myModal");
    modalImg = document.getElementById("img01");
    captionText = document.getElementById("caption");
});

function copyEmailToClipboard() {
    navigator.clipboard.writeText("kobiljon@nsl.inha.ac.kr").then(function () {
        showToast("Email address has been copied to clipboard successfully!");
    }, function () {
        showToast("Unable to copy email address to your clipboard. :-(");
    });
}

function showToast(message) {
    const toast = document.getElementById("snackbar");
    toast.className = "show";
    toast.innerText = message;
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

function openImageModalView(element) {
    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

function closeImageModalView() {
    modal.style.display = "none";
}