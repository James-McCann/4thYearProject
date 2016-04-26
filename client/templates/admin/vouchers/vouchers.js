Template.searchBox.events({

    'submit .customer_rewards_form' : function(){
        var points = event.target.pickerPoints.value;
        var id = this._id.toString().substring(0,17);
        //alert('points: '+ points + ' '+ id);
        Meteor.call('addPoints', id, points);

       return false;

    }

});
