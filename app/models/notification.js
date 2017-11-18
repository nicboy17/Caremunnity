var dateTime = require('node-datetime');
var db = require('../../db');

var weekday = new Array(7);
weekday[0] =  "alert_sunday";
weekday[1] = "alert_monday";
weekday[2] = "alert_tuesday";
weekday[3] = "alert_wednesday";
weekday[4] = "alert_thursday";
weekday[5] = "alert_friday";
weekday[6] = "alert_saturday";

var Notify = {  
    createNotification: function(user_id, goal_id, medication_id, title, start_day, end_day, sunday, monday, tuesday, wednesday, thursday, friday, saturday, alert, callback) {
        return db.query('insert into notifications (user_id, goal_id, medication_id, title, start_date, end_date, alert_sunday, alert_monday, alert_tuesday, alert_wednesday, alert_thursday, alert_friday, alert_saturday, alert) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        ,[user_id, goal_id, medication_id, title, start_day, end_day, sunday, monday, tuesday, wednesday, thursday, friday, saturday, alert], callback);  
    },
    deleteNotification: function(notification_id, callback) {
        return db.query('delete from notfication where notification_id = ?',[notification_id], callback);  
    },
    editNotification: function(notification_id, user_id, goal_id, medication_id, title, start_day, end_day, sunday, monday, tuesday, wednesday, thursday, friday, saturday, alert, callback) {
        return db.query('update notifications set user_id = ? and goal_id = ? and medication_id = ? and title = ? and start_day = ? and end_day = ? and alert_sunday = ? and alert_monday = ? and alert_tuesday = ? and alert_wednesday = ? and alert_thursday = ? and alert_friday = ? and alert_saturday = ? and alert = ? where notification_id = ?'
        ,[user_id, goal_id, medication_id, title, start_day, end_day, sunday, monday, tuesday, wednesday, thursday, friday, saturday, alert, notification_id], callback);  
    },
    getFirstNotification: function(notification_id, callback) {
        return db.query('select * from notifications where notification_id = ?',[notification_id], callback);  
    },
    getFirstNotification: function(user_id, callback) {
        var date = dateTime.create().format('Y-m-d');
        var n = weekday[date.getDay()];
        return db.query('select notification_id, title, alert from notifications where user_id = ? and start_date >= CURDATE() and end_date <= CURDATE() and ? = true LIMIT 1 ORDERBY alert',[user_id, n], callback);  
    },
    getNotifications: function(user_id, date, callback) {
        var date = dateTime.create().format('Y-m-d');
        var n = weekday[date.getDay()];
        return db.query('select notification_id, title, alert from notifications where user_id = ? and start_date >= CURDATE() and end_date <= CURDATE() and ? = true ORDERBY alert',[username, password], callback);  
    }
};  
module.exports = Notify;