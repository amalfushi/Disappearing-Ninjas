$(document).ready(function(){
    $('.ninja').click(function(){
        $(this).hide();
    });
    $('button').click(function(){
        $('.ninja').show();
    });
});