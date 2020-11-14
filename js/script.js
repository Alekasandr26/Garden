$(function(){
    $('.navbar-toggler').on('click',function(){
        $('.fa-bars , .fa-times').toggleClass('d-none');
    })
    
    // change of Featured items

    let $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $('.filter ul li').on('click',function(){
        $('.filter ul li').removeClass('active');
        $(this).addClass('active');
        let value = $(this).attr('data-name');
        $grid.isotope({
            filter: value
        })
    })

    // Play video 
    $('.play-video').on('click',function(){
        $('.play-video').addClass('display-none');
        var $video = $('#video'),
        src = $video.attr('src');
        $video.attr('src', src + '&autoplay=1');
    })

    // // Section Gallery

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoWidth:true,
        items:8
    })
    // // email validate 

    $.validator.setDefaults({
        highlight: function(element){
            $(element)
            .closest('.required')
            .addClass('has-error');
        },
        unhighlight: function(element){
            $(element)
            .closest('.required')
            .removeClass('has-error');
        }
    });
    $('.form-control-plaintext').validate({
        rules:{
            email:{
                required: true,
                email: true
            }
        }
    });

})



















