function btnSkypeClick() {
  var skypeId = $('#btnSkype').prop('title');
  navigator.clipboard.writeText(skypeId).then(function () {
    showToast(`Skype ID "${skypeId}" copied to your clipboard!`);
  }, function () {
    showToast(`Failed to copy Skype ID "${skypeId}" to your clipboard!`);
  });
}

function toggleNavbarMobile() {
  // TODO: implement this
}