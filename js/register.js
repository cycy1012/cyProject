require(['config'],function(){
	require(['jquery'],function(){
		$(function(){
			$('#header').load('header.html #head',function(){
				$('#header a').each(function(index,ele){
					$(this).attr('href','../'+($(this).attr('href')));
					// $(this).attr('href',($(this).attr('href')).substr(3));
				})
			})	
		})
	})
})