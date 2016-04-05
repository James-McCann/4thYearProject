Meteor.subscribe("MenuItems");

Meteor.subscribe("MenuItemsImages");

Meteor.subscribe("Promotions");

Meteor.subscribe("PromotionsImages");

Meteor.subscribe("Markers");

//Meteor.subscribe('allUsers');

Meteor.subscribe('allUsersData');

Meteor.subscribe("Posts");

Meteor.subscribe("HeaderConfig");

Meteor.subscribe("HeaderLogo");


Meteor.startup(function () {
	AccountsEntry.config({
		homeRoute: '/',
		dashboardRoute: '/',
		waitEmailVerification: false,
		extraSignUpFields: [{
			field:"username",
			label: "Username",
			type:"text"
		}]


	});
});

Meteor.users.deny({
	update() {
		return true;
	}
});

Meteor.startup(function() {
	GoogleMaps.load();
});


