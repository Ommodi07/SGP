const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    confirmPassword: String
    
});

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
   
});
const reviewSchema = new Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
});

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: String, required: true },
  enrolledStudents: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  courseUrl: { type: String, required: true },
  moreInfoUrl: { type: String },
  learningPoints: [{ type: String }], // Array of strings
  skills: [{ type: String }], // Array of strings
  reviews: [reviewSchema], // Array of sub-documents
  price: { type: Number, required: true },
  creatorId: { type: ObjectId, ref: "user", required: false },
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: { type: ObjectId, ref: 'course' }
  });

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);


module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}