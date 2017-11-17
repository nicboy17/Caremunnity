var db = require('../../db');

var Notify = {  
    createNotification: function(user_id, goal_id, medication_id, title, start_day, end_day, sunday, monday, tuesday, wednesday, thursday, friday, saturday, alert, callback) {
        return db.query('insert into notifications (user_id, goal_id, medication_id, title, start_date, end_date, alert_sunday, alert_monday, alert_tuesday, alert_wednesday, alert_thursday, alert_friday, alert_saturday, alert) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        ,[user_id, goal_id, medication_id, title, start_day, end_day, sunday, monday, tuesday, wednesday, thursday, friday, saturday, alert], callback);  
    },
    deleteNotification: function(notification_id, callback) {
        return db.query('',[username, password], callback);  
    },
    editNotification: function(notification_id, user_id, goal_id, medication_id, title, start_day, end_day, sunday, monday, tuesday, wednesday, thursday, friday, saturday, alert, callback) {
        return db.query('',[username, password], callback);  
    },
    getFirstNotification: function(user_id, day, time, callback) {
        return db.query('',[username, password], callback);  
    },
    getNotifications: function(callback) {
        return db.query('',[username, password], callback);  
    }
};  
module.exports = Notify;