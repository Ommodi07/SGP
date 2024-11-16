const mongoose = require("mongoose");
const { courseModel } = require("./db"); // Adjust the path to the location of your model file

// Connect to MongoDB
mongoose.connect("mongodb+srv://kavyarajmangrola:ell9fz9x55VV2OxT@cluster0.upnft.mongodb.net/courses-web", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to the database");
}).catch(err => {
    console.error("Database connection error:", err);
});

// Courses data
const courses = [
    {
        title: "Introduction to HTML5",
        description: "Learn the basics of HTML5 to build modern web pages.",
        price: 0, // Free course
        imageUrl: "image/icon-1.png",
    },
    {
        title: "Introduction to CSS3",
        description: "Master the fundamentals of CSS3 to style web pages beautifully.",
        price: 0, // Free course
        imageUrl: "image/icon-2.png",
    },
    {
        title: "JavaScript for Beginners",
        description: "Start your journey in programming with JavaScript.",
        price: 0, // Free course
        imageUrl: "image/icon-3.png",
    },
    {
        title: "Statistics with SASS",
        description: "Learn to handle and visualize data effectively with SASS.",
        price: 0, // Free course
        imageUrl: "image/icon-4.png",
    },
    {
        title: "Interactivity with JQuery",
        description: "Explore interactivity and dynamic content with JQuery.",
        price: 0, // Free course
        imageUrl: "image/icon-5.png",
    },
    {
        title: "React.js Basics",
        description: "Dive into React.js and build user-friendly interfaces.",
        price: 0, // Free course
        imageUrl: "image/icon-6.png",
    },
];

// Insert data into the database
async function seedCourses() {
    try {
        // Clear existing courses
        await courseModel.deleteMany({});
        console.log("Existing courses cleared");

        // Insert new courses
        const insertedCourses = await courseModel.insertMany(courses);
        console.log("Courses added:", insertedCourses);
    } catch (err) {
        console.error("Error seeding courses:", err);
    } finally {
        // Close the database connection
        mongoose.connection.close();
    }
}

// Run the seeding function
seedCourses();
