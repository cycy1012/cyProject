require(['config'],function(){
	require(['jquery','banner','header','lazy'],function(jqy,ban,header){
		$(function(){
			// 引用头
			$('#header').load('html/header.html',function(){
				$('#header img').each(function(index,ele){
					// $(this).attr('src','../'+($(this).attr('src')));
					$(this).attr('src',($(this).attr('src')).substr(3));
				})
			// 执行头部js代码
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
			$('#banner').cylbt({
				imgs:['./images/banner1.png','./images/banner2.png','./images/banner3.png','./images/banner4.png'],
				type:'fade',
				// 默认显示第几张图片
				showHowManyTimes:true,
			});
			// 引入shoplist
			$('#shoplist').load('html/shoplistRight.html',function(){
				// 点击购物车跳转界面
				$('.shoppingcartLink').click(function(){
					window.location.href = 'html/shoppingcart.html';
				})
			});
			// 引入脚部
			$('#footer').load('html/footer.html',function(){
				$('#footer img').each(function(index,ele){
					// $(this).attr('src','../'+($(this).attr('src')));
					$(this).attr('src',($(this).attr('src')).substr(3));
				})
			});

			 $('img').lazyload({effect: "fadeIn",threshold :-50,event:'scroll'});
			 
			
			
			
		})
		
	})
})




















