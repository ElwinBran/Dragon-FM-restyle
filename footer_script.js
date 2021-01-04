// Add styling hardcoded
jQuery("head").append('<style type="text/css">@media(max-width:768px){.small--no-padding{padding:0}.small--no-rounding{border-radius:0}.small--no-bottom-margin{margin-bottom:0}}@media(min-width:992px){.from-medium--default-rounding{border-radius:10px}}.remove-vertical-padding{padding-top:0;padding-bottom:0}</style>');

function recenterChatButton(styleVariables) {
    //here should be code to handle extra overrides. Mappings must be exported in the API.
    let buttonContainer = jQuery(".widget_default_blok_2").find(".widget_button");
    buttonContainer.css("background-size", "cover");
    buttonContainer.find(".widget_button_tekst").css("width", "288px");
}
function addPlayerRounding(styleVariables) {
    jQuery("#sidebar-left").children(".widget_default_blok_1").addClass("from-medium--default-rounding");
}
function removeMobileBodyPadding() {
    jQuery("body").addClass("small--no-bottom-margin");
}
function removeMobileContentPadding() {
    jQuery(".container.page-container").first().addClass("small--no-padding");
    jQuery("#content").addClass("small--no-padding");
}
function removeMobileHeaderPadding() {
    let mainNav = jQuery(".row.main-navigation").first();
    mainNav.addClass("small--no-padding");
    mainNav.children().first().addClass("small--no-padding");
}
function removeMobilePlayerPadding() {
    jQuery("#sidebar-left").addClass("small--no-padding");
}
function removeMobileFooterPadding() {
    jQuery("body").ready(function() {
        jQuery(".footer_compleet_onder").addClass("small--no-bottom-margin");
    });
    jQuery("#footer-row").ready(function() {
        jQuery("#footer-row").find("br").remove();
        jQuery("#footer-row").find(".widget_header_met_opmaak_content_1").eq(1).addClass("remove-vertical-padding");
    });
}
function removeMobileFooterRounding() {
    jQuery(".site-footer").addClass("small--no-rounding");
}

var latestBody = [removeMobileBodyPadding];
var latestHeader = [removeMobileHeaderPadding];
var latestContent = [removeMobileContentPadding];
var latestPlayer = [removeMobilePlayerPadding, recenterChatButton, addPlayerRounding];
var latestFooter = [removeMobileFooterPadding, removeMobileFooterRounding];

//
// tasks: a list of functions to perform
// OPTIONAL | styleVariables: a map {string, string} of a propery to be overridden 
function override(tasks, styleVariables) {
    jQuery(tasks).each(function(key, val){
        val(styleVariables);
    });
}
