require(['config'],function(){
	require(['jquery','confirm'],function(){
		$(function(){
			$('#header').load('header.html #head',function(){
				$('#header a').each(function(index,ele){
					$(this).attr('href','../'+($(this).attr('href')));
					// $(this).attr('href',($(this).attr('href')).substr(3));
				})
			})	

			$('#submit').click(function(){
				console.log(1);
				$.post('../php/register.php',{
					email: $('#email').val(),
					password: $('#password').val(),
					phone: $('#phone').val()
				}, function(response){
					var $obj = eval('(' + response + ')');
					if($obj.state){
						alert('注册成功！');
					} else {
						alert($obj.message);
					}
				})				
			})
		})
	})
})