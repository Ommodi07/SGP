document.addEventListener("DOMContentLoaded", () => {
    // Get the course ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    console.log(courseId);
    if (!courseId) {
        console.error("No course ID provided");
        document.body.innerHTML = "<h1>Course not found</h1>";
        return;
    }
    console.log("here");
    // Fetch course details from the backend
    fetch(`http://localhost:3000/course/preview/${courseId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Course not found");
            }
            return response.json();
        })
        .then((data) => {
            // Populate the course info dynamically
            document.getElementById("course-title").textContent = data.title;
            document.getElementById("course-description").innerHTML = data.description;
            document.getElementById("course-rating").textContent = data.rating || "N/A";
            document.getElementById("course-students").textContent = `${data.enrolledStudents || 0}+`;
            const image = document.getElementById("img");
            const courseImg = document.createElement("div");
            
            // Ensure `data.imageUrl` exists; use a placeholder if not
            const imageUrl = data.courseUrl || "default-image.jpg";
           
            courseImg.innerHTML = `<img src="${imageUrl}" alt="Course Image" id="course-image">`;
            image.appendChild(courseImg);
            
            // Create and populate learning points list
            const learningPoints = document.createElement("ul");
            learningPoints.id = "learning-points";
            data.learningPoints?.forEach(point => {
                const li = document.createElement("li");
                li.textContent = point;
                learningPoints.appendChild(li);
            });
            document.querySelector(".about").appendChild(learningPoints);

            // Create and populate skills list
            const skills = document.createElement("ul");
            skills.id = "skills-gained";
            data.skills?.forEach(skill => {
                const li = document.createElement("li");
                li.textContent = skill;
                skills.appendChild(li);
            });
            document.querySelector(".skill").appendChild(skills);

            // Populate reviews
            const reviewsContainer = document.getElementById("reviews-container");
            data.reviews?.forEach(review => {
                const reviewBox = document.createElement("div");
                reviewBox.className = "box";
                reviewBox.innerHTML = `
                    <div class="pof">
                        <i class="fa fa-user-circle-o"></i>
                    </div>
                    <div class="rew">
                        <p>${review.name}</p>
                        <p>${review.comment}</p>
                    </div>
                `;
                reviewsContainer.appendChild(reviewBox);
            });
        })
        .catch((error) => {
            console.error("Error loading course details:", error);
            document.body.innerHTML = "<h1>Course not found</h1>";
        });
});