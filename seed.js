const mongoose = require("mongoose");
const { courseModel } = require("./db"); // Adjust the path to the location of your model file

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://ommodi0207:AZknSZKt9nkLnlrn@cluster0.ajwnl.mongodb.net/course-web", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Courses data
const courses = [
  {
      title: "Introduction to HTML5",
      description: "This course is part of Web Design for Everybody: Basics of Web Development & Coding Specialization.",
      price: 0, // Free course
      imageUrl: "image/icon-1.png",
      courseUrl:"image/HTML-Tutorial.jpg",
      rating: "4.8",
      enrolledStudents: 2500,
      
      moreInfoUrl: "https://en.wikipedia.org/wiki/HTML5",
      learningPoints: [
          "Understand the structure of an HTML document.",
          "Learn common HTML tags and their uses.",
          "Build your first web page using HTML5.",
      ],
      skills: ["HTML5", "Web Development Basics", "Web Design"],
      reviews: [
          { name: "Alice Johnson", comment: "A great starting point for web development." },
          { name: "John Doe", comment: "Very beginner-friendly course." },
      ],
  },
  {
      title: "Introduction to CSS3",
      description: "This course is part of HTML, CSS, and Javascript for Web Developers Specialization.",
      price: 0, // Free course
      imageUrl: "image/icon-2.png",
      rating: "4.7",
      enrolledStudents: 3000,
      courseUrl:"image/css.jpg",
      moreInfoUrl: "https://en.wikipedia.org/wiki/CSS",
      learningPoints: [
          "Style text and elements with CSS3.",
          "Understand the box model.",
          "Learn to create responsive designs.",
      ],
      skills: ["CSS3", "Responsive Design", "Web Design"],
      reviews: [
          { name: "Emily Smith", comment: "I loved the hands-on exercises!" },
          { name: "Chris Brown", comment: "Clear explanations and great examples." },
      ],
  },
  {
      title: "JavaScript for Beginners",
      description: "Build Your Skills in JavaScript and jQuery. Start a journey to using JavaScript to become a programmer.",
      price: 0, // Free course
      imageUrl: "image/icon-3.png",
      rating: "4.9",
      enrolledStudents: 5000,
      courseUrl:"image/js.png",
      
      moreInfoUrl: "https://en.wikipedia.org/wiki/JavaScript",
      learningPoints: [
          "Learn the basics of JavaScript syntax.",
          "Understand variables, loops, and functions.",
          "Build interactive web pages.",
      ],
      skills: ["JavaScript", "Programming Basics", "Web Interactivity"],
      reviews: [
          { name: "Sophia Lee", comment: "Perfect for absolute beginners." },
          { name: "Liam Wilson", comment: "Well-structured and easy to follow." },
      ],
  },
  {
      title: "Statistics with SASS",
      description: "Sass (syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets(CSS).",
      price: 0, // Free course
      imageUrl: "image/icon-4.png",
      rating: "4.5",
      enrolledStudents: 2000,
      courseUrl:"image/SASS.png",
      moreInfoUrl: "https://en.wikipedia.org/wiki/SASS_(software)",
      learningPoints: [
          "Understand SASS syntax and structure.",
          "Create reusable styles with variables and mixins.",
          "Generate dynamic and responsive stylesheets.",
      ],
      skills: ["SASS", "CSS Preprocessors", "Data Visualization"],
      reviews: [
          { name: "Michael Green", comment: "A great tool for handling complex styles." },
          { name: "Linda Taylor", comment: "SASS made my projects so much easier." },
      ],
  },
  {
      title: "Interactivity with JQuery",
      description: "Explore interactivity and dynamic content with JQuery.",
      price: 0, // Free course
      imageUrl: "image/icon-5.png",
      rating: "4.6",
      enrolledStudents: 1800,
      courseUrl:"image/jQuery.png",
      moreInfoUrl: "https://en.wikipedia.org/wiki/JQuery",
      learningPoints: [
          "Learn how to use JQuery for DOM manipulation.",
          "Handle events and animations with ease.",
          "Build dynamic and interactive web components.",
      ],
      skills: ["JQuery", "JavaScript Libraries", "Web Interactivity"],
      reviews: [
          { name: "Emma Watson", comment: "JQuery is still relevant and useful!" },
          { name: "Oliver King", comment: "Great introduction to interactive web design." },
      ],
  },
  {
      title: "React.js Basics",
      description: "Launch your career as a front-end developer. Build job-ready skills for an in-demand career and earn a credential. No degree or priorexperience required to get started.",
      price: 0, // Free course
      imageUrl: "image/icon-6.png",
      rating: "4.9",
      enrolledStudents: 6000,
      courseUrl:"image/React.png",
      moreInfoUrl: "https://reactjs.org/",
      learningPoints: [
          "Understand the basics of React components.",
          "Learn about state and props in React.",
          "Build your first React application.",
      ],
      skills: ["React.js", "Front-end Development", "Web Components"],
      reviews: [
          { name: "Daniel Roberts", comment: "React is the future of front-end development." },
          { name: "Sophia Martinez", comment: "Excellent for beginners in React." },
      ],
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
