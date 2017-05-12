require(['config'],function(){
	require(['jquery','fangda','fly','common',],function(){
		$(function(){
				$('#header').load('header.html')
				$('#shoplistRight').load('shoplistRight.html',function(){
					$('.shoppingcartLink').click(function(){
						window.location.href = 'shoppingcart.html';
					})
				});
				$('#footer').load('footer.html');

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
				
				$('.buyin').on('click', addCart);
				function addCart(event) {
					var offset = $('.icon-shoppingcart').offset(), flyer = $('<img class="u-flyer" src="'+$midPic.children('img').attr('src')+'"/>');
					flyer.css({width:80,height:80,})
					flyer.fly({
					    start: {
					        left: event.pageX-window.scrollX,
					        top: event.pageY-window.scrollY
					    },
					    end: {
					        left: offset.left-window.scrollX,
					        top: offset.top-window.scrollY,
					        width: 20,
					        height: 20
					    }
					});
				}

				// cookie的存储
				var cookie=getCookie('goods');
				var cookies= cookie? JSON.parse(cookie) :[];
				var hasgoods=false;

				$('.buyin').click(function(){

					var $price=$('.shopDetail .right .redWord').text();
					var $img=$('.shopDetail .midPic img').attr('src');
					var $name=$('.shopDetail .right .name').text();

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