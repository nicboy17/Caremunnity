var db = require('../../db');

var User = {  
    authenticate: function(username, password, callback) {
        return db.query('Select user_id, permissions, status from users where username = ? and password = password;',[username, password], callback);  
    },
    login: function(id, callback) {  
        return db.query("update users set status = 1 where user_id = ?;", [id], callback);  
    },
    logout: function(id, callback) {
        return db.query("update users set status = 2 where user_id = ?;", [id], callback);
    },
    findFriends: function(id, first, last, callback) {
        if(first != "" && last != "") { 
            return db.query('select user_id, first, last from users where first = ? and last = ? and user_id <> ?', [first, last, id], callback);
        } else if(first != "" && last == "") {
            return db.query('select user_id, first, last from users where first = ? and user_id <> ?', [first, id], callback);
        } else if(first == "" && last != "") {
            return db.query('select user_id, first, last from users where last = ? and user_id <> ?', [last, id], callback);
        } else {
            return db.query('select user_id, first, last from users where user_id <> ?', [id], callback);
        }
    },
    checkFollowing: function(user_id, other_id, callback) {
        db.query('select relationship_id from relationship where user_1_id = ? and user_2_id = ?', [user_id, other_id], callback);
    }
};  
module.exports = User;