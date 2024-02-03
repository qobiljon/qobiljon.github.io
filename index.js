$(document).ready(function () {
    // Set up UI event handlers
    $('#btn_skype').on('click', btnSkypeClick);
    $('#btn_mobile_navbar').on('click', btnMobileNavbarClick);
    $('#btn_dark_mode').on('click', btnDarkModeClick);

    // Make root node `dark` same as system dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    }
});

function btnSkypeClick() {
    const skypeId = $('#btn_skype').prop('title');
    navigator.clipboard.writeText(skypeId).then(function () {
        alert(`Skype ID "${skypeId}" copied to your clipboard!`);
    }, function () {
        alert(`Failed to copy Skype ID "${skypeId}" to your clipboard!`);
    });
}

function btnMobileNavbarClick() {
    // Get the mobile navbar element (div)
    const divMobileNavbar = $('#div_mobile_navbar');

    // Toggle the mobile navbar visibility
    if (divMobileNavbar.hasClass('hidden')) {
        // Show the mobile navbar
        divMobileNavbar.removeClass('hidden');
        // Put 'X' icon on the button
        $('#btn_mobile_navbar svg#svg_collapsed_state').addClass('hidden');
        $('#btn_mobile_navbar svg#svg_expanded_state').removeClass('hidden');
    } else {
        // Hide the mobile navbar
        divMobileNavbar.addClass('hidden');
        // Put 'hamburger' icon on the button
        $('#btn_mobile_navbar svg#svg_collapsed_state').removeClass('hidden');
        $('#btn_mobile_navbar svg#svg_expanded_state').addClass('hidden');
    }
}

function btnDarkModeClick() {
    // Switch to manual dark mode (not system dark mode)
    tailwind.config = {
        darkMode: 'class',
    }

    // Toggle dark mode
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
}