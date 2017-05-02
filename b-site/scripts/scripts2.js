console.log('Custom Scripts detected');

$(document).on('click', '.navbar-collapse.in', function(e){
           if($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle'){
               $(this).collapse('hide');
           } 
        });


//$('.flip').mouseenter(function(){
//    $(this).find('.card').addClass('flipped').mouseleave(function(){
//        $(this).removeClass('flipped');
//    });
//    return false;
//})


$('.card').mouseenter(function(){
    $(this).find('.front').toggleClass('hider').fadeOut(1000);
    $(this).find('.back').toggleClass('hider').fadeIn(900);
});

$('.card').mouseleave(function(){
    $(this).find('.front').toggleClass('hider').fadeIn(900);
    $(this).find('.back').toggleClass('hider').fadeOut(1000);
});







