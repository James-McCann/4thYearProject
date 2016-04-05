/**
 * Created by User on 28/01/2016.
 */

Meteor.publish("MenuItems", function(){

    return MenuItems.find();

});


Meteor.publish("MenuItemImages", function(){

    return MenuItemImages.find();

});


Meteor.publish("Promotions", function(){

    return Promotions.find();

});


Meteor.publish("PromotionsImages", function(){

    return PromotionsImages.find();

});


Meteor.publish("Markers", function(){

    return Markers.find();

});




Meteor.publish('allUsersData', function () {
    return Meteor.users.find({}, {fields: {profile: 1,
        'points':1,
        'roles':1,
        'registered_emails.address':1,
        'services.google.picture':true,
        "services.facebook.id":true,
        'services.twitter.profile_image_url_https':true}});
});



Meteor.publish("Posts", function(){

    return Posts.find();

});


Meteor.publish("HeaderConfig", function(){

    return HeaderConfig.find();

});


Meteor.publish("HeaderLogo", function(){

    return HeaderLogo.find();

});

