$(document).ready(function(){
    $('section.enroll').find('div.row').on('click', 'article', function(){
        $(this).parent().find('article.selected').removeClass('selected').find('input[type=checkbox]').prop('checked', false);
        $(this).addClass('selected').find('input[type=checkbox]').prop('checked', true);
    });
});