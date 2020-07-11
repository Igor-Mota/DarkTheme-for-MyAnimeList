var PageStyles = document.createElement("style");

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
PageStyles.innerHTML += ` .non-link{color:${pretoC} !important}`;
PageStyles.innerHTML += `  #footer-block{background-color:${preto} !important}`;
PageStyles.innerHTML += ` .wider li{background-color:${preto} !important}`;
PageStyles.innerHTML += `  #menu{width:100% !important}`;
PageStyles.innerHTML += `  #myanimelist{width:98% !important}`;
PageStyles.innerHTML += `  #widget-episode-video{width:100% !important}`;

document.head.appendChild(PageStyles);

