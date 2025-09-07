const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
       
    courseName:{
        type:String,
        required:true,
    },
    courseDescription:{
        type:String,
        required:true
    },
   
    whatYouWillLearn:{
        type:String,
        required:true,
    },
    courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section"
        }
    ],
    RatingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReviews"
        }
    ],
    price:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    tag:{
           type:[String],
           required:true,
        }
    ,
    studentsEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Users",
            required:true
        }
    ],
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
   instructor: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},

  
});

module.exports = mongoose.model('Course', CourseSchema);