let body = document.querySelector("body");
let container = body.querySelector("#myanimelist");
let nav = body.querySelector("#menu");
let header = body.querySelector("#headerSmall");
let borderHeader = body.querySelectorAll(".border");
let userIconArea = body.querySelector(".header-profile");
let userName = body.querySelector(".header-profile-link");
let content = body.querySelector("#content");
let leftColum = body.querySelector(".left-column");
let h3 = body.querySelectorAll(".widget-header");
let links = body.querySelectorAll("a");
let paragrafo = body.querySelectorAll("p");
let span = body.querySelectorAll(".external-link");
let settings = body.querySelector(".header-right");
let profileMenuDropdown = body.querySelector(".header-profile-dropdown");
let add = body.querySelectorAll(".Lightbox_AddEdit");
let text = body.querySelectorAll(".text");
let textRead = body.querySelectorAll(".textReadability");
let spaceIt = body.querySelectorAll(".spaceit");
let widgetEpisodeVideo = body.querySelector("#widget-episode-video");
let widgetSlide = body.querySelectorAll(".widget-slide-outer");
let menuLeft = body.querySelector("#menu_left").querySelectorAll("ul");
let ulMenuDropDown =  profileMenuDropdown.querySelector("ul");

let teste = body.querySelector("#contentWrapper");

let rightColumn =  body.querySelector(".right-column");

let list = rightColumn.querySelectorAll("ul");

let footer =  body.querySelector("#footer-block");

body.style.background = "#242526";

nav.style.width= "100%";

container.style.width = "98%";

header.style.backgroundColor = "#242526"

for(var i = 0; i < 3; i++){

    borderHeader[i].style.display = "none";
}

settings.style.color = "#242526";

settings.querySelector("i").style.color = "#000";

userIconArea.style.backgroundColor = "#3A3B3A";
userIconArea.style.borderRadius = "5px";
userName.style.color = "#ffffff"
content.style.backgroundColor = "#242526"
leftColum.style.backgroundColor = "#242526"

for(var i = 0; i < h3.length; i++){
    h3[i].style.color = "#fff";
}

for(var i = 0 ; i< links.length;i++){
    links[i].style.color="#fff"
}
for(var i = 0 ; i< paragrafo.length;i++){
    paragrafo[i].style.color="#fff"
}
for(var i = 0 ; i< text.length;i++){
    text[i].style.color="#fff"
}
for(var i = 0 ; i< textRead.length;i++){
    textRead[i].style.color="#fff"
}

for(var i = 0 ; i< spaceIt.length;i++){
    spaceIt[i].style.color="#fff"
}
for(var i = 0 ; i< span.length;i++){
    
    span[i].style.backgroundColor="#242526"
}
widgetEpisodeVideo.style.width = "100%";
for(var i = 0; i < widgetSlide.length; i++){
    widgetSlide[i].style.width = "100%";
    widgetSlide[i].style.overflow = "inherit";
}
for(var i = 0; i < list.length; i++){
list[i].style.backgroundColor = "#242526"
}
for(var i = 0; i < add.length; i++){
    add[i].style.backgroundColor = "#242526"
    add[i].style.textDecoration ="none"
}

let menuUls = menuLeft[0].querySelectorAll("ul");
let menuLis = menuUls[0].querySelectorAll("li");


let menuListeste = [];

for( var i = 0; i < menuUls.length; i++){

    var index = menuUls[i].querySelectorAll("li");
    menuListeste.push(index);
   
}

    for(var i = 0; i < menuListeste.length; i++ ){
        
        var temp = menuListeste[i];
     
        
        for(var index = 0; index < temp.length; index++){

            temp[index].querySelector("a").style.backgroundColor = "#242526";
        }
    }
    var lisMenu = ulMenuDropDown.querySelectorAll("li");

    console.log(lisMenu)
  for(var i = 0; i < lisMenu.length; i++){
    lisMenu[i].querySelector("a").style.backgroundColor = "#242526";
  }

  footer.style.backgroundColor = "#242526"