const { Router } = require("express");
const { userModel, purchaseModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_USER_PASSWORD } = require("../config");
const { userMiddleware } = require("../middleware/user");
const zod = require('zod');

const userRouter = Router();

// Validation Schema using zod
const userSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(3)
});

userRouter.post("/signup", async function(req, res) {
    try {
        const { email, password,confirmPassword } = req.body;
        
        // Validate input data
        const result = userSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({ message: "Invalid input" });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        
        if(confirmPassword===password)
        {
                    // Hash the password before saving
            const hashedPassword = await bcrypt.hash(password, 5);

            // Save user to database
            await userModel.create({ email, password: hashedPassword });
            res.status(201).json({ message: "Signup succeeded" });
        }
       
        else
        {
            res.status(401).json({message: 'Password does not match'});
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

userRouter.post("/signin", async function(req, res) {
    try {
        const { email, password } = req.body;

        
        const result = userSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({ message: "Invalid input" });
        }


        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: "Incorrect credentials" });
        }

        
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).json({ message: "Incorrect credentials" });
        }

        const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD, { expiresIn: `1h` });

      
        res.cookie('token', token, { httpOnly: true });

        
        res.status(200).json({ message: "Login successful", token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

userRouter.post("/logout", async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: "Logout successful" });
});


userRouter.get("/purchases", userMiddleware, async function(req, res) {
  try {
      const userId = req.userId;
    console.log(userId);
      // Find all purchases for this user and populate course details
      const purchases = await purchaseModel
          .find({ userId })
          .populate('courseId'); // Only populate required fields
          
      res.status(200).json({
          success: true,
          purchases: purchases.map(purchase => ({
          
              purchaseId: purchase._id,
              courseDetails: purchase.courseId
          }))
      });
      console.log('Backend Response:', JSON.stringify({
        success: true,
        purchases: purchases.map(purchase => ({
            purchaseId: purchase._id,
            courseDetails: purchase.courseId
        }))
    }));
    

  } catch (error) {
      console.error('Error fetching purchases:', error);
      res.status(500).json({
          success: false,
          message: "Internal server error"
      });
  }
});


// Add new purchase
userRouter.post("/purchases", userMiddleware, async function(req, res) {
    try {
      const userId = req.userId;
      const { courseId } = req.body;
      console.log("user id is", userId);
  
      // Check if user has already purchased this course
      const existingPurchase = await purchaseModel.findOne({
        userId,
        courseId
      });
  
      if (existingPurchase) {
        return res.status(400).json({
          success: false,
          message: "You have already enrolled in this course"
        });
      }
  
      // Create new purchase
      const purchase = await purchaseModel.create({
        userId,
        courseId
      });
  
      // Fetch the course details
      const course = await courseModel.findById(courseId);
  
      res.status(201).json({
        success: true,
        message: "Successfully enrolled in the course",
        purchase: {
          purchaseId: purchase._id,
          courseDetails: course
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Failed to enroll in the course"
      });
    }
  });

module.exports = {userRouter};