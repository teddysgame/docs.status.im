$(document).ready(function () {
    if($('#sidebar').length){
        $('.sidebar-submenu').each(function (index, element) {
            $(this).find('.sidebar-title').on('click', function () {
                var li = $(this).next('ul').find('li');
                var ulHeight = li.height() * li.length + li.length * 10;
                if($(this).parent().hasClass('active')){
                    $(this).next('ul').height(0);
                }else{
                    $(this).next('ul').height(ulHeight);
                }
                $(this).parent().toggleClass('active');
            });
        });
    }
});