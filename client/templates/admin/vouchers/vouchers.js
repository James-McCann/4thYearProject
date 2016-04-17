Template.voucher.events({

    'submit .customer_rewards_form' : function(){
        var points = event.target.pickerPoints.value;
        //alert('Award: '+points+' to '+this._id.profile.name);
       Meteor.call('addPoints', this._id, points);

       return false;

    }

});
