Template.posts.events({
    'click .delete_post': function(event){

        if(confirm("Are you sure you want to delete the post?")){

            Meteor.call('removePost', this._id);

            FlashMessages.sendSuccess('Post Deleted');
            return false;
        }
    }

});