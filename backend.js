/*
  Contains all code that processes the settings
  and changes the website accordingly. 
  Some features and structures are hardcoded here.
*/
/*==== feature functions ====*/
function recenterChatButton() {
    let buttonContainer = jQuery(".widget_default_blok_2").find(".widget_button");
    buttonContainer.css("background-size", "cover");
    buttonContainer.find(".widget_button_tekst").css("width", "288px");
}
function addPlayerRounding() {
    jQuery("#sidebar-left").children(".widget_default_blok_1").
        addClass("from-medium--default-rounding");
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
        jQuery("#footer-row").find(".widget_header_met_opmaak_content_1").eq(1).
            addClass("remove-vertical-padding");
    });
}
function removeMobileFooterRounding() {
    jQuery(".site-footer").addClass("small--no-rounding");
}
function fullSizeHeaderBanner() {
    jQuery("header").ready(function(){
        let bannerColor = overSettings.mainColor;
        if (overSettings.bannerBackgroundColor !== null 
            && overSettings.bannerBackgroundColor !== ''){
            bannerColor = overSettings.bannerBackgroundColor;
        }
        let bannerHtml;
        if (screen.width > 768 
            && overSettings.bannerSecondHalf !== null
            && overSettings.bannerSecondHalf !== '' )
        {
            bannerHtml = dualColourBanner(bannerColor);
        }
        else
        {
            bannerHtml = regularBanner(bannerColor);
        }
        jQuery("body").prepend(bannerHtml);
        //shoehorned hook for dynamic banner
        let imgElement = jQuery(".navbar.navbar-default").find("img");
        imgElement.css({visibility: "hidden", opacity: 0});
        defaultBanner = imgElement.attr("src");
        imgElement.appendTo("#override-banner > .container");
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
    jQuery("#sidebar-left").find(".PMT_KLOK_widget").first().addClass(overSettings.clockClasses);
    jQuery("#sidebar-left").find(".PMT_KLOK_widget").children().first().css(
        {"color": overSettings.clockTextColor, "font-size": overSettings.clockFontSize});
}
function changeChatButtonText() {
    let buttonContainer = jQuery(".widget_default_blok_2").find(".widget_button");
    buttonContainer.find("a").first().text(overSettings.chatButtonText);
}
function changeChatLabelText() {
    jQuery("#sidebar-left > .widget_default_blok_1 > .uppercase").eq(1).
        text(overSettings.chatPromptLabelText);
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
        if (screen.width <= 768){
            let menuColor = overSettings.mainColor;
            if(overSettings.mobileMenuColor !== null && overSettings.mobileMenuColor !== '') {
                menuColor = overSettings.mobileMenuColor;
            }
            jQuery("#menu-menu-1").wrap(
                `<div id="navigationMenu" style="background-color:${menuColor};">
                    <section class="navigation__menu"></section>
                </div>`);
        }
        else {
            jQuery("#menu-menu-1").wrap(
                `<div id="navigationMenu">
                    <section class="navigation__menu"></section>
                </div>`);
        }
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
                let dropColor = overSettings.mainColor;
                if(overSettings.dropdownColor !== null && overSettings.dropdownColor !== '') {
                    dropColor = overSettings.dropdownColor;
                }
                jQuery(element).find("li").addClass("dropdown__item--responsive")
                .css("background-color", dropColor);
                let displayText = jQuery(element).children("a").text();
                let hyperlink = jQuery(element).children("a").attr("href");
                jQuery(element).children("a").replaceWith(`<a><div style="display:inline-block" 
                onclick="location = '${hyperlink}'"> ${displayText}</div>
                    <span style="display: inline-block; margin-top: ${overSettings.mmFoldMarTop}; float: right; transition: ${overSettings.mmFoldTrans};" class="caret" onclick="jQuery(this).toggleClass('rotate--half')"></span> </a>`);
                jQuery(element).children("ul").removeClass("dropdown-menu");
                jQuery(element).find("li").css("display", "block");
            }
        });
        if (screen.width <= 768){
            //ensure active highlight
            jQuery("#menu-menu-1").find(".active > a").addClass("pop");
            jQuery("#menu-menu-1").find(".open>a").addClass("pop");
        }
        let menuFooterHtml = '<section class="from-medium--hidden"><div style="padding-top:10px" class="center-overflow"><b>Volg ons</b></div><div id="mobileMenuSocialIconHolder"class="center-overflow"></div></section>';
        jQuery("#navigationMenu").append(menuFooterHtml);
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
function fixExternalContent(){
    jQuery("#content").ready(function() {
        jQuery("#content").find("section[data-kc-fullwidth='row']").css({
            "left": "unset",
            "padding-left": "unset",
            "padding-right": "unset"
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
function removeRegularMobileChat() {
    jQuery("#sidebar-left > .widget_default_blok_1 > .uppercase").last().addClass("small--hidden");
    jQuery("#sidebar-left > .widget_default_blok_1 > .widget_default_blok_2").addClass("small--hidden");
}
function addFloatingChatButton() {
    let fabCustom = "";
    if (overSettings.fabBackground.length > 0)
    {
        fabCustom = 'style="color:' + overSettings.fabBackground + ';" ';
    }
    let symbolColor = "currentColor";
    if (overSettings.fabChatSymbolColor.length > 0)
    {
        symbolColor = overSettings.fabChatSymbolColor;
    }
    else
    {
        symbolColor = overSettings.socialSymbolsColor;
    }
    jQuery("footer.site-footer").before(`<a id="floatingChatButton" ${fabCustom}
                class="${overSettings.fabClasses}" 
                href="/chatroom" onclick="window.open(this.href, this.target,
                     \'toolbar=0,location=0,menubar=0,scrollbars=0,resizable=0\'); return false;">
                     <svg style="fill:${symbolColor}"class="social-bar__symbol" 
                     preserveAspectRatio="xMidYMid meet" x="20px" y="25%" width="35px" height="22px" version="2.0">
            <use href="#speechbubble-symbol"/>
        </svg></a>`);
}
function removeAlternateSourcesMobile() {
    jQuery(".player_links").addClass("small--hidden");
}

// Required global variables to overwrite old player system.
var isNewSongPlaying = false;
var mobileFooterPlayerBreakpoint = 769;//TODO


function replaceIFrameMarquee() {
    jQuery(".now_playing_scroler").replaceWith(
    `<div id="songContainerTop" class="now_playing_scroler player-widget__display">
    <span id="songDisplayTop" 
    style="font-family:${overSettings.songInfoFontFamily};
    font-size:${overSettings.songInfoFontSize};
    color:${overSettings.songInfoTextColor} !important;
    font-style:${overSettings.songInfoFontStyle};">Ophalen...</span></div>`);
}
function reinstateSongInformationUpdate(){
    syncSongInformation();
    let loopTime = Number(overSettings.songInfoRefresh) * 1000;
    window.setInterval(syncSongInformation, loopTime);
}
function animateSongInformationSimple(){
    let bootstrapProces;
    jQuery("#songDisplayTop").css("left", "100%");
    //check every 1 second or so
    bootstrapProces = window.setInterval(function checkInitialLoad(){
        if(isNewSongPlaying) {
            window.clearInterval(bootstrapProces);
            marqueeReplacementAnimationLoop()
        }
    }, 1000);  
}

function removeFormMargin() {
    jQuery(".form-group").addClass("input-container clearfix")
                         .removeClass("form-group");
}

function ensureNewsArticleOverride() {
    if (jQuery("body").hasClass("post-template-default"))
    {
        override(contentFeatures); //variable declared later in features.js
        override(articleFeatures); //idem, these are specific to articles
    }
}

function setUpDynamicBanner() {
    if (overSettings.bannerSwitching) {
        fillBannerLookup();
        jQuery("#sidebar-left").ready(function(){
            setTimeout(updateBanner, 1500);
        });
    }
}

function mirrorSocialMediaLinksToMobile() {
    jQuery("footer").ready(function(){
        jQuery("#mobileMenuSocialIconHolder").append(jQuery(".social-bar").children().clone());
        jQuery("#mobileMenuSocialIconHolder").children().css("background-color", "transparent");
    });
}

function changePlayerPopup(){
    let extPlayer = jQuery(".player_links").children().last();
    extPlayer.attr("href", "https://stream-10.pmteurope.com:2000/public/dragonfm");
    extPlayer.children("img").attr("title", "Open speler in nieuw tabblad");
}

function removeITunes(){
    jQuery(".player_links").children().eq(2).remove();
}

/*==== generic setting features ====*/
//NOTE: these can later be used as 'bootstrappers' to reduce overhead and merge functions
function bodySetup(){
    jQuery("body").css("color", overSettings.textColor);
}

function contentSetup(){
    //when content (article content) ready:
    if (overSettings.kcTextColor =! "black"){
        jQuery("#main").ready(function(){
            jQuery("#main").find(".kc_text_block > p").css("color", overSettings.kcTextColor);
        });
    }
}

function footerSetup(){
    jQuery("#footer-row").ready(function() {
        let footerCol = overSettings.mainColor;
        if (overSettings.footerColor !== null && overSettings.footerColor !== ''){
            footerCol = overSettings.footerColor;
        }
        jQuery("#footer-row").attr('style', 'background-color:' + footerCol +
             '!important');
        //jQuery("#footer-row").css("background-color", )
    });
}

/*==== helper functions ====*/
// tasks: a list of functions to perform
function override(tasks) {
    jQuery(tasks).each(function(key, val){
        val();
    });
}
// Required global variables for the new player display.
var artist;
var song;
var seperatorLength = overSettings.songArtistSeparation.length;
function syncSongInformation() {
    fetchSongInformation(function(text) {
        //executed on another time.
        updateSongInformation(extractSongDetailInformation(text));
        isNewSongPlaying = true;
    });
}
// onCompletion: a function that executes on completion of the fetch and passes the result text into it
function fetchSongInformation(onCompletion) {
    fetch(overSettings.songInfoDownload).then(
        function(response) {
            response.text().then(
                function(text) {
                    onCompletion(text);
                });
        });
}
function extractSongDetailInformation(html){
    let songDisplayStartIndex = html.lastIndexOf('">') + 2;
    let alternateIndex = html.indexOf("'>") + 2;
    let songDisplayEndIndex = html.indexOf("</marq");
    let information = html.substring(alternateIndex, songDisplayEndIndex + 1);
    return information;
}
// Sets song information global variables based on song input
// songInformation: a string containing both artist and song name seperated with a special string
// returns: boolean whether the song has changed (true for change, false otherwise)
function updateSongInformation(songInformation){
    let result = false;
    let middle = songInformation.indexOf(overSettings.songArtistSeparation);
    let songIndex = middle + seperatorLength;
    let tempString = songInformation.substring(0, middle);
    if(tempString === artist){
        let tempString2 = 
          songInformation.substring(songIndex, songInformation.length - 1);
        if(tempString !== song){
            song = tempString2;
        }
        //here escapes when the song hasnt changed
    }
    else{
        artist = tempString;
        tempString = 
          songInformation.substring(songIndex, songInformation.length - 1);
        song = tempString;
    }
    return result;
}

var topTextPixelLength;
var topScrollDuration;
function marqueeReplacementAnimationLoop(){
    jQuery("#songDisplayTop").css("left", "100%");
    if(isNewSongPlaying) {
        jQuery("#songDisplayTop").text(artist + overSettings.songArtistSeparation + song);
        let length = jQuery("#songDisplayTop").width();
        topTextPixelLength = "-" + length + "px";
        topScrollDuration = ((jQuery("#songContainerTop").innerWidth() + length) / 5 ) * 85;
        isNewSongPlaying = false;
    }
    jQuery("#songDisplayTop").animate({left: topTextPixelLength
    }, {
        duration: topScrollDuration, 
        easing: 'linear', 
        complete: marqueeReplacementAnimationLoop
    });
}

var defaultBanner; //load from start html, set in banner override
var bannerLookup;
//showtime-now-playing .children()[0]. text();
//get text, remove until second colon + 1 (space) 
//var position = data.indexOf(":", data.indexOf(":") + 1) + 2;
//if there is no colon at all, simply skip
//substring(position, length)

function fillBannerLookup(){
    bannerLookup = new Array(overSettings.bannerLinks.length);
    jQuery(overSettings.bannerLinks).each(function(index, showEntry){
        let showName = showEntry[0];
        bannerLookup[index] = showName; //.toUpperCase(); internal has no upper?
    });
}

//let index = bannerLookup.indexOf(currentShow);
//test undefined
var currentBannerIndex;

function timeUntilNextShow(){
    let currentTime = new Date();
    let time = currentTime.getMinutes();
    //check current time until the next 'xx:59' unless
    let result;
    if (time >= 59 || time < 5){
        result = -1;
    } else {
        currentTime.setMinutes(59);
        result = currentTime - new Date();
    }
    //current time is between 'xx:59 and [xx+1]:05' -> then immediately enter sync loop
    //with the first case, set a timeout with the more or less exact milliseconds until then.

    //15 seconds interval for sync loop, use window.interval and stuff
    //so when the loop detects a show change or ':05' has passed, 
    // remove interval and set timeout until next ':59'
    return result;
}

var isInitial = true;
var bannerLoopId = null;

function updateBanner(){
    let bannerChanged = false;
    let showIndex = getShowIndex(getShowText());
    if(showIndex != -1 && showIndex != currentBannerIndex){
        let newBannerUrl = "https://dragonfm.nl/pic/uploads/" + 
            overSettings.bannerLinks[showIndex][1];
        replaceBanner(newBannerUrl);
        bannerChanged = true;
    }
    if (new Date().getMinutes() > 5 || bannerChanged) {
        window.clearInterval(bannerLoopId);
        bannerLoopId = null;
        setTimeout(updateBanner, timeUntilNextShow());
    } else if (bannerLoopId == null){
        bannerLoopId = window.setInterval(updateBanner, 15000); //15 second refresh time
    }
}

function getShowText(){
    let djPlannerText = jQuery(".showtime-now-playing").children().first().text();
    let colonIndex = djPlannerText.lastIndexOf(':');
    if (colonIndex > 0){
        return djPlannerText.substring
        (colonIndex + 2, djPlannerText.length);
    }
    else{
        return "";
    }
}

function getShowIndex(showDisplayText){
    return bannerLookup.indexOf(showDisplayText);
}

function replaceBanner(url){
    let bannerImage = jQuery("#override-banner").find("img");
    if (isInitial)
    {
        bannerImage.attr(
            {src: url, "data-src": url});
        bannerImage.removeAttr("style");
        bannerImage.css({"opacity": 0,
            height: "100%", transition: "opacity 800ms"});
        //remove visibility
        //set opacity 1.0
        //clone
        jQuery("#override-banner > .container").append(bannerImage.clone())
        bannerImage.first().css("position", "absolute").css("opacity", 1);
        bannerImage.addClass("banner");
        isInitial = false;
        setTimeout(function(){
            jQuery("#override-banner").find("img").eq(1).css("opacity", 1);
        }, 15000);
    }
    else 
    {
        let bottomImage = bannerImage.eq(1)
        if(bottomImage.attr("src") == url){
            return;
        }
        bottomImage.attr({src: url, "data-src": url});
        let topImage = bannerImage.first();
        topImage.css("opacity", 0);
        setTimeout(function(){
            topImage.attr({src: url, "data-src": url});
            topImage.css("opacity", 1);
        }, 15000);
        //set timeout
    }
    jQuery("#override-banner").find("img").attr(
            {src: url, "data-src": url});
}

//shared string
const bannerStart = '<div id="override-banner" role="banner"';
const animationFix = '<div class="container" style="position:relative"></div>';

//returns HTML string
function regularBanner(bannerColor) {
    return `${bannerStart} style="background: 
    ${bannerColor}${overSettings.bannerBackgroundImage}
    ${overSettings.bannerBackgroundPosition}${overSettings.bannerBackgroundSize}
    ${overSettings.bannerBackgroundRepeat}${overSettings.bannerBackgroundOrigin}
    ${overSettings.bannerBackgroundClip}${overSettings.bannerBackgroundAttachment}
    ;">${animationFix}</div>`;
}

//returns HTML string
// Specifically for making a two color banner
function dualColourBanner(bannerColor) {
    //<div class="banner-half" style="position: absolute;width: 100%;background-color: ${overSettings.bannerBackgroundColor}"></div>
    return `${bannerStart} style="background: ${bannerColor};">
    <div class="banner-half" style="position: absolute;width: 100%;background-color: ${overSettings.bannerSecondHalf}"></div>
    ${animationFix}</div>`;
    // position of second half is set directly in CSS
}
