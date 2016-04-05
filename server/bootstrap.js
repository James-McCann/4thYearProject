
Meteor.startup(function(){

	if(Meteor.users.find().count() === 0) {

        var users = [{name: 'Customer', email: 'cs@email.com', roles:['view-menu'],points: 0},
                     {name: 'Admin', email: 'admin@email.com', roles:['admin'],points: 0}

        ];
        _.each(users, function(userData){
            var userid = Accounts.createUser({
                email:userData.email,
                password: 'test',
                username: userData.name,
                profile:{name:userData.name}
            });
            Meteor.users.update(
                {_id:userid},{$set: {'emails.0.verified':true}});
                 Roles.addUsersToRoles(userid, userData.roles);

        })

    }


});







