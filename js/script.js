$(document).ready(()=>{
    const nav = $('.nav');
    const toggleCollapse = $('.toggle-collapse');
    toggleCollapse.on('click', () => {
        nav.toggleClass('collapse')
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    })


})