replyId = 0;
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
    'click #replyIcon' : function(){
        
        //$('<div class="container-fluid"><div class="col-md-8" style="background-color:lavender"><input type="text" id="replyBox"><input type="submit" id="replyOkbtn" class="btn btn-primary" value="Ok"></div></div><br> ').insertAfter("#reply");
        //var textbox = $('<div class="container-fluid"><div class="col-md-8" style="background-color:lavender"><input type="text" id="replyBox"><input type="submit" id="replyOkbtn" class="btn btn-primary" value="Ok"></div></div><br>');
        //$(this).parent().after(textbox);//.slideToggle("slow");
        //$(this).parent().slideDown('slow');
        //$(this).children().slideDown();
        $("#commentboxContainer").children("#replyPostboxContainer").slideDown();
    }, 
    
    'click #hidebtn' : function(){
            $("#replyPostboxContainer").slideUp();
    },

    'click #replyOkbtn' : function(){
        //var replymsg = event.Currenttarget.replyBox.value();
        //alert("replymsg");
        //$("#commentMessageContainer").append("<ul><li>hello</li><ul>");
        //$(this).parent().append("");
        //$("#replyCommentbox").append("<li>" + $("#replyBox").val() + "</li>");
        //$("#replyPostbox").slideUp('slow');
        //$("<li>" + $("#replyBox").val() + "</li>").insertAfter("#replyPostboxContainer");
        
        
        replyId++;
        var replymsg = $("#replyBox").val();
        Thread.update(
                        {_id:this._id},
                        {
                            $push:{
                                replypost :{
                                    $each:[{replypostId:replyId,replymsg : replymsg}]
                                    }
                                }
                        }
                    );
        
        $("#replyCommentbox").append("<li>" + replymsg + "</li>");//.css({"top-margin":"0px","border-bottom":"1px solid grey"});

        $("#replyBox").val(" ");
        $("#replyCommentbox").children().css({"border-bottom":"1px solid grey"});
    }
});