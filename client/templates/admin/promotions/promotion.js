Template.add_promotion.events({

	'submit .add_promotion_form':function(){

		var name = event.target.name.value;
		var price = event.target.price.value;

		var file = $('#promotionImage').get(0).files[0];

		if(file) {
			fsFile = new FS.File(file);
			PromotionsImages.insert(fsFile, function (err, result) {
				if (!err) {
					var imageLocation = '/cfs/files/PromotionsImages/' + result._id;

					//Insecure package removed. Add function -  methods js to libs folder
					Meteor.call('addPromotionItems', imageLocation, name, price);

				}

			});

				}else{

					var imageLocation = '/img/comingsoon.png';
					Meteor.call('addPromotionItems', imageLocation, name, price);
				}


		FlashMessages.sendSuccess('Promotion Added');
		Router.go('/admin/promotion');

		return false;

	}
});


Template.edit_promotion.events({
	'submit .edit_promotion_form':function(){
		var name = event.target.name.value;
		var price = event.target.price.value;


		var file = $('#promotionImage').get(0).files[0];

		if(file){
			fsFile = new FS.File(file);
			PromotionsImages.insert(fsFile, function(err, result) {
				if(!err){
						var imageLocation = '/cfs/files/PromotionsImages/' + result._id;

						//Insecure package removed. Edit function -  methods js to libs folder
						Meteor.call('editPromotion',this._id, imageLocation, name, price);

				}

			});

		} else {

			//without image
			var imageLocation = '/img/comingsoon.png';
			Meteor.call('editPromotion',this._id, imageLocation, name, price);


		}

		FlashMessages.sendSuccess('Promotion Updated');
		Router.go('/admin/promotion');

		return false;

	}
});


Template.list_promotion.events({
	'click .delete_promotion': function(event){
		if(confirm("Are you sure?")){

			Meteor.call('removePromotion', this._id);

			FlashMessages.sendSuccess('Promotion Deleted');
			return false;
		}
	}

});