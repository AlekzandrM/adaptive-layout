// TOGGLE CLASS FOR BURGER
$('.wrapper').addClass('loaded');
$('.icon-menu').click(function (e) { 
    // e.preventDefault();
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

// IMG TO BACKGROUND
function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}    
ibg();
// function ibg(){
//     $.each($('.ibg'), function(index, val) {
//     if($(this).find('img').length>0){
//     $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
//     }
//     });
// }    
// ibg();

// SLIDERS
$(document).ready(function(){
    if ($('.slider__body').length > 0) {
        $('.slider__body').slick({
            //autoplay: true,
            //infinite: false,
            dots: true,
            arrows: false,
            accessibility: false,
            slidesToShow: 1,
            autoplaySpeed: 3000,
            adaptiveHeight: true,
            nextArrow:'<button type="button" class="slick-next"></button>',
            prevArrow:'<button type="button" class="slick-prev"></button>',
            responsive: [{
                breakpoints: 768,
                settings: {}
            }]
        })
    }
})