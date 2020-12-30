// Add style hardcoded
 $('head').append('<style type="text/css">' +
 '@media(max-width:768px){.mobile-padding-zero {padding: 0;}' +
    '.mobile-add-margin {' +
    'margin-left: 8px;' +
    'margin-right: 8px;' +
    '}' +
    '.mobile-remove-rounding {' +
    'border-top-left-radius: 0px;' +
        'border-top-right-radius: 0px;' +
        'border-bottom-left-radius: 0px;' +
        'border-bottom-right-radius: 0px;' +
        '}' +
 '}' +
 '</style>');

// Start applying new styling
document.getElementsByClassName("container page-container")[0].classList.add("mobile-padding-zero");
let mainNav = document.getElementsByClassName("row main-navigation")[0];
mainNav.classList.add("mobile-padding-zero");
mainNav.firstElementChild.classList.add("mobile-padding-zero");
document.getElementById("content").classList.add("mobile-padding-zero");
document.getElementById("sidebar-left").classList.add("mobile-padding-zero");
document.getElementsByClassName("site-footer")[0].classList.add("mobile-remove-rounding");
