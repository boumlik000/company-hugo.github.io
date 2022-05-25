let nav = document.querySelector("nav.navbar");
let  menu = document.querySelector(".navbar .navbar__container>ul");
 

// hada fornavbar scroll
document.addEventListener("scroll", (e)=>{
    let pageScroll = document.scrollingElement.scrollTop,
        navPosition = nav.offsetTop;

    if(pageScroll > navPosition + 0.5){
        nav.classList.add("navbar--show");
    }else{
        nav.classList.remove("navbar--show");
    }
});

    // hada for ila clikina 3la chiheader ihbt lih 
if(document.body.classList.contains("landing-page")){
    let navlink = document.querySelectorAll(".navbar .navbar__container>ul>li>a");

    for(let n = 0; n<navlink.length; n++){
        navlink[n].addEventListener("click",function(e){
            let target = "#" + navlink[n].getAttribute("href");
            e.preventDefault();
            window.scrollTo({
                top: document.querySelector(target).offsetTop - 70,
                behavior:'smooth'
            });
        })
    }
    // hada bach o9ttma clikkina 3la header ithiiid l active mn lakhor

    let sections =document.querySelectorAll('.section-container');
    window.onscroll = () => {
        let scrollposition = document.documentElement.scrollTop + 75 || document.body.scrollTop +75;

        for(let s=0; s< sections.length; s++){
            if(sections[s] && sections[s].offsetTop <= scrollposition){
                let id = sections[s].getAttribute("id");
                document.querySelector('.active').classList.remove('active');
                document.querySelector("a[href*="+ id +"]").classList.add('active');

            }
        }
    }
}

// hada dial nav bar responsive icon 
if(document.body.classList.contains("landing-page")){
    let menuBotton = document.querySelector(".phone-menu");

    menuBotton.addEventListener("click",function(){
        nav.classList.toggle("navbar--show-phone");
        menu.classList.toggle("show-list");
    })
}

// hada dial dak l arrow llikain fl hero section
let downarrow =document.querySelector(".down-arrow"),
    servicesSection = document.querySelector(".services");

if(document.body.classList.contains("landing-page")){
    downarrow.addEventListener("click",function (e) {
        e.preventDefault();
        window.scrollTo({
            top:servicesSection.offsetTop - 70,
            behavior:'smooth'
        });
    });
}

let projectimg = document.querySelectorAll(".project-image"),
    projectimgLenght = projectimg.length,
    layer =document.querySelector(".layer"),
    layerClose= document.querySelector(".layer .layer-container i"),
    layerImage=document.querySelector(".layer .layer-container img"); 

if(document.body.classList.contains("project")){
    layerClose.addEventListener("click",function(){
        layer.classList.remove("layer--show");
    });

    for(let i = 0;i<projectimgLenght; i++){
        projectimg[i].addEventListener("click",function(){
            let imagesrc= projectimg[i].getAttribute("src");
            layerImage.setAttribute("src",imagesrc);
            layer.classList.add("layer--show");
        })
    }
}