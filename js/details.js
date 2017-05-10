require(['config'],function(){
	require(['jquery','fangda'],function(){
		$(function(){
				$('#header').load('header.html',function(){
					$('#header img').each(function(idx,ele){
						$(this).attr('src','../'+($(this).attr('src')));
					})
				})
				$('#shoplistRight').load('shoplistRight.html')
				// 点击小图切换中图src
				// $smPic是小图的父元素
				var $smPic=$('.shopDetail .left .smPic');
				// 绑定鼠标移入事件，点击子元素img才触发
				$smPic.on('mouseenter','img',function(){
					// 获取小图src取代中图src
					$('.shopDetail .left .midPic img').attr('src',$(this).attr('src'))
				})

				// 中图$midPic
				var $midPic=$('.shopDetail .left .midPic');
				$midPic.gdszoom({position:'right'});
				
		})
		
	})
})