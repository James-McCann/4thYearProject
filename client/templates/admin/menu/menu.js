Template.add_menu.events({
	'submit .add_menu_form':function(){
		var name = event.target.name.value;
		var price = event.target.price.value;
		var description = event.target.description.value;

		var file = $('#menuImage').get(0).files[0];

		if(file) {
			fsFile = new FS.File(file);
			MenuItemImages.insert(fsFile, function (err, result) {
				if (!err) {
					var imageLocation = '/cfs/files/MenuItemImages/' + result._id;

					//Insecure package removed. Add function -  methods js to libs folder
					Meteor.call('addMenuItems', imageLocation, name, price, description);

				}

			});

				}else{

					var imageLocation = '/img/comingsoon.png';
					Meteor.call('addMenuItems', imageLocation, name, price, description);
				}


		FlashMessages.sendSuccess('Menu Item Added');
		Router.go('/admin/menu');

		return false;

	}
});


Template.edit_menu.events({
	'submit .edit_menu_form':function(){
		var name = event.target.name.value;
		var price = event.target.price.value;
		var description = event.target.description.value;

		var file = $('#menuImage').get(0).files[0];

		if(file){
			fsFile = new FS.File(file);
			MenuItemImages.insert(fsFile, function(err, result) {
				if(!err){

						var imageLocation = '/cfs/files/MenuItemImages/' + result._id;

						//Insecure package removed. Edit function -  methods js to libs folder
						Meteor.call('editMenuItems',this._id, imageLocation, name, price, description);

				}

			});

		} else {

			//without image
			var imageLocation = '/img/comingsoon.png';
			Meteor.call('editMenuItems',this._id, imageLocation, name, price, description);


		}

		FlashMessages.sendSuccess('Menu Item Updated');
		Router.go('/admin/menu');

		return false;

	}
});


Template.list_menu.events({
	'click .delete_menu': function(event){

		if(confirm("Are you sure?")){

			Meteor.call('removeMenuItem', this._id);

			FlashMessages.sendSuccess('Menu Item Deleted');
			return false;
		}
	}

});