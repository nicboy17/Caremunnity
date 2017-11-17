var db = require('../../db');

var Notify = {  
    createNotification: function(user_id, goal_id, medication_id, title, start_day, end_day, sunday, monday, tuesday, wednesday, thursday, friday, saturday, alert, callback) {
        return db.query('insert into notifications (user_id, goal_id, medication_id, title, start_date, end_date, alert_sunday, alert_monday, alert_tuesday, alert_wednesday, alert_thursday, alert_friday, alert_saturday, alert) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        ,[user_id, goal_id, medication_id, title, start_day, end_day, sunday, monday, tuesday, wednesday, thursday, friday, saturday, alert], callback);  
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