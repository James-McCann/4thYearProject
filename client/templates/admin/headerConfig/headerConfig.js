Template.add_header.events({
    'submit .add_header_form':function(){
        var headerTitle = event.target.headerTitle.value;
        var headerSubTitle = event.target.headerSubTitle.value;
        var headerSubText = event.target.headerSubText.value;

        var file = $('#headerLogo').get(0).files[0];

        if(file) {
            fsFile = new FS.File(file);
            HeaderLogo.insert(fsFile, function (err, result) {
                if (!err) {
                    var imageLocation = '/cfs/files/HeaderLogo/' + result._id;

                    //Insecure package removed. Add function -  methods js to libs folder
                    Meteor.call('addHeader', imageLocation, headerTitle, headerSubTitle, headerSubText);

                }

            });

        }

        FlashMessages.sendSuccess('Header Item Added');
        Router.go('/admin/headerConfig');

        return false;

    }
});


Template.edit_header.events({
    'submit .edit_header_form':function(){
        var headerTitle = event.target.headerTitle.value;
        var headerSubTitle = event.target.headerSubTitle.value;
        var headerSubText = event.target.headerSubText.value;

        var file = $('#headerLogo').get(0).files[0];

        if(file){
            fsFile = new FS.File(file);
            HeaderLogo.insert(fsFile, function(err, result) {
                if(!err){

                    var imageLocation = '/cfs/files/HeaderLogo/' + result._id;


                    Meteor.call('editHeader',this._id, imageLocation, headerTitle, headerSubTitle, headerSubText);

                }

            });

        } else {

            //without image
            var imageLocation = '/img/comingsoon.png';
            Meteor.call('editHeader',this._id, imageLocation, headerTitle, headerSubTitle, headerSubText);


        }

        FlashMessages.sendSuccess('Header Updated');
        Router.go('/admin/headerConfig');

        return false;

    }
});




Template.headerConfig.events({
    'click .delete_header': function(event){

        if(confirm("Are you sure?")){

            Meteor.call('removeHeader', this._id);

            FlashMessages.sendSuccess('Header Deleted');
            return false;
        }
    }

});
