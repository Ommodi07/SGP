const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("../db")
const courseRouter = Router();

// Get all courses
courseRouter.get("/preview", async function(req, res) {
    try {
        const data = await courseModel.find();
        res.json({
            courses: data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Get specific course
courseRouter.get("/preview/:id", async (req, res) => {
    const courseId = req.params.id;
    console.log(courseId);
    try {
        const course = await courseModel.findById(courseId);
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Purchase course
courseRouter.post("/purchase", userMiddleware, async function(req, res) {
    const userId = req.userId;
    const courseId = req.body.courseId;

    try {
        await purchaseModel.create({
            userId,
            courseId
        });
        res.json({
            message: "You have successfully bought the course"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to purchase course" });
    }
});

module.exports = {
    courseRouter
}