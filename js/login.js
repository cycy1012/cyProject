require(['config'],function(){
	require(['jquery','confirm',],function(){
		$(function(){
			$('#header').load('header.html #head');
			$('#footer').load('register.html footer');

			$('#btn').click(function(){

		        $.post('../php/login.php',{
		          email: $('#email').val(),
		          password: $('#password').val()
		        }, function(response){
		        	var $obj = eval('(' + response + ')');
		        	if($obj.state){
		            window.location.href = '../index.html';
		          	} else {
		            alert($obj.message);
		          	}
		        })        
		    })
		})
		
	})
})