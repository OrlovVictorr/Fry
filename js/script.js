//preloader.........................................
let preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
    preloader.style.visibility = "hidden";
    preloader.style.opacity = "0";
})
//cursor............................................

var mouse = [document.querySelector(".cursor"), document.querySelector(".cursor_s")];

window.addEventListener('mousemove', moveMouse);


function moveMouse(e) {
    var texts = document.querySelectorAll(".cur_text");
    var links = document.querySelectorAll(".cur_link");
    var x = e.clientX;
    var y = e.clientY;
    
    for (let i = 0; i < mouse.length; i++) {
        
    mouse[i].style.left = x + 'px';
    mouse[i].style.top = y + 'px';


    }
    
    
for (let i = 0; i < texts.length; i++) {
    const text = texts[i];

    text.addEventListener('mousemove', moveMouseT);
    text.addEventListener('mouseout', moveMouseT_off);
    
    function moveMouseT(e) {
    mouse[0].classList.add('cursor_text');
}

function moveMouseT_off(e) {
    mouse[0].classList.remove('cursor_text');
    mouse[0].classList.add('cursor_anim');
}
}



for (let i = 0; i < links.length; i++) {
    const link = links[i];

    link.addEventListener('mousemove', moveMouseL);
    link.addEventListener('mouseout', moveMouseL_off);
    
    function moveMouseL(e) {
    mouse[0].classList.add('cursor_hover');
    mouse[0].classList.remove('cursor_hover_off');
}

function moveMouseL_off(e) {
    mouse[0].classList.add('cursor_hover_off');
    mouse[0].classList.remove('cursor_hover');

}
}
}










//photo card................................................

const photo_cards = document.querySelectorAll('.photo_card');
const HeaderCir = document.querySelector('.cir');

for (let i = 0; i < photo_cards.length; i++) {
    const photo_card = photo_cards[i];
    photo_card.addEventListener('mousemove', startRotate);
    photo_card.addEventListener('mouseout', stopRotate);
}

function startRotate(event) {

    const photo_cardItem = this.querySelector('.photo_card_item');
    const halfWidth = photo_cardItem.offsetWidth / 2;
    const halfHeight = photo_cardItem.offsetHeight / 2;
    let speed = photo_cardItem.getAttribute('speed');


    photo_cardItem.style.transform = 'rotateY(' + (event.offsetX - halfWidth) / speed + 'deg) rotateX(' + -(event.offsetY - halfHeight) / speed + 'deg)';

    HeaderCir.style.opacity = "0";
    
    document.querySelector('.header_video').style.opacity = '0';

}

function stopRotate(event) {

    const photo_cardItem = this.querySelector('.photo_card_item');
    photo_cardItem.style.transform = 'rotate(0)';

    HeaderCir.style.opacity = "0";
    document.querySelector('.header_video').style.opacity = '.5';

}

//время.....................................................

window.onload = function () {
    window.setInterval(function () {
        var now = new Date();
        var HeaderDate = document.querySelector('.rec_header_date');
        HeaderDate.innerHTML = now.toLocaleTimeString();
    }, 1000);
};

//burger....................................................

const burgerMenu = document.querySelector('.burger_menu');

burgerMenu.onclick = function () {

    const burgerMenuLine = document.querySelector('.burger_menu_line');
    const burgerMenuLine1 = document.querySelector('.burger_menu_line1');
    const burgerMenuLine2 = document.querySelector('.burger_menu_line2');
    const all_div = document.querySelector('.all_div');
    const Burger = document.querySelector('burger');
    const backMenuOpen = document.querySelector('.back_menu_open');


    if (Burger.classList.contains('burger_open')) {
        burgerMenuLine.classList.remove('burger_menu_line_click');
        burgerMenuLine1.classList.remove('burger_menu_line_click1');
        burgerMenuLine2.classList.remove('burger_menu_line_click2');
        Burger.classList.add('burger_close');
        Burger.classList.remove('burger_open');
        backMenuOpen.classList.remove('back_menu_open_on');

    } else {
        burgerMenuLine.classList.add('burger_menu_line_click');
        burgerMenuLine1.classList.add('burger_menu_line_click1');
        burgerMenuLine2.classList.add('burger_menu_line_click2');
        Burger.classList.remove('burger_close');
        Burger.classList.add('burger_open');
        backMenuOpen.classList.add('back_menu_open_on');
    }

}

//растояние до элемента........................................

//about!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let aboutMeY = document.querySelector('.about_me').offsetTop;
let aboutMeH = document.querySelector('.about_me').clientHeight;


let headerH = document.querySelector('header').clientHeight;








window.addEventListener('scroll', animation);
window.addEventListener('scroll', logo);

function animation(e) {
    //about....................................................
    let posTop = document.documentElement.scrollTop;

    if (((aboutMeY - aboutMeH) < document.documentElement.scrollTop) &&
        ((aboutMeY + aboutMeH ) > document.documentElement.scrollTop)) {
        var about = aboutMeY - aboutMeH - posTop;

        document.querySelector('.nick').style.right = ((-11) - about / 90) + "vw";
        document.querySelector('.nick').style.transform = "scale(" + ((0.9) + about / (-3000)) + ")";
    }
}

function logo(e) {
    //about....................................................
    let posTop = document.documentElement.scrollTop;

    if (headerH > document.documentElement.scrollTop) {
        
        document.querySelector('.top_left_logo').classList.remove("contact_left_js");
        document.querySelector('.contact_left_inner').style.marginTop = "0";
        document.querySelector('.contact_left').classList.remove("contact_left_jss");
        
    } else {
        
        document.querySelector('.top_left_logo').classList.add("contact_left_js");
        document.querySelector('.contact_left_inner').style.marginTop = "-10vh";
        document.querySelector('.contact_left').classList.add("contact_left_jss");
        
    }   
}
//type video....................................................
//
//const tvTexts = document.querySelectorAll('.box_tv_text');
//
//for (let i = 0; i < tvTexts.length; i++) {
//    const tvText = tvTexts[i];
//    tvText.addEventListener('mousemove', tvTextYes);
//    tvText.addEventListener('mouseout', tvTextNo);
//}
//
//function tvTextYes(event) {
//    let a = this.getAttribute('class_back');
//    let b = document.querySelector(a);
//    b.style.filter = "blur(10px)";
//    b.style.zIndex = "-222";
//}
//
//function tvTextNo(event) {
//    let a = this.getAttribute('class_back');
//    let b = document.querySelector(a);
//    b.style.filter = "blur(0)";
//    b.style.zIndex = "0";
//}

//до после......................................................

function slider() {
    document.querySelector('.slider').addEventListener('mousemove', (event) => {
        let x = event.offsetX;
        document.querySelector('.slider-after').style.width = x + 'px';
    });
}
slider();

