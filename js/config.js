requirejs.config({
	paths:{
		'jquery':'jquery-3.1.1',
		'banner':'banner',
		'header':'header',
		'fangda':'../lib/jquery-gdszoom/jquery.gdszoom',


	},
	shim:{
		// lbt依赖jquery
		'banner':['jquery'],
		'header':['jquery'],
		'fangda':['jquery'],
		
	}

}); 

