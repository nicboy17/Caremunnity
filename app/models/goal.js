var db = require('../../db');

var Goal = {  
    getGoals: function(callback) {
        return db.query('Select * goals',[], callback);  
    },
    getUserGoals: function(user_id, callback) {
        return db.query('select goals.goal_id, goals.title, goals.picture, user_goals.count from user_goals left join goals on user_goals.goal_id = goals.goal_id where user_goals.user_id = ?'
        ,[user_id], callback)
    },
    checkGoalProgress: function(user_id, goal_id, callback) {

    },
    incrementGoalProgress: function(user_id, goal_id, callback) {

    },
    addAccomplishment: function(user_id, goal_id, trophy_id, callback) {

    },
    getAccomplishments: function(user_id) {

    }
};  
module.exports = Goal;