Template.voucher.events({


    'submit .customer_rewards_form' : function(){
        //alert(this._id);
        var points = event.target.pickerPoints.value;
        //alert(points);
       Meteor.call('addPoints', this._id, points);
       return false;

    }

});
