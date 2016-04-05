Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
	waitOn: function(){
		return Meteor.subscribe('MenuItems');
	}

});


Router.onBeforeAction('loading');



//Home route
Router.map(function(){
	this.route('home', {
        path: '/',
        template: 'home'

	});


//Contact route

	this.route('contact');


//Posts route

		this.route('posts', {
			path: 'posts',
			template: 'posts',
			data: function(){
				templateData = {
					Posts: Posts.find({},{sort:{postCreatedAt: -1}})
					//HeaderConfig: HeaderConfig.find()
				};
				return templateData;
			},
			onBeforeAction: function(){
				if(!Meteor.user()){
					Router.go('/');
				}
				this.next();
			}

		});



	//MenuItems route

	this.route('menu', {
		path: '/menu',
		template: 'menu',
		data: function(){
			templateData = {
				MenuItems: MenuItems.find(),
				//HeaderConfig: HeaderConfig.find()
			};
			return templateData;
		}
	});



	this.route('list_menu', {
        path: '/admin/menu',
        template: 'list_menu',
        data: function(){
        	templateData = {
        		MenuItems: MenuItems.find(),
				//HeaderConfig: HeaderConfig.find()
        	};
        	return templateData;
        },
        onBeforeAction: function(){
        	if(!Roles.userIsInRole(Meteor.user(), ['admin'])){
				Router.go('/');
        	}
			this.next();
        }
	});

	this.route('add_menu', {
        path: '/admin/menu/add',
        template: 'add_menu',
        onBeforeAction: function(){
			if(!Roles.userIsInRole(Meteor.user(), ['admin'])){
        		Router.go('/');
        	}
        	this.next();
        }
	});

	this.route('edit_menu', {
        path: '/admin/menu/:_id/edit',
        template: 'edit_menu',
        data: function(){
        	var currentMenuItem = this.params._id;
        	return MenuItems.findOne({_id: currentMenuItem});
        },

        onBeforeAction: function(){
			if(!Roles.userIsInRole(Meteor.user(), ['admin'])){
        		Router.go('/');
        	}
        	this.next();
        }
	});



//promotion


	//Promotion route

	this.route('promotion', {
		template: 'promotion',
		data: function(){
			templateData = {
				Promotions: Promotions.find(),
				//HeaderConfig: HeaderConfig.find()
			};
			return templateData;
		}
	});

	this.route('list_promotion', {
		path: '/admin/promotion',
		template: 'list_promotion',
		data: function(){
			templateData = {
				Promotions: Promotions.find(),
				//HeaderConfig: HeaderConfig.find()
			};
			return templateData;
		},
		onBeforeAction: function(){
			if(!Roles.userIsInRole(Meteor.user(), ['admin'])){
				Router.go('/');
			}
			this.next();
		}
	});


	this.route('add_promotion', {
		path: '/admin/promotion/add',
		template: 'add_promotion',
		onBeforeAction: function(){
			if(!Roles.userIsInRole(Meteor.user(), ['admin'])){
				Router.go('/');
			}
			this.next();
		}
	});

	this.route('edit_promotion', {
		path: '/admin/promotion/:_id/edit',
		template: 'edit_promotion',
		data: function(){
			var currentPromotion = this.params._id;
			return Promotions.findOne({_id: currentPromotion});
		},

		onBeforeAction: function(){
			if(!Roles.userIsInRole(Meteor.user(), ['admin'])){
				Router.go('/');
			}
			this.next();
		}
	});



	//Map route
	this.route('map',{
		path:'/map',
		template: 'map'
	});


	this.route('add_marker', {
		path: '/admin/marker/add',
		template: 'add_marker',
		onBeforeAction: function(){
			if(!Roles.userIsInRole(Meteor.user(), ['admin'])){
				Router.go('/');
			}
			this.next();
		}

	});

//Header
	this.route('headerConfig', {
		path: '/admin/headerConfig',
		template: 'headerConfig',
		data: function(){
			templateData = {
				HeaderConfig: HeaderConfig.find()
			};
			return templateData;
		},
		onBeforeAction: function(){
			if(!Roles.userIsInRole(Meteor.user(), ['admin'])){
				Router.go('/');
			}
			this.next();
		}
	});

	//this.route('add_headerConfig', {
	//	path: '/admin/headerConfig/add',
	//	template: 'add_header',
	//	onBeforeAction: function(){
	//		if(!Roles.userIsInRole(Meteor.user(), ['admin'])){
	//			Router.go('/');
	//		}
	//		this.next();
	//	}
	//});
    //
	//this.route('edit_header', {
	//	path: '/admin/headerConfig/:_id/edit',
	//	template: 'edit_header',
	//	data: function(){
	//		var currentHeader = this.params._id;
	//		return HeaderConfig.findOne({_id: currentHeader});
	//	},
    //
	//	onBeforeAction: function(){
	//		if(!Roles.userIsInRole(Meteor.user(), ['admin'])){
	//			Router.go('/');
	//		}
	//		this.next();
	//	}
	//});


	//Reward points
	this.route('voucher', {
		path: '/voucher',
		template: 'voucher',
		onBeforeAction: function(){
			if(!Roles.userIsInRole(Meteor.user(), ['admin'])){
				Router.go('/');
			}
			this.next();
		},
		waitOn: function() {
			return Meteor.subscribe('allUsersData');
		},
		data: function() {
			return {allUsersData: Meteor.users.find({})};
		}

	});

	//profile
	this.route('profile', {
		path: '/profile',
		template: 'profile',
		onBeforeAction: function(){
			if(!Meteor.user()){
				Router.go('/');
			}
			this.next();
		},

	});

});





