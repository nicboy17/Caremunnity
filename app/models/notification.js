var db = require('../../db');

var Notify = {  
    createNotification: function(callback) {
        //return db.query('Select user_id, permissions, status from users where username = ? and password = password;',[username, password], callback);  
    },
    deleteNotification: function(callback) {
        //return db.query('Select user_id, permissions, status from users where username = ? and password = password;',[username, password], callback);  
    },
    editNotification: function(callback) {
        //return db.query('Select user_id, permissions, status from users where username = ? and password = password;',[username, password], callback);  
    },
    getFirstNotification: function(callback) {
        //return db.query('Select user_id, permissions, status from users where username = ? and password = password;',[username, password], callback);  
    },
    getMedicationtNotifications: function(callback) {
        //return db.query('Select user_id, permissions, status from users where username = ? and password = password;',[username, password], callback);  
    },
    getGoalNotifications: function(callback) {
        //return db.query('Select user_id, permissions, status from users where username = ? and password = password;',[username, password], callback);  
    }
};  
module.exports = Notify;