/*!
 * jQuery loadMask plugin
 * Version 1.1 - 2015.08.21
 * Requires jQuery v1
 *
 * Examples at: https://github.com/lyonlin/jquery.loadMask
 * Copyright (c) 2015 by Lyon Lin
 * Dual licensed under the MIT licenses:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function($) {

    var init = function(el, opts) {
		$(el).addClass('loadMask').html('<div></div>');
    	// 圖片停用
		if(opts.image=='none')
    	{
    		$(el).css('cursor', 'wait').html('');
    	}
		// 自訂圖片
    	else if(opts.image!='')
        {            
    		$(el).find("div").css("background-image", "url(" + opts.image + ")");
    		$(el).find("div").css("height", opts.height + "px");
    		$(el).find("div").css("width", opts.width + "px");
        }  		
    	// 自訂背景色
    	if(opts.bgcolor!='')
        {            
    		$(el).css("background-color", opts.bgcolor);
        }
        // 關閉MASK
    	setTimeout(function(){ $(el).fadeOut(opts.speed); }, opts.timeout);
    };
    
    $.fn.loadMask = function(opts) {
    		if(typeof opts=='undefined')
			opts = {};
		return this.each(function() {  
			init(this,{
				image : typeof opts.image  !== 'undefined' ? opts.image  : '',
				height : typeof opts.height  !== 'undefined' ? opts.height  : 120,
				width : typeof opts.width  !== 'undefined' ? opts.width  : 120,
				bgcolor: typeof opts.bgcolor !== 'undefined' ? opts.bgcolor : '',
				timeout: typeof opts.speed !== 'undefined' ? opts.speed : 500,
				speed: typeof opts.speed !== 'undefined' ? opts.speed : 1000		
			});
		});		
    };

})(jQuery);
