// Add styling hardcoded
jQuery("head").append('<style type="text/css">.hamburger-toggler{position:fixed;top:calc(((85vw * (264 / 1500)) - 36px)/ 2);top:-moz-calc(((85vw * (264 / 1500)) - 36px)/ 2);top:-webkit-calc(((85vw * (264 / 1500)) - 36px)/ 2);top:-o-calc(((85vw * (264 / 1500)) - 36px)/ 2);right:calc((15vw - 36px)/ 2);right:-moz-calc((15vw - 36px)/ 2);right:-webkit-calc((15vw - 36px)/ 2);right:-o-calc((15vw - 36px)/ 2);color:#fff;z-index:999;height:36px;width:36px;outline:0;cursor:pointer;display:flex;align-items:center;appearance:none;border:none;background:0 0;padding:0;text-align:unset}@media(max-width:768px){.small--no-padding{padding:0}.small--no-rounding{border-radius:0}.small--no-bottom-margin{margin-bottom:0}.small--no-margin{margin:0}.small--display-block{display:block}}@media(min-width:769px){.from-medium--hidden{display:none}}@media(min-width:992px){.from-medium--default-rounding{border-radius:10px}}@media(max-width:991px){.medium--white-background{background-color:#fff}.medium--black-text{color:#000}}.remove-rounding{border-radius:0}.remove-padding{padding:0}.remove-margin{margin:0}.remove-vertical-padding{padding-top:0;padding-bottom:0}.rotate--half{transform:rotate(180deg)}.header-menu-fix{width:100%}@media(max-width:768px){.sticky-banner{position:fixed;box-shadow:rgba(0,0,0,.5) 0 3px 11px 0;z-index:1000}.header-menu-fix{width:85%}#content{margin-top:-moz-calc((85vw * (264 / 1500)) - 50px);margin-top:-webkit-calc((85vw * (264 / 1500)) - 50px);margin-top:-o-calc((85vw * (264 / 1500)) - 50px);margin-top:calc((85vw * (264 / 1500)) - 50px)}#menu-menu-1{margin:0 8px;font-size:1.4em}#menu-menu-1>li>a{font-weight:700}#navigationMenu{position:fixed;left:-100%;z-index:998;text-decoration:none;overflow:scroll;height:100%;color:#fff;background:#57007f;min-width:max(360px,80vw);min-height:calc(100vh - (85vw * (264 / 1500)));min-height:-moz-calc(100vh - (85vw * (264 / 1500)));min-height:-webkit-calc(100vh - (85vw * (264 / 1500)));min-height:-o-calc(100vh - (85vw * (264 / 1500)));top:calc(85vw * (264 / 1500));top:-moz-calc(85vw * (264 / 1500));top:-webkit-calc(85vw * (264 / 1500));top:-o-calc(85vw * (264 / 1500))}.navigation__menu{padding:24px 16px 8px 16px;display:flex;flex-direction:column;justify-content:center}}@media(min-width:769px){.margin-top-content-fix{margin-top:8px}.dropdown--responsive{min-width:160px;position:absolute;z-index:1000;font-weight:400;line-height:1.42857143;padding:0}li:hover>.dropdown--responsive{display:block}.dropdow__item--responsive{padding-right:5px;padding-left:5px;background-color:#57007f;border-bottom:1px solid #fff}.dropdow__item--responsive:first-child{border-radius:10px 10px 0 0}.dropdow__item--responsive:last-child{border-bottom:none;border-radius:0 0 10px 10px}}.hamburger-toggler span,.hamburger-toggler span::after,.hamburger-toggler span::before{position:absolute;content:"";width:36px;height:4.5px;background:#fafafa;border-radius:20px;transition:.5s cubic-bezier(.77,0,.175,1)}.hamburger-toggler span::before{top:-12px}.hamburger-toggler span::after{top:12px}.hamburger-toggler.active>span{background:0 0}.hamburger-toggler.active>span::after,.hamburger-toggler.active>span::before{background:#fff;top:0}.hamburger-toggler.active>span::before{transform:rotate(-225deg)}.hamburger-toggler.active>span::after{transform:rotate(225deg)}.lock-scroll{overflow:hidden}@keyframes navigationUnfoldShadowAnimation{0%{box-shadow:-25vw 0 300px 0 rgba(0,0,0,.5)}100%{box-shadow:60vw 0 20px 15px rgba(0,0,0,.5)}}@keyframes navigationFoldsShadowAnimation{0%{box-shadow:-25vw 0 300px 0 rgba(0,0,0,.5)}100%{box-shadow:30vw 0 20px 15px rgba(0,0,0,.5)}}.navigation-unfolds{animation-name:navigationUnfoldShadowAnimation;animation-duration:150ms;animation-iteration-count:1;animation-timing-function:linear;animation-fill-mode:forwards}.navigation-folds{animation-name:navigationFoldsShadowAnimation;animation-duration:.3s;animation-iteration-count:1;animation-direction:reverse;animation-timing-function:linear}</style>');

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
function restyleClockResponsive(styleVariables) {
    let restyleClasses = "medium--white-background medium--black-text"; // Default
    let textColor = ""; // Default
    let textSize = "2em"; // Default
    if(!(styleVariables === undefined)) {
        if(styleVariables.size != 0) {
            let temp;
            temp = styleVariables.get("desktop-clock-text-color");
            if(!(temp === undefined)) {
                textColor = temp;
            }
            temp = undefined;
            temp = styleVariables.get("clock-font-size");
            if(!(temp === undefined)) {
                textSize = temp;
            }
            temp = undefined;
            temp = styleVariables.get("clock-restyle-classes");
            if(!(temp === undefined)) {
                restyleClasses = temp;
            }
        }
    }
    jQuery("#sidebar-left").find(".PMT_KLOK_widget").first().addClass(restyleClasses);
    jQuery("#sidebar-left").find(".PMT_KLOK_widget").children().first().css(
        {"color": textColor, "font-size": textSize});
}
function changeChatButtonText(styleVariables) {
    let newText = "Dragon FM Chat"; // Default
    if(!(styleVariables === undefined)) {
        if(styleVariables.size != 0) {
            let temp;
            temp = styleVariables.get("chat-button-text");
            if(!(temp === undefined)) {
                newText = temp;
            }
        }
    }
    let buttonContainer = jQuery(".widget_default_blok_2").find(".widget_button");
    buttonContainer.find("a").first().text(newText);
}
function responsiveDesignMenuOverhaul() {
    jQuery(".navbar-header").remove();
    jQuery("#override-banner").ready(() => {
        jQuery("#override-banner").find("img").attr("style", "height: 100%");
        jQuery("#override-banner").find("img").addClass("header-menu-fix");
        jQuery("#override-banner").addClass("sticky-banner");
        jQuery("#override-banner").children().first().addClass("small--no-padding small--no-margin");
        jQuery("#override-banner").append('<button id="mobileNavToggle" class="hamburger-toggler from-medium--hidden"><span></span></button>');
    });
    jQuery(".navbar.navbar-default").css("margin-bottom", "0px");
    jQuery(".navbar-primary-collapse").ready(() => {
        jQuery(".navbar-primary-collapse").addClass("small--display-block");//override collapse function
    });
    jQuery("#menu-menu-1").ready(() => {
        jQuery("#menu-menu-1").wrap('<div id="navigationMenu"><section class="navigation__menu"></section></div>');
    });
    var menuSelector = undefined;
    // automatic styling through sheet on #navigationmenu
    // CSS feature for menu-menu-1
    // CSS bold font weigth feature of the menu buttons on mobile only
    jQuery("#navigationMenu").ready(() => {
        menuSelector = jQuery("#navigationMenu");
        jQuery("#menu-menu-1").find("*").removeAttr("data-toggle");
        jQuery("#menu-menu-1").find(".menu-item-has-children").each(function(index, element){
            let classList = jQuery(element).attr("class");
            //match the 'menu-item-[number]' as a way to create a selector for the collapsible menus 
            let matchResult = classList.match(/menu-item-[0-9]+/g);
            if(matchResult.length > 0){
                classList = "." + matchResult[0] + " > .collapse";
                jQuery(element).attr("data-target", classList);
                jQuery(element).removeAttr("data-dropdown");
                jQuery(element).attr("data-toggle", "collapse");
                jQuery(element).children("ul").addClass("collapse dropdown--responsive");
                jQuery(element).find("li").addClass("dropdow__item--responsive");
                let displayText = jQuery(element).children("a").text();
                let hyperlink = jQuery(element).children("a").attr("href");
                jQuery(element).children("a").replaceWith('<a><div style="display: inline-block" onclick="location = \'' + hyperlink +'\'">' + displayText + '</div><span style="display: inline-block; margin-top: 8px; float: right; transition: transform .3s ease-out;" class="caret" onclick="jQuery(this).toggleClass(\'rotate--half\')"></span> </a>');
                jQuery(element).children("ul").removeClass("dropdown-menu");
                jQuery(element).find("li").css("display", "block");
            }
        });
        jQuery("#navigationMenu").append('<section class="from-medium--hidden"><div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-end;padding-top:10px"><b>Volg ons</b></div><div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-end;padding-top:10px"><a href="https://www.facebook.com/RadioDragonFM" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:50px;height:50px;padding:2px;margin:5px;color:#56007f;border-radius:50%;background-color:#FFFFFF;"><svg class="niftybutton-facebook" style="display:block;fill:currentColor" data-tag="fac" data-name="Facebook" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"> <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path></svg></a><a href="https://www.instagram.com/RadioDragonFM" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:50px;height:50px;padding:2px;margin:5px;color:#56007f;border-radius:50%;background-color:#FFFFFF;"><svg class="niftybutton-instagram" style="display:block;fill:currentColor" data-tag="ins" data-name="Instagram" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"> <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path> <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path> <circle cx="351.5" cy="160.5" r="21.5"></circle></svg></a><a href="mailto:radio@dragonfm.nl" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:50px;height:50px;padding:2px;margin:5px;color:#56007f;border-radius:50%;background-color:#FFFFFF;"><svg class="niftybutton-email" style="display:block;fill:currentColor" data-donate="true" data-tag="ema" data-name="Email" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"> <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"></path></svg></a><a href="https://www.linkedin.com/company/69363398" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:50px;height:50px;padding:2px;margin:5px;color:#56007f;border-radius:50%;background-color:#FFFFFF;"><svg class="niftybutton-linkedin" style="display:block;fill:currentColor" data-donate="true" data-tag="lin" data-name="LinkedIn" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"> <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path></svg></a><a href="https://www.youtube.com/channel/UCfVi5JAqbYZd2DzhCr5hHyw" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:50px;height:50px;padding:2px;margin:5px;color:#56007f;border-radius:50%;background-color:#FFFFFF;"><svg class="niftybutton-youtube" style="display:block;fill:currentColor" data-donate="true" data-tag="you" data-name="YouTube" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"> <path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"></path></svg></a></div></section>');
    });
    var isMenuOpen = false;
    jQuery(".hamburger-toggle").ready(() => {
        jQuery(".hamburger-toggler").click(function() {
            jQuery(this).toggleClass("active");
            
            if(isMenuOpen){
                let menuWidth = "-" + menuSelector.outerWidth() + "px";
                menuSelector.animate({
                    left: menuWidth
                },"fast");
                menuSelector.removeClass("navigation-unfolds");
                menuSelector.addClass("navigation-folds");
                isMenuOpen = false;
            } 
            else {
                menuSelector.animate({
                    left: "0px"
                },"fast");
                menuSelector.removeClass("navigation-folds");
                menuSelector.addClass("navigation-unfolds");
                isMenuOpen = true;
            }
            jQuery("body").toggleClass("lock-scroll");
        });
    });
}
function removeResponsiveMenuSelect(){
    jQuery(".responsiveMenuSelect").remove();
}
function removeResponsiveSelectClass() {
    jQuery(".responsiveSelectFullMenu").removeClass("responsiveSelectFullMenu");
}
function fixTopMargin(){
    jQuery("#content").addClass("margin-top-content-fix");
}
function setViewToPageTop(){
    window.scrollTo(0, 0);
}

var latestBody = [removeMobileBodyPadding, removeBodyOnlyMargin];
var latestHeader = [fullSizeHeaderBanner, setViewToPageTop, responsiveDesignMenuOverhaul];
var latestContent = [removeResponsiveMenuSelect, fixTopMargin, removeMobileContentPadding, removeResponsiveSelectClass];
var latestPlayer = [removeMobilePlayerPadding, recenterChatButton, moveClockIntoPlayer, 
    moveChatWidgetIntoPlayer, addPlayerRounding, restyleClockResponsive, changeChatButtonText];
var latestFooter = [removeMobileFooterPadding, removeFooterRounding, moveFooterFullyDown];

//
// tasks: a list of functions to perform
// OPTIONAL | styleVariables: a map {string, string} of a propery to be overridden 
function override(tasks, styleVariables) {
    jQuery(tasks).each(function(key, val){
        val(styleVariables);
    });
}
