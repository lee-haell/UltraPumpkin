$(function(){

    var $menuLi = $('nav ul li'),
        $section = $('.section');

    $menuLi.click(function(e){

        var target = $(this),
            index = target.index(),
            cont = $section.eq(index),
            offset = cont.offset().top;

        $('html, body').animate({scrollTop:offset}, 600, 'ease');

    });
});