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
            return db.query(
            'select users.user_id, users.first, users.last, IF(relationship.relationship_id IS NULL, false, true) as following from users LEFT JOIN relationship ON (relationship.user_1_id = ? and relationship.user_2_id = users.user_id) WHERE users.first = ? and users.last = ? and users.user_id <> ?',
             [id, first, last, id], callback);
        } else if(first != "" && last == "") {
            return db.query(
            'select users.user_id, users.first, users.last, IF(relationship.relationship_id IS NULL, false, true) as following from users LEFT JOIN relationship ON (relationship.user_1_id = ? and relationship.user_2_id = users.user_id) WHERE users.first = ? and users.user_id <> ?',
            [id, first, id], callback);
        } else if(first == "" && last != "") {
            return db.query(
            'select users.user_id, users.first, users.last, IF(relationship.relationship_id IS NULL, false, true) as following from users LEFT JOIN relationship ON (relationship.user_1_id = ? and relationship.user_2_id = users.user_id) WHERE users.last = ? and users.user_id <> ?',
            [id, last, id], callback);
        } else {
            return db.query(
            'select users.user_id, users.first, users.last, IF(relationship.relationship_id IS NULL, false, true) as following from users LEFT JOIN relationship ON (relationship.user_1_id = ? and relationship.user_2_id = users.user_id) WHERE users.user_id <> ?',
            [id, id], callback);
        }
    },
    following: function(user_id, other_id, callback) {
        return db.query('select user_2_id from relationship where user_1_id = ?', [user_id], callback);
    }
};  
module.exports = User;