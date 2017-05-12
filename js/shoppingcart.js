require(['config'],function(){
	require(['jquery','common'],function(){
		$('#header').load('header.html #head');
		$('#footer').load('footer.html');

		var cookie=getCookie('goods');
		var cookies=cookie? JSON.parse(cookie) :[];
		var priceNum;
		if(cookies!=[]){
			var res=cookies.map(function(item,idx){
				priceNum=Number(item.price.substring(1))
				return `<div class="shopPay shopPay${idx}">
							<div><img src="${item.img}"></div>
							<div><p>${item.name}</p></div>
							<div><p>${item.price}</p></div>
							<div>
								<a  class="minus minus${idx}">-</a>
								<input type="text" value="${item.qty}" readonly>
								<a  class="add add${idx}">+</a>
							</div>
							<div><p>￥${priceNum*item.qty}</p></div>
							<div><span class="del del${idx}">移除</span></div>
						</div>`
			})
		}
		$('.pay .payList').append(res)

		// 细节东西之点击事件 加减号 数量变化
		$('.pay .payList .shopPay .add').click(function(){
			// DOM节点上的数据变化，
			var qty_val=$(this).siblings('input').attr('value');
			$(this).siblings('input').attr('value',++qty_val);
			// 修改cookie值
			var currentName=$(this).parents('.shopPay').find('p').eq(0).text();
			for(i=0;i<cookies.length;i++){
				if(cookies[i].name==currentName){
					cookies[i].qty++;
					$(this).parents('.shopPay').find('p').eq(2).text('￥'+cookies[i].qty*priceNum)
				}
			}
			setCookie('goods',JSON.stringify(cookies));
		})
		$('.pay .payList .shopPay .minus').click(function(){
			// DOM节点上的数据变化，
			var qty_val=$(this).siblings('input').attr('value');
			if(qty_val>0){
				$(this).siblings('input').attr('value',--qty_val);
			}else{
				$(this).siblings('input').attr('value',qty_val);
			}
			
			// 修改cookie值
			var currentName=$(this).parents('.shopPay').find('p').eq(0).text();
			for(i=0;i<cookies.length;i++){
				if(cookies[i].name==currentName){
					if(cookies[i].qty>0){
						cookies[i].qty--;
					}
					$(this).parents('.shopPay').find('p').eq(2).text('￥'+cookies[i].qty*priceNum)
				}
			}
			setCookie('goods',JSON.stringify(cookies));
		})

		// 点击‘移除’执行下面函数
		$('.pay .payList .del').click(function(){
			// 删除DOM节点
			var classIndex=$(this).attr('class').substring(7);
			$('.pay .payList')[0].removeChild($('.shopPay'+classIndex)[0]);
			// 重新写入cookie
			var currentName=$(this).parents('.shopPay').find('p').eq(0).text();
			for(i=0;i<cookies.length;i++){
				if(cookies[i].name==currentName){
					cookies.splice(i,1);
				}
			}
			setCookie('goods',JSON.stringify(cookies));
		})


	})
})