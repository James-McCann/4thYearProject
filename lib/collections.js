//App Collections

/////////////////////////////////////////////////////////////////////////////////Menu Items collection


MenuItems = new Mongo.Collection('MenuItems');

MenuItems.attachSchema(new SimpleSchema({

	name: {
		type: String,
		max: 100
	},
	price: {
		type: String,
		max: 100
	},
	description: {
		type: String,
		max: 500
	},
	userId: {
		type: String,
		autoValue: function(){ return Meteor.userId() }
	},
	menuImage: {
		type: String,
		max: 100,
		optional: true
	}
	
}));



MenuItemImages = new FS.Collection('MenuItemImages', {
		stores:[new FS.Store.GridFS('MenuItemImages')]
});

MenuItemImages.allow({
	insert:function(fileID, doc){
		return true;
	},
	update:function(fileID, doc, fields, modifier){
		return true;
	},
	remove:function(fileID, doc){
		return true;
	},
	download:function(fileID, doc){
		return true;
	}
});





/////////////////////////////////////////////////////////////////////////////////Promotions collection

Promotions = new Mongo.Collection('Promotions');

Promotions.attachSchema(new SimpleSchema({

	promotionName: {
		type: String,
		max: 100
	},
	promotionPrice: {
		type: String,
		max: 100
	},
	promotionImage: {
		type: String,
		max: 100,
		optional: true
	},
	createdAt: {
		type:Date,
		autoValue: function(){return new Date()}
	}

}));

    var promotionsImages = new FS.Store.S3('PromotionsImages', {
		/* REQUIRED */
		accessKeyId: "AKIAJDQLPA5T76HJDANQ",
		secretAccessKey: "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",
		bucket: "qsrapp"
});

PromotionsImages = new FS.Collection('PromotionsImages', {
	stores:[promotionsImages],
	filter: {
		allow: {
			contentTypes: ['image/*']
		}
	}
});


PromotionsImages.allow({
	insert:function(fileID, doc){
		return true;
	},
	update:function(fileID, doc, fields, modifier){
		return true;
	},
	remove:function(fileID, doc){
		return true;
	},
	download:function(fileID, doc){
		return true;
	}
});



/////////////////////////////////////////////////////////////////////////////////Map markers collection


Markers = new Mongo.Collection('Markers');


Markers.attachSchema(new SimpleSchema({

	lat:{
		type: Number,
		decimal: true
	},

	lng:{
		type: Number,
		decimal: true
	},
	title:{
		type: String,
		max: 100,
		optional: true
	},
	description:{
		type: String,
		max: 100,
		optional: true
	}
}));

Markers.allow({
	insert:function(){
	  return true;
	},
	update:function(){
		return true;
	},
	remove:function(){
		return true;
	}

});


/////////////////////////////////////////////////////////////////////////////////Post collection

Posts = new Mongo.Collection("Posts");

Posts.attachSchema(new SimpleSchema({

	postTitle:{
		type:String,
		max:100
	},
	post:{
		type: String,
		max: 500
	},
	userId:{
		type:String,
		autoValue: function(){return Meteor.userId()},
		optional:true
	},
	username:{
		type:String,
		autoValue: function(){return Meteor.users.findOne({_id: this.userId}).username || Meteor.users.findOne ({_id: this.userId}).profile.name},
		optional: true
	},
	postCreatedAt:{
		type:Date,
		autoValue: function(){return new Date()}
	}

}));

Posts.allow({
	insert:function(userId, doc){
		return true;
	}
});


//HeaderConfig Collection
HeaderConfig = new Mongo.Collection("HeaderConfig");

HeaderConfig.attachSchema(new SimpleSchema({

	headerTitle:{
		type:String,
		max:100
	},
	headerSubTitle:{
		type: String,
		max: 100
	},
	headerSubText:{
		type: String,
		max: 100
	},
	headerImage: {
		type: String,
		max: 100,
		optional:true
	}

}));

HeaderLogo = new FS.Collection('HeaderLogo', {
	stores:[new FS.Store.GridFS('HeaderLogo')]
});

HeaderLogo.allow({
	insert:function(fileID, doc){
		return true;
	},
	update:function(fileID, doc, fields, modifier){
		return true;
	},
	remove:function(fileID, doc){
		return true;
	},
	download:function(fileID, doc){
		return true;
	}
});

///////////////////////////////////////////////////////////////////////////////////////////////users
Meteor.users.allow({
	remove: function (userId, doc) {
		return true;
	}
});


//Search Users
UsersIndex = new EasySearch.Index({
	collection: Meteor.users,
	fields: ['username', 'profile.name'],
	engine: new EasySearch.MongoDB()
});