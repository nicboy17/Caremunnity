var User = require('../models/user');
var Post = require('../models/post');
var Goal = require('../models/goal');
var Medication = require('../models/medication');
var Notify = require('../models/notification');

module.exports = function(router) {

    router.post('/login', function(req, res) {
        console.log(req.body);
        User.authenticate(req.body.username, req.body.password, function(err, result) {
            if(result.length == 1 && result[0].status == 2) {
                User.login(result[0].user_id, function(err) {
                    if (err) throw err;
                });
                res.json({'success': 'true', 'user_id':result[0].user_id, 'permissions':result[0].permissions});
            } else {
                if(result[0].status == 1) {
                    res.json({'success': 'false', 'message':'user already logged in'});
                } else {
                    res.json({'success': 'false', 'message':'user not found'});
                }
            }
        });
    });

    router.post('/logout', function(req, res) {
        User.logout(req.body.user_id, function(err) {
            if (err) throw err;
            if(req.body.id) {
                res.json({'success': 'true'});
            } else {
                res.json({'success': 'false', 'message':'enter user id'});
            }
        });
    });

    router.post('/findfriends', function(req, res) {
        User.findFriends(req.body.user_id, req.body.first, req.body.last, function(err, result) {
            if (err) throw err;
            if(result[0]) {
                res.json({'success': 'true', users: result});
            } else {
                res.json({'success': 'false', 'message':'no users found'});
            }
        });
    });

    router.post('/addFriend', function(req, res) {
        User.addFriend(req.body.user_id, req.body.friend_id, function(err, result) {

        });
    });

    router.post('/removeFriend', function(req, res) {
        User.removeFriend(req.body.user_id, req.body.friend_id, function(err, result) {
            
        });
    });

    router.post('/addusermedicationtaken', function(req, res) {
        
    });

    return router;
}