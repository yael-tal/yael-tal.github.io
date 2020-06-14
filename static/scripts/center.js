
$(document).ready(() => {
    let col = $(".big-center");
    let width = $(window).width();
    if(width > 1300) {
        col.removeClass(['col-sm-8', 'offset-sm-2']);
        col.addClass(['col-sm-6', 'offset-sm-3']);
        console.log('changed');
    }
});