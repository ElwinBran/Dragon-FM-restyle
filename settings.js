
/*
Stores all variables that can be changed by the website moderator.
Variables for both styling such as colours, but also text content
and urls.
---------------------
Script window is 21 characters wide at best, so use that.
*/
const overSettings = {
// - Main settings:
mainColor: "#57007f",

textColor:
"#333",
kcTextColor:
"black", 
//invertedTextColor:
//"white",
socialSymbolsColor:
"white",
dropdownColor:
"", //@mainColor
// - Chat Section:
chatButtonText:
 "Chat gezellig mee!",
chatPromptLabelText:
 "DragonFM Chat",
// - FAB chat button:
fabBackground:
"", //set color
fabClasses:
"button--highlight center-contents from-medium--hidden",
fabChatSymbolColor:
"", //@socialSymbolsColor
// - Footer:
footerColor:
"", //@mainColor
footerSymbolColor:
"", //@socialSymbolsColor

// - Programma banner
bannerSwitching: 
true, //'false' om uit te zetten
//default banner here?
bannerLinks: [
["Dragon Non Stop",
"Dragon-Non-Stop-1.png"],
["Tim voor Drie",
"Tim-voor-Drie-1.png"],
["Rob op Woensdag",
"Rob-op-Woensdag-1.png"],
["PowerOnline",
"PowerOnline-1.png"],
["Ochtendshow",
"Ochtendshow.png"],
["KnapFout!",
"KnapFout.png"],
["Jacobs in de Ochtend","Jacobs-in-de-Ochtend.png"],
["Huis, Tuin en Keukenshow","Huis-Tuin-en-Keukenshow-1.png"],
//no comma?
["Hits van Nu",
"Hits-van-Nu-1.png"],
["Hitkampioen",
"Hitkampioen-1.png"],
["Het Radiospektakel","Het-Radiospektakel-1.png"],
["Flitsende10!",
"Flitsende10.png"],
["Dragon LateNight",
"Dragon-LateNight-1.png"],
["Dekker Radio",
"Dekker-Radio.png"],
["De Muziekfabriek",
"De-Muziekfabriek.png"],
["De Flitsende50!","De-Flitsende50.png"],
["De Connectie",
"De-Connectie.png"],
["Bont","Bont-1.png"],
["Best of the 90's",
"Best-of-the-90s-2.png"],
["Best of the 80's",
"Best-of-the-80s-1.png"],
["Best of the 00's",
"Best-of-the-00s-1.png"],
["19-Toen-Show",
"19-Toen-Show.png"]
],
// - Mobile Menu:
hamburgerBeamWidth: 
"36px",
hamburgerBeamHeight: 
"4.5px",
mobileBannerImageWidth: 
"85%",
mobileMenuColor:
"", //@mainColor
mobileMenuTextColor:
"white",
mmSocialColor:
"", //@socialSymbolsColor
mmSocialWidthHeight:
"53px",
mmSocialPadding:
"2px",
mmSocialMargin:
"5px",
mmSocialExtraStyle:
"",
mmFoldTrans:
"transform .3s ease-out",
mmFoldMarTop:
"8px",
mmFoldAddition:
"",

//- Song Information:
songInfoRefresh: 
"10", //seconds
songArtistSeparation: 
" - ",
songInfoScrollSpeed: 
"5", //geheel getal
songInfoScrollDirection: 
"left",
songInfoFontFamily: 
"verdana, arial, Helvetica, sans-serif",
songInfoFontSize: 
"1.4em",
songInfoTextColor: 
"#ffffff",
songInfoFontStyle: 
"italic",
songInfoBackground: 
"transparent",

// - Clock
clockTextColor:
"", 
clockFontSize:
"2em", 
clockClasses:
"medium--white-background medium--black-text",

// - Top bars
bannerBackgroundColor:
"", //@mainColor
bannerBackgroundImage:
"", //url
bannerBackgroundPosition:
"", //%, px, or left/right/center/bottom/top
bannerBackgroundSize:
"", 
bannerBackgroundRepeat:
"", 
bannerBackgroundOrigin:
"", 
bannerBackgroundClip:
"", 
bannerBackgroundAttachment:
"", //scroll fixed etc.

// - Miscellaneous:
songInfoDownload:
"https://dragonfm.nl/wp-content/themes/Radio2/IcecastHK-Curent-song.php", //url

};
