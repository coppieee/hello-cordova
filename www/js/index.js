(function($){
    'use strict';
    document.addEventListener('deviceready',function(){
        $(function(){
        	$('.button').click(function(){
        		var $a = $(this);
        		var id = $a.attr('data-to');
        		var $target = $(id);
        		$target.find('~.show').removeClass('show');

        		$(id).addClass('show');
        	});
        });
    }, false);
})(jQuery);