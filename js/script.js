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
        nav:true
    })


})