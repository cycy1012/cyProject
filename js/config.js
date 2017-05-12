requirejs.config({
	paths:{
		'jquery':'jquery-3.1.1',
		'banner':'banner',
		'header':'header',
		'fangda':'../lib/jquery-gdszoom/jquery.gdszoom',
		'fly':'jquery.fly',
		'lazy':'jquery.lazyload',
		'confirm':'jquery-confirm',
		'common':'common',
		


	},
	shim:{
		// lbt依赖jquery
		'banner':['jquery'],
		'header':['jquery'],
		'fangda':['jquery'],
		'fly':['jquery'],
		'lazy':['jquery'],
		'confirm':['jquery'],
		'common':['jquery'],

	}

}); 

