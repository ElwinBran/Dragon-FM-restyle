
/*
Stores all variables that can be changed by the website moderator.
Variables for both styling such as colours, but also text content
and urls.
---------------------
Script window is 21 characters wide at best, so use that.
*/
const overSettings = {
// - Main settings:
mainColor: 
"#57007f",
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
mobileBannerImageWidth: 
"85%",
mmSocialColor:
"", //@socialSymbolsColor

//- Song Information:
songInfoRefresh: 
"10", //seconds
songArtistSeparation: 
" - ",
songInfoScrollSpeed: 
"5", //geheel getal
songInfoScrollDirection: 
"left",

// - Top bars
bannerBackgroundColor:
"", //@mainColor
bannerSecondHalf:
"", 
bannerLeftSide:
["", //top
"",  //middle
""], //bottom
bannerRightSide:
["", //top
"",  //middle
""], //bottom

// - Build-in:
songInfoDownload:
"https://dragonfm.nl/wp-content/themes/Radio2/IcecastHK-Curent-song.php", //url
presetStyling:[
{selector:
".navbar",
property:
"min-height",
variable:
"--preset-navbar-min-height"},
{selector:
".container",
property:
"width",
variable:
"--preset-container-width"},
]
};
