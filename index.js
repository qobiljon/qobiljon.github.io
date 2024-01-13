// Initialization function
$(document).ready(function () {
  // Set up Google Analytics
  initGoogleAnalytics();

  // Set up UI event handlers
  $('#navbar .hamburger').on('click', btnNavbarControlClick);
  $('#btnSkype').on('click', btnSkypeClick);
});

// Function that sets up Google Analytics
function initGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'UA-159388383-1');
  var clicky_site_ids = clicky_site_ids || [];
  clicky_site_ids.push(101239814);
}

// UI event handlers, e.g., button clicks
function btnNavbarControlClick() {
  if ($('#navbar').hasClass('expanded')) {
    $('#navbar').removeClass('expanded');
  } else {
    $('#navbar').addClass('expanded');
  }
}

function btnSkypeClick() {
  var skypeId = $('#btnSkype').prop('title');
  navigator.clipboard.writeText(skypeId).then(function () {
    showToast(`Skype ID "${skypeId}" copied to your clipboard!`);
  }, function () {
    showToast(`Failed to copy Skype ID "${skypeId}" to your clipboard!`);
  });
}

// Other utility functions
function showToast(message) {
  $('#snackbarSpan').text(message);
  $('#snackbarDiv').css('visibility', 'visible');
  setTimeout(function () {
    $('#snackbarDiv').css('visibility', 'hidden');
  }, 5000);
}