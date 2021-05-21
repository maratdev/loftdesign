// // Import jQuery module (npm i jquery)
import $ from 'jquery'; window.jQuery = $; window.$ = $

require('owl.carousel/dist/owl.carousel.min')

document.addEventListener('DOMContentLoaded', () => {

    $('#burger').click(function () {
        $('.show').fadeToggle(900);
    });


        $('.owl-carousel').owlCarousel({
            loop: true,
            items:1,
            nav:true,
            center:true,
            autoHeight:true,
            navText : ["f104","f104"],
        });


})
