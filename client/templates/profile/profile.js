

//Template.profile.events({
//    'submit .customer_profile_form': function(){
//        alert('Are you sure you want to remove your account' +' '+ this._id );
//        Meteor.users.remove({ _id: this._id }, function (error, result) {
//            if (error) {
//                console.log("Error removing user: ", error);
//            } else {
//                console.log("user removed: " + result);
//            }
//        });
//        return false;
//    }
//
//
//});