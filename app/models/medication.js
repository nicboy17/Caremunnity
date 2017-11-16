var db = require('../../db');

var Medication = {  
    getMedication: function(id, callback) {
        return db.query('select * from medication where medication_id = ?',[id], callback);  
    },
    getUserMedications: function(id, callback) {
        return db.query('select * from user_medication where user_id = ?',[id], callback);  
    },
    addUserMedicationTaken: function(user_id, medication_id, taken, time, callback) {
        return db.query('insert into taken_medication (user_id, medication_id, taken, time) values (?, ?, ? , ?)',[user_id, medication_id, taken, time], callback);
    }
};  
module.exports = Medication;