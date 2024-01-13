$(document).ready(function () {
  // Set up Google Analytics
  setUpGA4();
});

function setUpGA4() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'UA-159388383-1');
  var clicky_site_ids = clicky_site_ids || [];
  clicky_site_ids.push(101239814);
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function copyEmailToClipboard() {
  navigator.clipboard.writeText("kobiljon@nsl.inha.ac.kr").then(function () {
    showToast("Email address has been copied to clipboard successfully!");
  }, function () {
    showToast("Unable to copy email address to your clipboard. :-(");
  });
}

function copySkypeIdToClipboard() {
  navigator.clipboard.writeText("live:qobiljon.toshnazarov_1").then(function () {
    showToast("Skype ID has been copied to clipboard successfully!");
  }, function () {
    showToast("Unable to copy Skype ID to your clipboard. :-(");
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