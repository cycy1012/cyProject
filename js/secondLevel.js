require(['config'],function(){
	require(['jquery','banner','header'],function(jqy,ban,header){
		$(function(){
			$('#header').load('header.html',function(){
				$('#header img').each(function(index,ele){
					$(this).attr('src','../'+($(this).attr('src')));
					// $(this).attr('src',($(this).attr('src')).substr(3));
				})
			// 执行头部js代码
				var $liSp = $('li').has('ul');
				var $ulD=$liSp.children('ul').hide();
				console.log( $ulD)
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


			// 引入banner
			$('#banner').cylbt({
				imgs:['../images/banner1.png','../images/banner2.png','../images/banner3.png','../images/banner4.png'],
				type:'fade',
				// 默认显示第几张图片
				showHowManyTimes:true,
			});
			// 引入侧边栏
			$('#shoplist').load('shoplistRight.html');
			// 引入脚部
			
			$('#footer').load('footer.html',function(){
				$('#footer img').each(function(index,ele){
					$(this).attr('src','../'+($(this).attr('src')));
			 		// $(this).attr('src',($(this).attr('src')).substr(3));
				})
 			})
		})
	})
})