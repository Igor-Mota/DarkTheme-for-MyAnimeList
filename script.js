let PageStyles = document.createElement("style");

let preto = "#242526";
let pretoC ="#3a3b3c";

PageStyles.innerHTML += `  body{background-color:${preto} !important}`;
PageStyles.innerHTML += ` .header-right i{color:${preto}}`;
PageStyles.innerHTML += ` .header-profile{background:${pretoC} !important ;border-radius: 5px !important}`;
PageStyles.innerHTML += ` .header-profile-link{color: #fff !important}`;
PageStyles.innerHTML += `  #headerSmall{background-color:${preto} !important}`;
PageStyles.innerHTML += ` .border{display:none !important}`;
PageStyles.innerHTML += `  #content{background-color:${preto} !important; border:0 !important}`;
PageStyles.innerHTML += `  #contentWrapper{background-color:${preto} !important}`;
PageStyles.innerHTML += `  h3{color:#fff !important}`;
PageStyles.innerHTML += `  a{color:#fff !important}`;
PageStyles.innerHTML+= `  .button_add{background-color:${preto} !important}`;
PageStyles.innerHTML += `  a.header-right{color:${preto} !important}`;
PageStyles.innerHTML += `  p{color:#fff !important}`;
PageStyles.innerHTML += ` .footer-ranking{background-color:${preto} !important}`
PageStyles.innerHTML += ` .text{color:#fff !important}`;
PageStyles.innerHTML += ` .textReadability{color:#fff !important}`;
PageStyles.innerHTML += ` .spaceit{color:#fff !important}`;
PageStyles.innerHTML += ` .external-link{background-color:${preto} !important}`;
PageStyles.innerHTML += ` .widget-slide-outer{width:100% !important; overflow:"inherit" !important}`;
PageStyles.innerHTML += `  ul{background-color:${preto} !important}`;
PageStyles.innerHTML += ` .Lightbox_AddEdit{background-color:${preto} !important}`;
PageStyles.innerHTML += ` .non-link{color: #fff !important}`;
PageStyles.innerHTML += `  #footer-block{background-color:${preto} !important}`;
PageStyles.innerHTML += ` .wider{background-color:${preto} !important}`;
PageStyles.innerHTML += `  #menu{background-color:${preto} !important ; border 1px solid #c4c4c4 !important; width:100% !important}`;
PageStyles.innerHTML += `  #widget-episode-video{width:100% !important}`;
PageStyles.innerHTML += `  h2{color:#fff !important}`;
PageStyles.innerHTML += ` .header-notification-view-all a{background-color: ${preto} !important} `;
PageStyles.innerHTML += ` .header-notification-dropdown-inner h3{background-color: ${preto} !important} `;
PageStyles.innerHTML += ` .header-notification-item-list li {background-color: ${preto} !important}`;
PageStyles.innerHTML += `  #horiznav_nav{background-color:${preto} !important}`;
PageStyles.innerHTML += `  td{background-color:${preto} !important}`;
PageStyles.innerHTML += `  td.rank{border:1px solid #fff !important}`;
PageStyles.innerHTML += `  td.title{border:1px solid #fff !important}`;
PageStyles.innerHTML += `  td.score{border:1px solid #fff !important}`;
PageStyles.innerHTML += `  td.your-score{border:1px solid #fff !important}`;
PageStyles.innerHTML += `  td.status{border:1px solid #fff !important}`;
PageStyles.innerHTML += `  #horiznav_nav ul li a{background-color:${preto} !important}`;
PageStyles.innerHTML += ` .btn-category{background-color:${preto} !important}`;
PageStyles.innerHTML += ` .Lightbox_AddEdit{border:none !important}`;
PageStyles.innerHTML += ` .navi-seasonal{background-color:${preto} !important}`;
PageStyles.innerHTML += ` .prodsrc{background-color:${preto} !important}`;
PageStyles.innerHTML += ` .genres{background-color:${preto} !important} `;
PageStyles.innerHTML += `  span.genre a{color:${preto} !important}`;
PageStyles.innerHTML += ` .synopsis{color:#fff !important} `;
PageStyles.innerHTML += ` .btn-edit-tags{color:${preto} !important}`;
PageStyles.innerHTML += ` .birthday{color:#fff !important}`;
PageStyles.innerHTML += ` .favorites{color:#fff !important}`;  
PageStyles.innerHTML += ` .bgColor1{background-color:${preto} !important; color:#fff !important}`;
PageStyles.innerHTML += ` .btn-choose-your-own{color:${preto} !important}`;

//pages sem width alargada  === https://myanimelist.net/manga.php   https://myanimelist.net/anime/season

document.head.appendChild(PageStyles);

try{
    let nav = document.querySelector("#nav");
    let lisNav = nav.querySelectorAll("li");

    for(var i = 0; i < lisNav.length; i++){
        lisNav[i].addEventListener("mousemove", brilho);
        lisNav[i].addEventListener("mouseout", brilhoFora);
    }
    nav = nav.querySelectorAll("ul");
    for(var i = 0; i < nav.length; i++){
       
        var temp = nav[i].querySelectorAll("li");
        temp[0].style.borderRadius = "15px"
        for(var c = 0; c < temp.length; c++ ){
            temp[c].querySelector("a").style.backgroundColor = preto;
            temp[c].querySelector("a").addEventListener("mousemove", brilho);
            temp[c].querySelector("a").addEventListener("mouseout", brilhoFora);
        }    
    }

    let headerProfileDropDown = document.querySelector(".header-profile-dropdown");
    headerProfileDropDown =  headerProfileDropDown.querySelector("ul");
    headerProfileDropDown = headerProfileDropDown.querySelectorAll("li");

    for(var i = 0; i < headerProfileDropDown.length; i++){
        headerProfileDropDown[i].querySelector("a").style.backgroundColor = preto;
        headerProfileDropDown[i].addEventListener("mousemove", brilho);
        headerProfileDropDown[i].addEventListener("mouseout", brilhoFora);
    }
    let headerListDropDown = document.querySelector(".header-list-dropdown");
    headerListDropDown =  headerListDropDown.querySelector("ul");
    headerListDropDown = headerListDropDown.querySelectorAll("li");

    for(var i = 0; i < headerListDropDown.length; i++){
        headerListDropDown[i].querySelector("a").style.backgroundColor = preto;
        headerListDropDown[i].addEventListener("mousemove", brilho);
        headerListDropDown[i].addEventListener("mouseout", brilhoFora);
    }

    let searchList =  document.querySelectorAll(".genre-list");
    for(var i = 0; i < searchList.length; i++){
        searchList[i].addEventListener("mousemove",brilho);
        searchList[i].addEventListener("mouseout", brilhoFora);
    }


    let AnimeSeassonNav = document.querySelector(".horiznav_nav");
    AnimeSeassonNav = AnimeSeassonNav.querySelector("ul");
    AnimeSeassonNav = AnimeSeassonNav.querySelectorAll("li");
    
    
    for(var i = 0; i < AnimeSeassonNav.length; i++){
        AnimeSeassonNav[i].querySelector("a").style.backgroundColor = preto;
    }

}catch(e){
    console.log("error" + e);
}

let noWidth = "https://myanimelist.net/anime/season"; 
let page = window.location.href;

if(page != noWidth){
   document.querySelector("#myanimelist").style.width = "98%";
}
function brilho(e){
    e.target.style.backgroundColor = pretoC;
 
}
function brilhoFora(e){
    e.target.style.backgroundColor = preto;
}
