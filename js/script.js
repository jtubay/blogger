const responsive ={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}
$(document).ready(()=>{
    const nav = $('.nav');
    const toggleCollapse = $('.toggle-collapse');
    toggleCollapse.on('click', () => {
        nav.toggleClass('collapse')
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive
    });
    $('.move-up').on('click', ()=>{
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    })


})