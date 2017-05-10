require(['config'],function(){
	require(['jquery'],function(){
		$('#header').load('header.html #head');
		$('#footer').load('register.html footer')
	})
})