/*
  Contains all code that processes the settings
  and changes the website accordingly. 
  Some features and structures are hardcoded here.
*/
/*==== feature functions ====*/
function recenterChatButton() {
    let buttonContainer = jQuery(".widget_default_blok_2").find(".widget_button");
    buttonContainer.addClass("chat-button-fix")
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
        let bannerHtml = generateBanner(overSettings);
        jQuery("body").prepend(bannerHtml);
        //shoehorned hook for dynamic banner
        let imgElement = jQuery(".navbar.navbar-default").find("img");
        imgElement.css({visibility: "hidden", opacity: 0});
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
    let classes = ["medium--white-background", "medium--black-text"];
    jQuery("#sidebar-left").find(".PMT_KLOK_widget").first().addClass(classes);
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
        jQuery("#override-banner").children(".container").addClass("remove-padding small--no-margin");
        jQuery("#override-banner").append('<button id="mobileNavToggle" class="hamburger-toggler from-medium--hidden"><span></span></button>');
    });
    jQuery(".navbar.navbar-default").css("margin-bottom", "0px");
    jQuery(".navbar-primary-collapse").ready(() => {
        jQuery(".navbar-primary-collapse").addClass("small--display-block");//override collapse function
    });
    jQuery("#menu-menu-1").ready(() => {
        jQuery("#menu-menu-1").wrap(
            `<div id="navigationMenu"><section class="navigation__menu"></section></div>`);
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
                jQuery(element).find("li").addClass("dropdown__item--responsive");
                let displayText = jQuery(element).children("a").text();
                let hyperlink = jQuery(element).children("a").attr("href");
                jQuery(element).children("a").replaceWith(`<a><div style="display:inline-block" 
                onclick="location = '${hyperlink}'"> ${displayText}</div>
                    <span class="caret mobile-menu__fold" onclick="jQuery(this).toggleClass('rotate--half')"></span> </a>`);
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
    jQuery("footer.site-footer").before(
        `<a id="floatingChatButton" class="button--highlight center-contents from-medium--hidden" 
                href="/chatroom" onclick="window.open(this.href, this.target,
                     \'toolbar=0,location=0,menubar=0,scrollbars=0,resizable=0\'); return false;">
                     <svg "class="social-bar__symbol" 
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
    <span id="songDisplayTop">Ophalen...</span></div>`);
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
function addMobilePlayer() {
    if(jQuery("body").hasClass("home")) {//remember add negation
        jQuery(".container.page-container").before(`<footer id="mobilePlayer" class="player-footer">
        <div id="artistNameContainer" class="player-footer__display">
            <span id="artistNameDisplay"></span>
        </div>
        <div id="songTitleContainer" class="player-footer__display">
        <span id="songTitleDisplay"></span></footer>
        </div>`);
        jQuery("#jp_interface_1").addClass("player-widget__button");
        //
        /////// Surgical operation
        //
        jQuery("#playbtn").addClass("play-button--transparent");
        jQuery("#stopbtn").addClass("pause-button--transparent");
        //jQuery("footer.site-footer").addClass("footer-player-dock");
        addMobilePlayerScroll();
    }
}

THE TRICK IS TO SET THE Z-INDEX OF THE SIDEBAR
function removeSidebarForMobile(){
    if(jQuery("body").hasClass("home")) {//remember add negation
        //jQuery("#songContainerTop").ready(function(){
        jQuery("#songContainerTop").addClass("small--hidden");
        //});
        jQuery(".now_playing_scroler.lazyloaded").addClass("small--hidden");
        jQuery(".PMT_KLOK_widget").addClass("small--hidden");
        jQuery(".DJ_planner_1").addClass("small--hidden");
        jQuery("#sidebar-left > .widget_default_blok_1 > .uppercase").addClass("small--hidden");
        let queryCache = jQuery("#sidebar-left > .widget_default_blok_1");
        queryCache.addClass("widget_default_blok_1--hide-mobile");
        queryCache = queryCache.children(".widget_default_blok_1");
        queryCache.children("div").first().addClass("small--hidden");
        queryCache.addClass("widget_default_blok_1--hide-mobile");
        
    }
}

/*==== generic setting features ====*/
function initizializeStyleVars(){
    let styles = overSettings.presetStyling;
    for (let i = 0; i < styles.length; i++) {
        let value =  jQuery(styles[i].selector).css(styles[i].property);
        if (value != null){
            jQuery(":root").css(styles[i].variable, value);
        }
    }
}

//NOTE: these can later be used as 'bootstrappers' to reduce overhead and merge functions
function bodySetup(){
    jQuery("body").css("color", overSettings.textColor);
}

function contentSetup(){
    //when content (article content) ready:
}

function footerSetup(){
    jQuery("#footer-row").ready(function() {
        let footerCol = overSettings.mainColor;
        if (overSettings.footerColor !== null && overSettings.footerColor !== ''){
            footerCol = overSettings.footerColor;
        }
        jQuery("#footer-row").attr('style', 'background-color:' + footerCol + '!important');
    });
}

/*==== helper functions ====*/
// tasks: a list of functions to perform
// used to easily execute 'features' to apply to the website: groups of functions
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
    let songDisplayStartIndex = html.indexOf("'>") + 2;
    let songDisplayEndIndex = html.indexOf("</marq");
    let information = html.substring(songDisplayStartIndex, songDisplayEndIndex + 1);
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

// Simply adds a scroll function for managing the docking of the mobile player and managing chat button position.
function addMobilePlayerScroll(){
    jQuery(window).scroll(function(){
        //if(window.innerWidth < mobileFooterPlayerBreakpoint){
            let playerHeight = jQuery('#mobilePlayer').outerHeight();
            let position =  jQuery(window).scrollTop() + $(window).innerHeight();
            let condition = jQuery('#footer-row').offset().top;
            let difference = position - condition;
            if(position > condition){
                //jQuery("#mobilePlayer").css("bottom", (difference - 1) + "px");//maybe add one for line prevention?
                //jQuery("#mobilePlayer").addClass("player-footer--docked");
                //jQuery("#mobilePlayer").css("z-index", "-1");
                jQuery("#jp_interface_1").css("bottom", (
                    difference + (playerHeight/2 - 50)) + 
                    "px");
                let factor = (playerHeight + 16)/2 - 6;//notice, 12/2 = 6, has to do with custom as well.
                if (difference < 91) { //ensure custom is possible.
                    jQuery("#floatingChatButton").css("bottom", (
                        factor * Math.cos(0.035 * difference) + factor + 12
                    ) + "px");//pre calculated period variable, has to do with button size.
                } else {
                    jQuery("#floatingChatButton").css("bottom", "12px");//not sure
                }
            }
            else{
                //jQuery("#mobilePlayer").css("bottom", "0px")
                //jQuery("#mobilePlayer").removeClass("player-footer--docked");
                //jQuery("#mobilePlayer").css("z-index", "950");
                jQuery("#jp_interface_1").css("bottom", "");
                jQuery("#floatingChatButton").css("bottom", (playerHeight + 16) + "px"); 
            }
        //}
    });
}

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
    jQuery("#override-banner").find("img").attr(
            {src: url, "data-src": url});
}

function generateBanner(config) {
    let bannerColor = config.mainColor;
    if (config.bannerBackgroundColor !== null 
        && config.bannerBackgroundColor !== ''){
        bannerColor = config.bannerBackgroundColor;
    }
    let bannerHtml;
    let left = properColorArray(config.bannerLeftSide);
    let right = properColorArray(config.bannerRightSide);
    if (screen.width > 768
         && config.bannerSecondHalf !== null
         && config.bannerSecondHalf !== '') 
    {
        bannerHtml = dualColourBanner(bannerColor);
    }
    else if (screen.width > 768
        && Math.max(left.length, right.length) > 0) {
        bannerHtml = complexBanner(left, right);
    }
    else {
        bannerHtml = regularBanner();
    }
    return bannerHtml;
}

// lazy checking of the input array.
// if the first item is a non-empty string, it will pass, otherwise return empty.
function properColorArray(input){
    let result = [];
    if (input !== null){
        if (input.length > 0) {
            if (input[0] !== null && input[0] !== '') {
                result = input;
            }
        }
    }
    return result;
}

//shared string
const bannerStart = '<div id="override-banner" role="banner"';
const animationFix = '<div class="container" style="position:relative"></div>';
const sideHtml = '<div class="banner-stripe"';
const leftSideHtml = '<div class="banner-stripe--left"';
const rightSideHtml = '<div class="banner-stripe--right"';

//returns HTML string
function regularBanner() {
    return `${bannerStart}>${animationFix}</div>`;
}

// @ deprecate?
//returns HTML string
// Specifically for making a two color banner
function dualColourBanner(bannerColor) {
    //<div class="banner-half" style="position: absolute;width: 100%;background-color: ${overSettings.bannerBackgroundColor}"></div>
    return `${bannerStart} style="background: ${bannerColor};">
    <div class="banner-half" style="position: absolute;width: 100%;background-color: ${overSettings.bannerSecondHalf}"></div>
    ${animationFix}</div>`;
    // position of second half is set directly in CSS
}

//!!!!!! so just make the banner flex row, add one flex row container before the image, and one after
// with the css the stripe heights can be calc bound to match image height

//returns HTML string
// can make all kinds of banners with evenly spaced colors. 
// left and right MUST be passed, but either may be an empty array.
// in such a case, the side with values is presented on both sides
function complexBanner(left, right) {
    if (left.length == 0){
        return multipleColorBothSidesBanner(left, left);
    }
    else if (right.length == 0) {
        return multipleColorBothSidesBanner(left, left);
    }
    return multipleColorBothSidesBanner(left, right);
}

//returns HTML string (helper function)
// 
function multipleColorBanner(colors) {
    let rows = '';
    for (let i = 0; i < colors.length; i++) {
        rows += `${sideHtml} style="background-color: ${colors[i]}"></div>`;
    }
    return `${bannerStart} style="display: table;">
    ${rows}${animationFix}</div>`;
}

//returns HTML string (helper function)
// 
function multipleColorBothSidesBanner(left, right) {
    let leftSide = '';
    jQuery(":root").css("--left-banner-items", left.length);
    for (let i = 0; i < left.length; i++) {
        leftSide += `${leftSideHtml} style="background-color: ${left[i]}"></div>`;
    }
    let rightSide = '';
    jQuery(":root").css("--right-banner-items", right.length);
    for (let i = 0; i < right.length; i++) {
        rightSide += `${rightSideHtml} style="background-color: ${right[i]}"></div>`;
    }
    return `${bannerStart}style="display: flex; flex-direction: row align-items: stretch;">
    <div class="banner-side">${leftSide}</div>
    ${animationFix}
    <div class="banner-side">${rightSide}</div>
    </div>`;
}
