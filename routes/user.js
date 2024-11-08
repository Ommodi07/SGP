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
  password: zod.string().min(6)
});

userRouter.post("/signup", async function(req, res) {
    try {
        const { email, password , confirm} = req.body;
        
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
        // console.log(confirm);
        if(password===confirm)
        {
        // Hash the password before saving
            const hashedPassword = await bcrypt.hash(password, 5);

        // Save user to database
            await userModel.create({ email, password: hashedPassword });
            res.status(201).json({ message: "Signup succeeded" });
        }
        else
        {
            res.status(401).json({ message: "Password doesn't match" });    
        }
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

userRouter.post("/signin", async function(req, res) {
    try {
        const { email, password } = req.body;

        // Validate input data
        const result = userSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({ message: "Invalid input" });
        }

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: "Incorrect credentials" });
        }

        // Compare hashed password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).json({ message: "Incorrect credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD, { expiresIn: '1h' });

        // Set JWT token as HTTP-only cookie
        res.cookie('token', token, { httpOnly: true });

        // Send success response
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

        const purchases = await purchaseModel.find({ userId });

        const purchasedCourseIds = purchases.map(purchase => purchase.courseId);

        const coursesData = await courseModel.find({
            _id: { $in: purchasedCourseIds }
        });

        res.status(200).json({ purchases, coursesData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = { userRouter };
