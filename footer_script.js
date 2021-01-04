// Add style hardcoded
 $('head').append('<style type="text/css">@media(max-width:768px){.small--no-padding{padding:0}.small--no-rounding{border-radius:0}.small--no-bottom-margin{margin-bottom:0}}@media(min-width:992px){.from-medium--default-rounding{border-radius:10px}}.remove-vertical-padding{padding-top:0;padding-bottom:0}</style>');

// Start applying new styling
$(".container.page-container").addClass("small--no-padding");
let mainNav = $(".row.main-navigation").first();
mainNav.classList.add("small--no-padding");
mainNav.firstElementChild.classList.add("small--no-padding");
$("#content").addClass("small--no-padding");
$("#sidebar-left").addClass("small--no-padding");
$(".site-footer").addClass("small--no-rounding");

let buttonContainer = $(".widget_default_blok_2").find(".widget_button");
buttonContainer.css("background-size", "cover");
buttonContainer.find(".widget_button_tekst").css("width", "288px");

$("#footer-row").ready(function() {
	$("#footer-row").find("br").remove();
    $("#footer-row").find(".widget_header_met_opmaak_content_1").eq(1).addClass("remove-vertical-padding");
});

$("body").ready(function() {
	$("body").addClass("small--no-bottom-margin");
    $(".footer_compleet_onder").addClass("small--no-bottom-margin");
});

$("#sidebar-left").children(".widget_default_blok_1").addClass("from-medium--default-rounding");
