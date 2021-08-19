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
        jQuery("body").prepend(`<div id="override-banner" role="banner" style="background: 
        ${bannerColor}${overSettings.bannerBackgroundImage}
        ${overSettings.bannerBackgroundPosition}${overSettings.bannerBackgroundSize}
        ${overSettings.bannerBackgroundRepeat}${overSettings.bannerBackgroundOrigin}
        ${overSettings.bannerBackgroundClip}${overSettings.bannerBackgroundAttachment}
        ;"><div class="container"></div></div>`);
        //shoehorned hook for dynamic banner
        let imgElement = jQuery(".navbar.navbar-default").find("img");
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
        let socialBlob = [
            {link: "https://open.spotify.com/user/hpx3z64qv46xf6lc3be3biihq?si=f5654f24f7a44d4c",
        name: "Spotify"},
        {link: "https://www.facebook.com/RadioDragonFM",
            name: "Facebook"},
            {link: "https://www.instagram.com/RadioDragonFM",
            name: "Instagram"},
            {link: "mailto:radio@dragonfm.nl",
            name: "Email"},
            {link: "https://www.youtube.com/channel/UCfVi5JAqbYZd2DzhCr5hHyw",
            name: "YouTube"}];
        let menuFooterHtml = '<section class="from-medium--hidden"><div style="padding-top:10px" class="center-overflow"><b>Volg ons</b></div>';
        jQuery(socialBlob).each(function(index, social){
            menuFooterHtml += `<a href="${social.link}" target="_blank" 
            rel="noopener noreferrer" 
            style="text-decoration:none;border:0;
             width:53px; height:53px;margin:5px;
             color:white!important;">
            <svg style="fill:currentColor;width:inherit;height:inherit;"
             preserveAspectRatio="xMidYMid meet" version="2.0">
             <use href="#${social.name.toLowerCase()}-symbol" />
         </svg></a>`;
         //last template trick there uses the svg symbols already defined in the HTML that conform to that naming scheme
        });
        menuFooterHtml += '</div></section>';
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
                     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="20px" y="25%" width="35px" height="40px" 
    style="fill: ${symbolColor};" viewBox="0 0 554.962 554.962" xml:space="preserve"><g><g><path d="M530.5,148.633H404.826v162.155c0,23.611-19.211,42.822-42.822,42.822H168.49v54.297    c0,13.506,10.949,24.461,24.461,24.461h190.118l79.443,66.354c10.367,8.66,15.942,5.098,12.454-7.949l-15.521-58.012    c-0.036-0.135-0.109-0.258-0.146-0.393h71.2c13.507,0,24.462-10.949,24.462-24.461V173.088    C554.955,159.582,544.007,148.633,530.5,148.633z"/><path d="M24.461,335.243h37.394c-0.037,0.135-0.11,0.258-0.147,0.393l-15.521,58.012c-2.203,8.225-0.795,12.68,3.134,12.68    c2.307,0,5.483-1.529,9.314-4.73l79.444-66.354h30.417h193.515c13.507,0,24.461-10.947,24.461-24.461V148.633V75.97    c0-13.507-10.948-24.461-24.461-24.461H24.461C10.955,51.509,0,62.458,0,75.97v234.812C0,324.296,10.949,335.243,24.461,335.243z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></a>`);
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
            let time  = timeUntilNextShow();
            //-1  will trigger instantly.
            setTimeout(updateBanner, time);
        });
    }
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
    if(bannerImage.attr("src") != url){
        jQuery("#override-banner").find("img").attr(
            {src: url, "data-src": url});
    }
}

