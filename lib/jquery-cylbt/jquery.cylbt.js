(function($){
		$.fn.cylbt=function(option){
			var defaults = {
				// 滚动间隔时间
				duration:2500,
				// 当前索引值（默认0）
				index:0,
				type:'fade',
				thumbnail:false,
				buttonBox:false,
				showHowManyTimes:false,	
			}

			this.each(function(){
				// jquery扩展对象$.extend()
				var opt = $.extend({},defaults,option);
				// console.log(opt.type)
				$self=$(this)
				init();
				var $ul;
				// 初始化
				function init(){
					$self.addClass('banner');
					$ul=$('<ul/>');
					
					$ul.html(opt.imgs.map(function(item){
						return `<li><img src="${item}"></li>`
					}).join(''));
					$self.append($ul);

					// 根据动画播放类型，改变DOM节点
					if(opt.type == 'fade'){
						$ul.children().css({position:'absolute',opacity:0})
						$ul.children().eq(0).css({opacity:1})
					}else if(opt.type=='horizontal'){
						$ul.css({width:opt.imgs.length*opt.width})
						$ul.children().css({float:'left'})
					}

					// 根据是否显示小图，改变DOM节点
					if(opt.thumbnail== true){
						$smallBox=$('<div/>');
						$smallUl=$('<ul/>');
						$smallUl.html(opt.imgs.map(function(item){
							return `<li><img src="${item}"></li>`
						}).join(''));
						$smallBox.append($smallUl);
						document.body.appendChild($smallBox.get(0));

						// 样式  应该放在外面用类名联系，懒得修改了
						$smallBox.css({width:opt.width,height:opt.height/4,overflow:'hidden'})
						$smallUl.children().css({float:'left',width:opt.width/4,height:opt.height/4});
						$smallUl.find('img').css({width:opt.width/4,height:opt.height/4});

						$smallUl.children().css({opacity:0})
						$smallUl.children().eq(0).css({opacity:1})
					}
					// 根据是否显示左右按钮，改变DOM节点
					if(opt.buttonBox==true){
						// 添加节点 和 样式
						$leftButton = $('<span/>');
						$rightButton = $('<span/>');
						$leftButton.html('&lt').addClass('prev').appendTo($self);
						$rightButton.html('&gt').addClass('next').appendTo($self);
						
						$leftButton.on('click',function(){
							clearInterval(timer)
							opt.index--;
							showPic();
							lrbtn();
						});
						$rightButton.on('click',function(){
							clearInterval(timer)
							opt.index++
							showPic();
							lrbtn();
						})	
					}
					// 根据是否显示第几张图，改变DOM节点
					if(opt.showHowManyTimes==true){
						$listP = $('<p/>');
						$listP.html(opt.imgs.map(function(){
							return `<span></span>`
						}).join(''))
						$listP.children().eq(0).addClass('active');
						$listP.addClass('page').appendTo($self)
					}

					// 轮播
					var timer=setInterval(function(){
						opt.index++;
						showPic();
					},opt.duration)

					function lrbtn(){
						timer=setInterval(function(){
							opt.index++;
							showPic();
						},opt.duration)
					}
				}

				function showPic(){
					// index值变化
					if(opt.index>opt.imgs.length-1){
						opt.index=0;
					}else if(opt.index<0){
						opt.index=opt.imgs.length-1
					}
					if(opt.showHowManyTimes==true){
						$listP.children().eq(opt.index).addClass('active').siblings().removeClass();
					}
					

					// 如果有小图，小图的动画播放
					if(opt.thumbnail== true){	
						$smallUl.children().eq(opt.index).animate({opacity:1}).siblings().animate({opacity:0.2})		
					}

					// 轮播图的动画类型
					if(opt.type == 'vertial'){
						$ul.animate({top:-opt.height*opt.index})
					}else if(opt.type =='fade'){
						$ul.children().eq(opt.index).animate({opacity:1}).siblings().animate({opacity:0})			
					}else if(opt.type=='show'){
						$ul.css({top:-opt.height*opt.index});
					}else if(opt.type=='horizontal'){
						$ul.animate({left:-opt.width*opt.index})
					}

				}
				
				return this;
			});
		}
})(jQuery);
