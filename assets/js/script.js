function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon')
    }else{
        menuMobile.classList.add('open').src = "assets/img/menu_white_36dp.svg"
        menuMobile.classList.add('open').src = "assets/img/close_white_36dp.svg"
    }
}