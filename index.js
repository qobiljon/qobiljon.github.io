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

    // Show the mobile navbar
    $('#div_mobile_navbar').removeClass('hidden');

    // Put 'X' on the button
    $('#btn_mobile_navbar svg#svg_collapsed_state').addClass('hidden');
    $('#btn_mobile_navbar svg#svg_expanded_state').removeClass('hidden');

  } else {

    // Hide the mobile navbar
    $('#div_mobile_navbar').addClass('hidden');

    // Put 'hamburger' on the button
    $('#btn_mobile_navbar svg#svg_collapsed_state').removeClass('hidden');
    $('#btn_mobile_navbar svg#svg_expanded_state').addClass('hidden');

  }
}