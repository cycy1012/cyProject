require(['config'],function(){
	require(['jquery'],function(){
		$(function(){
			$('#header').load('header.html #head');
			$('#footer').load('register.html footer')
		})
		
	})
})