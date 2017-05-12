(function(){
	
	(function(){
		var $liSp = $('li').has('ul');
				var $ulD=$liSp.children('ul').hide();

				// 每个底下有ul的li，都添加个span('>')
				$liSp.each(function(){
					var span = document.createElement('span');
					span.innerHTML = '&gt';
					$(this).append(span);
				})
				// 添加事件
				$liSp.on('mouseenter',function(){
					$(this).css({background:'#fff',color:'#000'});
					$(this).children('a').css({color:'#F14382'});
					$(this).children('ul').stop().show(300);
				})
				$liSp.on('mouseleave',function(){
					$(this).css({background:'#F14382',color:'#fff'});
					$(this).children('a').css({color:'#fff'})
					$(this).children('ul').stop().hide(300);
				})
	})
				
	
})(jQuery);