Meteor.startup(function () {
  // code to run on server at startup
  if(!Documents.findOne()){
  	//No Docs yet
  	Documents.insert({title:"Untitled Document"});
  }
});

Meteor.publish("documents", function(){
	return Documents.find({
		$or:[
  		{isPrivate:{$ne:true}},
  		{owner:this.userId}
		]
	});
})

Meteor.publish("editingUsers",function(){
	return EditingUsers.find({});
});

Meteor.publish("groups", function(){
  return Groups.find({},{sort: {createdAt: -1}});
});  

Meteor.publish("tasks",function(){
  return Tasks.find({"owner.id":this.userId},{sort: {createdAt: -1}});
});  

Meteor.publish("notify",function(){
  return Notify.find({});
});

if (Meteor.isClient) {
  	Meteor.startup(function() {
    		GoogleMaps.load();
  	});
}


//------------------------------get_loc-----------------------
/*	return Location.find({},{sort: {createdAt: -1}});
});*/

Meteor.publish("images", function() {
  return Collections.Images.find();
});


Meteor.publish("files", function() {
  return Collections.Files.find();
});

Meteor.publish("audios",function(){
  return Collections.Audios.find();
});

Meteor.publish("videos",function(){
  return Collections.Videos.find();
});

Meteor.publish("threads",function(){
  return Thread.find();
})