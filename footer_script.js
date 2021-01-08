// Add styling hardcoded
jQuery("head").append('<style type="text/css">@media(max-width:768px){.small--no-padding{padding:0}.small--no-rounding{border-radius:0}.small--no-bottom-margin{margin-bottom:0}}@media(min-width:992px){.from-medium--default-rounding{border-radius:10px}}@media(max-width:991px){.medium--white-background{background-color:#fff}.medium--black-text{color:#000}}.remove-rounding{border-radius:0}.remove-padding{padding:0}.remove-margin{margin:0}.remove-vertical-padding{padding-top:0;padding-bottom:0}</style>');

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
function fullSizeHeaderBanner(styleVariables) {
    let backVar = "#57007F"; // Default
    if(!(styleVariables === undefined)) {
        if(styleVariables.size != 0) {
            let bannerBackgroundOverride = "";
            let temp;
            let doUserOverride = false;
            temp = styleVariables.get("banner-background-color");
            if(!(temp === undefined)) {
                bannerBackgroundOverride += temp;
                doUserOverride = true;
            }
            temp = styleVariables.get("banner-background-image");
            if(!(temp === undefined)) {
                bannerBackgroundOverride += temp;
                doUserOverride = true;
            }
            temp = styleVariables.get("banner-background-position");
            if(!(temp === undefined)) {
                bannerBackgroundOverride += temp;
                doUserOverride = true;
            }
            temp = styleVariables.get("banner-background-size");
            if(!(temp === undefined)) {
                bannerBackgroundOverride += temp;
                doUserOverride = true;
            }
            temp = styleVariables.get("banner-background-repeat");
            if(!(temp === undefined)) {
                bannerBackgroundOverride += temp;
                doUserOverride = true;
            }
            temp = styleVariables.get("banner-background-origin");
            if(!(temp === undefined)) {
                bannerBackgroundOverride += temp;
                doUserOverride = true;
            }
            temp = styleVariables.get("banner-background-clip");
            if(!(temp === undefined)) {
                bannerBackgroundOverride += temp;
                doUserOverride = true;
            }
            temp = styleVariables.get("banner-background-attachment");
            if(!(temp === undefined)) {
                bannerBackgroundOverride += temp;
                doUserOverride = true;
            }
            if(doUserOverride) {
                backVar = temp;
            }
        }
    }
    jQuery("header").ready(function(){
        jQuery("body").prepend('<div id="override-banner" role="banner" style="background:' + backVar + ';"><div class="container"></div></div>');
        jQuery(".navbar.navbar-default").find("img").appendTo("#override-banner > .container");
        jQuery("header").removeAttr("role");
        jQuery(".row.row-with-vspace.site-branding").remove();
        jQuery("header").find(".textwidget.custom-html-widget").addClass("remove-padding remove-margin");
    });
}
function moveFooterFullyDown() {
    jQuery("footer").ready(function(){
        jQuery("footer").appendTo("body");
    });
}
function removeFooterRounding() {
    jQuery("footer").addClass("remove-rounding");
}
function removeBodyOnlyMargin() {
    jQuery("body").addClass("remove-margin");
}
function moveClockIntoPlayer() {
    jQuery("#sidebar-left").find(".PMT_KLOK_widget").prependTo("#sidebar-left > .widget_default_blok_1:eq(0)");
}
function moveChatWidgetIntoPlayer() {
    let chatBlock = jQuery("#sidebar-left > .widget_default_blok_1:eq(1)");
    chatBlock.children().appendTo("#sidebar-left > .widget_default_blok_1:eq(0)");
    chatBlock.remove();
}
function restyleClockResponsive() {
    jQuery("#sidebar-left").find(".PMT_KLOK_widget").first().addClass("medium--white-background medium--black-text");
    jQuery("#sidebar-left").find(".PMT_KLOK_widget").children().first().css("color", "");
}

var latestBody = [removeMobileBodyPadding, removeBodyOnlyMargin];
var latestHeader = [fullSizeHeaderBanner];
var latestContent = [removeMobileContentPadding];
var latestPlayer = [removeMobilePlayerPadding, recenterChatButton, 
    moveClockIntoPlayer, moveChatWidgetIntoPlayer, addPlayerRounding, restyleClockResponsive];
var latestFooter = [removeMobileFooterPadding, removeFooterRounding, moveFooterFullyDown];

//
// tasks: a list of functions to perform
// OPTIONAL | styleVariables: a map {string, string} of a propery to be overridden 
function override(tasks, styleVariables) {
    jQuery(tasks).each(function(key, val){
        val(styleVariables);
    });
}
