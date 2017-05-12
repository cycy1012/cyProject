require(['config'],function(){
	require(['jquery','lazy','common',],function(){
		$(function(){
			$('#header').load('header.html');
			$('#shoplist').load('shoplistRight.html',function(){
				$('.shoppingcartLink').click(function(){
					window.location.href = 'shoppingcart.html';
				})
			});
			$('#footer').load('footer.html');
			
			

			$('.allshoplist .container .goods').mouseenter(function(){

				$(this).find('.add_btn').stop().animate({opacity:1});
				// $(this).stop().animate({height:510});
				
			})
			$('.allshoplist .container .goods').mouseleave(function(){
				
				$(this).find('.add_btn').stop().animate({opacity:0});
				// $(this).stop().animate({height:482});
			})
			 $('img').lazyload({effect: "fadeIn",threshold :-150,event:'scroll'});

			// cookie的存储
				var cookie=getCookie('goods');
				var cookies= cookie? JSON.parse(cookie) :[];
				var hasgoods=false;

				$('.add_btn').click(function(){

					var $price=$(this).parent().find('.price').text();
					var $img=$(this).parent().find('img').attr('data-original');
					var $name=$(this).parent().find('.name').text();
					console.log($price,$img,$name)
					for(i=0;i<cookies.length;i++){
						if(cookies[i].name==$name){
							hasgoods=true;
							cookies[i].qty++;
						}
					}

					if(hasgoods==false){
						// 继续商品信息
						var obj={
							img:$img,
							name:$name,
							price:$price,
							qty:1,
						}
						cookies.push(obj);
					}
					setCookie('goods',JSON.stringify(cookies));
				})
		})

	})
})