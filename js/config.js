requirejs.config({
	paths:{
		'jquery':'jquery-3.1.1',
		'banner':'banner',
		'header':'header',

	},
	shim:{
		// lbt依赖jquery
		'banner':['jquery'],
		'header':['jquery'],
	}

}); 

