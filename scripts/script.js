

$(document).ready(function(){
    $('.material-image-items').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            // {
            //     breakpoint: 1025,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 1,
            //     }
            // },
        ]
    });
});

