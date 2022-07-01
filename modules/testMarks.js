var mongoose = require('mongoose');
const DB =  "mongodb+srv://SushantSingh:date123mm@examinationportal.lnpw9.mongodb.net/examination";
mongoose.connect(DB , {useNewUrlParser: true});
var conn = mongoose.Collection;

    const firstSemSchema = new mongoose.Schema({
        "regd": String,
        "sem": String,
        "CA3101": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number,

        },
        "CA3102": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3103": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3104": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3105": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "MA3101": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "MA3102": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "sem_total1":
        {
            
            "all_total1" : Number
        },

        "CA3201": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3202": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3203": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3204": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3205": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3206": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "MA3201": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },

        "sem_total02":
        {
            
            "all_total02" : Number
        },
        
        "CA3301": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3302": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3303": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total" : Number
        },
        "CA3304": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3305": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3306": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3307": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "sem_total3":
        {
            "all_total3" : Number
        },

        "CA3401": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3402": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3403": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3404": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3405": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3406": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3407": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },

        "sem_total4":
        {
            "all_total4" : Number
        },

        "CA3501": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3502": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3503": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3504": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "CA3505": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "HS3501": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },
        "HS3502": {
            "mid": Number,
            "test": Number,
            "assignment": Number,
            "end": Number,
            "total": Number
        },

        "sem_total005":
        {
            "all_total005" : Number
        },

        "CA3601": {
            "project": Number,
            "total": Number
        },
        "sem_total6":
        {
            "all_total6" : Number
        }
        
        

    });
    firstSemSchema.index({'regd': 1, 'sem': 1}, {unique:true});
    var firstMarksModel = mongoose.model('Marks', firstSemSchema);


    // function firstSem(){
    //     console.log("first sem");
    // }

    // function secondSem(){
    //     console.log("second sem");
    // }
module.exports = {firstMarksModel: firstMarksModel}; 
