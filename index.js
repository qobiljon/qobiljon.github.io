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
