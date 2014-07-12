Router.map(function(){
	this.route('home',{
		path:'/'
	});
	this.route('stations',{
		path:'/stations'
	});
	this.route('trains',{
		path:'/trains'
	});
	this.route('maps',{
		path:'/maps'
	});
});

Router.configure({
	layoutTemplate:'layout_main'
});
