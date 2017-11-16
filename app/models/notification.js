var db = require('../../db');

var Notify = {  
    createPost: function(username, password, callback) {
        return db.query('Select user_id, permissions, status from users where username = ? and password = password;',[username, password], callback);  
    }
};  
module.exports = Notify;