// Add style hardcoded
 $('head').append('<style type="text/css">@media(max-width:768px){.mobile-padding-zero{padding:0}.mobile-add-margin{margin-left:8px;margin-right:8px}.mobile-remove-rounding{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}}.vertical-padding--none{padding-top:0;padding-bottom:0}</style>');

// Start applying new styling
document.getElementsByClassName("container page-container")[0].classList.add("mobile-padding-zero");
let mainNav = document.getElementsByClassName("row main-navigation")[0];
mainNav.classList.add("mobile-padding-zero");
mainNav.firstElementChild.classList.add("mobile-padding-zero");
document.getElementById("content").classList.add("mobile-padding-zero");
document.getElementById("sidebar-left").classList.add("mobile-padding-zero");
document.getElementsByClassName("site-footer")[0].classList.add("mobile-remove-rounding");

let buttonContainer = $(".widget_default_blok_2").find(".widget_button");
buttonContainer.css("background-size", "cover");
buttonContainer.find(".widget_button_tekst").css("width", "288px");

$("#footer-row").ready(function() {
	$("#footer-row").find("br").remove();
    $("#footer-row").find(".widget_header_met_opmaak_content_1").eq(1).addClass("vertical-padding--none");
});
