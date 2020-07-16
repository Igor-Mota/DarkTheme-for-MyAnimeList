let PageStyles = document.createElement("style");

let preto = "#242526";
let pretoC ="#3a3b3c";

PageStyles.innerHTML += `  body{background:${preto} !important}`;
PageStyles.innerHTML += ` .header-right i{color:${preto}}`;
PageStyles.innerHTML += ` .header-profile{background:${pretoC} !important ;border-radius: 5px !important}`;
PageStyles.innerHTML += ` .header-profile-link{color: #fff !important}`;
PageStyles.innerHTML += `  #headerSmall{background-color:${preto} !important}`;
PageStyles.innerHTML += ` .border{display:none !important}`;
PageStyles.innerHTML += `  #content{background-color:${preto} !important; border:0 !important}`;
PageStyles.innerHTML += `  #contentWrapper{background-color:${preto} !important}`;
PageStyles.innerHTML += `  h3{color:#fff !important}`;
PageStyles.innerHTML += `  a{color:#fff !important}`;
PageStyles.innerHTML += `  a.header-right{color:${preto} !important}`;
PageStyles.innerHTML += `  p{color:#fff !important}`;
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
PageStyles.innerHTML += `  #myanimelist{width:98% !important}`;
PageStyles.innerHTML += `  #widget-episode-video{width:100% !important}`;
PageStyles.innerHTML += `  h2{color:#fff !important}`;


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
        nav[i].style.borderRadius = "15px"
        var temp = nav[i].querySelectorAll("li");
        for(var c = 0; c < temp.length; c++ ){
            temp[c].querySelector("a").style.backgroundColor = preto;
            temp[c].querySelector("a").addEventListener("mousemove", brilho);
            temp[c].querySelector("a").addEventListener("mouseout", brilhoFora);
     
        }    
    }
}catch(e){}

function brilho(e){
    e.target.style.backgroundColor = pretoC;
 
}
function brilhoFora(e){
    e.target.style.backgroundColor = preto;
}

