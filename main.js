$(document).ready(function(){
    $('.ninja').click(function(){
        $(this).fadeOut();
    });
    $('button').click(function(){
        $('.ninja').fadeIn();
    });
});