
Template.groupDiscuss.onCreated(function(){
    var self = this;
    this.autorun(function(){
        self.subscribe('threads');
    });

});

Template.groupdiscussion.events({
    "submit .new-post": function(event){
        event.preventDefault();
        var text = event.target.commentbox.value;
        //alert(text);
        Meteor.call("addThread",text);
        event.target.commentbox.value='';
    }
});

Template.postMessage.helpers({
    'message':function(){
        
        //return Thread.find({},{sort : {createdAt:-1} }); 
        return Thread.find();
    },
    'count':function(){
        return Thread.find().count();
    },
    /*'username' : function(){
        //return console.log(users.find({id:Meteor.user()._id},{username :1,Meteor.user()._id:0}));

    }*/

});

Template.postMessage.events({
    'click #delete' : function(){
        Thread.remove(this._id);
    },
    'click #edit' :function(){

        if(confirm("Are you sure you want to edit ?")== true){
            alert("Implementaion still going on");
        }
    },
    'click #reply' : function(){
        
        $('<div class="pull-right"><input type="text" id="replyBox"><input type="submit" id="replyOk" value="ok" class="btn btn-primary"></div><br>').insertAfter("#reply");   
    },
    'click #replyOk' : function(event){
        var replymsg = event.Currenttarget.replyBox.value();
        alert(replymsg);
    }
});