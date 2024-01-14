$(document).ready(function () {
  // Set up UI event handlers
  $('#btn_skype').on('click', btnSkypeClick);
  $('#btn_mobile_navbar').on('click', btnMobileNavbarClick);
});

function btnSkypeClick() {
  var skypeId = $('#btn_skype').prop('title');
  navigator.clipboard.writeText(skypeId).then(function () {
    alert(`Skype ID "${skypeId}" copied to your clipboard!`);
  }, function () {
    alert(`Failed to copy Skype ID "${skypeId}" to your clipboard!`);
  });
}

function btnMobileNavbarClick() {
  // Toggle the mobile navbar
  if ($('#div_mobile_navbar').hasClass('hidden')) {
    $('#div_mobile_navbar').removeClass('hidden');
  } else {
    $('#div_mobile_navbar').addClass('hidden');
  }
}