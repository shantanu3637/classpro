var userModel =  require('../models/Users');

exports.getUsers = function() {
    return userModel.users;
}



exports.compareAuth = function(username, password){
    for (var i=0;i<userModel.length;i++)
    {
        if (userModel[i].username == username && userModel[i].password ==password)
        {
            return userModel.users[i];
            //return true;
        }
        
        return false;
    }
}




exports.getUser = function(id) {
    for(var i=0; i<userModel.length; i++){
        if(users[i].id == id)
            return userModel.users[i];
    }
}

exports.postlogin = function(req,res){
  var result =users.compareAuth(req.body.email,req.body.password);
    if(result)
     {
     res.send("Login Successful, Hi"+ result.name);
    }
    else
         {
         res.send("Failed");
    }
}