/**
 * Created by User on 03/02/2016.
 */


Meteor.methods({
    //Add menu item method
    addMenuItems: function(imageLocation, name, price, description){

                    //insert menuItems and image
                    MenuItems.insert({
                        name: name,
                        price: price,
                        description: description,
                        menuImage: imageLocation
                    });
                },



    //Edit menu item function
    editMenuItems: function(id, imageLocation, name, price, description){

                    //Update MenuItem
                    MenuItems.update({
                        _id: id
                    },{
                        $set:{
                            name: name,
                            price: price,
                            description: description,
                            menuImage: imageLocation
                        }
                    });
                },

    //Remove Menu Item function
    removeMenuItem: function(id){

        MenuItems.remove(id);

    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////End MenuItems
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////Promotions

    addPromotionItems: function(imageLocation, name, price){

        //insert menuItems and image
        Promotions.insert({
            promotionName: name,
            promotionPrice: price,
            promotionImage: imageLocation
        });
    },

    editPromotion: function(id, imageLocation, name, price){

        //Update MenuItem
        Promotions.update({
            _id: id
        },{
            $set:{
                promotionName: name,
                promotionPrice: price,
                promotionImage: imageLocation
            }
        });
    },

    removePromotion: function(id){

        Promotions.remove(id);

    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////End Promotions

    addMarker: function(lat, lng){

        Markers.insert({
            lat: lat,
            lng: lng

        });

    },

    updateMarker: function(id, lat, lng, title){
        Markers.update({
            _id: id
        },{
            $set:{
                lat: lat,
                lng: lng,
                title:title
            }
        });
    },


    removeMarker: function(id){

        Markers.remove(id);

    },


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Posts

    removePost: function(id){
        Posts.remove(id);
    },


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Header Config

    addHeader: function(imageLocation, headerTitle, headerSubTitle, headerSubText){


        HeaderConfig.insert({
            headerTitle: headerTitle,
            headerSubTitle: headerSubTitle,
            headerSubText: headerSubText,
            headerImage: imageLocation
        });
    },

    editHeader: function(id, imageLocation, headerTitle, headerSubTitle, headerSubText){


        HeaderConfig.update({
            _id: id
        },{
            $set:{
                headerTitle: headerTitle,
                headerSubTitle: headerSubTitle,
                headerSubText: headerSubText,
                headerImage: imageLocation
            }
        });
    },

    removeHeader: function(id){
        HeaderConfig.remove(id);
    },

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Voucher points

    addPoints: function(id, points){
        Meteor.users.update({
            _id: id
        },{
            $inc:{

                    points: parseInt(points)

            }
        })

    }




});
