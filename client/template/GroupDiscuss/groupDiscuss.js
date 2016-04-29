
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
        
        return Thread.find({},{sort : {createdAt:-1} }); 
        //return Thread.find();
    },
    'count':function(){
        return Thread.find().count();
    },
    /*'username' : function(){
        //return console.log(users.find({id:Meteor.user()._id},{username :1,Meteor.user()._id:0}));

    }*/
    'admin' : function(){
        return Thread.findOne({_id: this._id,'owner.id':Meteor.user()._id });

    }

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
        
        //$('<div class="container-fluid"><div class="col-md-8" style="background-color:lavender"><input type="text" id="replyBox"><input type="submit" id="replyOkbtn" class="btn btn-primary" value="Ok"></div></div><br> ').insertAfter("#reply");
        //var textbox = $('<div class="container-fluid"><div class="col-md-8" style="background-color:lavender"><input type="text" id="replyBox"><input type="submit" id="replyOkbtn" class="btn btn-primary" value="Ok"></div></div><br>');
        //$(this).parent().after(textbox);//.slideToggle("slow");
        //$("#reply").after(textbox);    
        //$(this).parent().slideDown('slow');
        $("#replyPostbox").slideDown('slow');
    }, 
    
    'click #hidebtn' : function(){
            $("#replyPostbox").slideUp('slow');
    },

    'click #replyOkbtn' : function(event){
        //var replymsg = event.Currenttarget.replyBox.value();
        //alert("replymsg");
        //$("#commentMessageContainer").append("<ul><li>hello</li><ul>");
        //$(this).parent().append("");
        //$("#replyCommentbox").append("<li>" + $("#replyBox").val() + "</li>");
        //$("#replyPostbox").slideUp('slow');
        $("<li>" + $("#replyBox").val() + "</li>").insertAfter("#replyPostbox");
    }
});