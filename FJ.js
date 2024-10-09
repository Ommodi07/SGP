// Function to dynamically add job listings
document.addEventListener("DOMContentLoaded", function() {
    const jobs = [
        {
            title: "Frontend Developer",
            company: "TechCorp",
            rating: "★ 4.1 (312 Reviews)",
            experience: "2-4 Yrs",
            salary: "₹8-12 Lacs PA",
            location: "Bangalore",
            description: "Looking for an experienced frontend developer with knowledge of React, CSS, and JavaScript.",
            tags: "HTML • CSS • JavaScript • React",
            type: "Full-time",
            industry: "Technology",
            posted: "7 days"
        },
        {
            title: "Medical Coder",
            company: "HealthTech",
            experience: "1-3 Yrs",
            salary: "₹5-7 Lacs PA",
            location: "Mumbai",
            description: "We are hiring part-time medical coders with expertise in ICD-10 coding.",
            tags: "Medical Coding • Healthcare • ICD-10",
            type: "Part-time",
            industry: "Healthcare",
            posted: "30 days"
        },
        {
            title: "Data Analyst",
            company: "Data Solutions",
            rating: "★ 4.5 (540 Reviews)",
            experience: "3-5 Yrs",
            salary: "₹10-14 Lacs PA",
            location: "Pune",
            description: "Seeking a data analyst proficient in Excel, SQL, and Python for business insights.",
            tags: "Data Analysis • Excel • SQL • Python",
            type: "Full-time",
            industry: "Finance",
            posted: "24 hours"
        },
        {
            title: "Content Writer",
            company: "EduMedia",
            experience: "0-2 Yrs",
            salary: "₹3-4 Lacs PA",
            location: "Delhi",
            description: "Looking for a creative content writer to write blogs, articles, and social media posts.",
            tags: "Content Writing • SEO • Social Media",
            type: "Contract",
            industry: "Education",
            posted: "7 days"
        },
        {
            title: "Backend Developer",
            company: "CloudByte",
            rating: "★ 4.8 (200 Reviews)",
            experience: "4-6 Yrs",
            salary: "₹12-16 Lacs PA",
            location: "Hyderabad",
            description: "Experienced backend developer with expertise in Node.js, MongoDB, and cloud technologies.",
            tags: "Node.js • MongoDB • AWS • Microservices",
            type: "Full-time",
            industry: "Technology",
            posted: "7 days"
        },
        {
            title: "UX Designer",
            company: "Designify",
            experience: "3-5 Yrs",
            salary: "₹9-11 Lacs PA",
            location: "Chennai",
            description: "Hiring a UX designer with experience in user research, wireframing, and prototyping.",
            tags: "UX Design • Figma • Wireframing • Prototyping",
            type: "Full-time",
            industry: "Technology",
            posted: "30 days"
        },
        {
            title: "Sales Executive",
            company: "RetailHub",
            experience: "1-2 Yrs",
            salary: "₹4-6 Lacs PA",
            location: "Mumbai",
            description: "We are looking for a driven sales executive to manage retail sales and build client relationships.",
            tags: "Sales • Client Management • Retail",
            type: "Full-time",
            industry: "Retail",
            posted: "7 days"
        },
        {
            title: "Digital Marketing Specialist",
            company: "AdGrowth",
            rating: "★ 4.2 (420 Reviews)",
            experience: "2-3 Yrs",
            salary: "₹6-8 Lacs PA",
            location: "Noida",
            description: "Seeking a digital marketing specialist to run PPC, SEO, and social media campaigns.",
            tags: "SEO • PPC • Google Ads • Social Media",
            type: "Full-time",
            industry: "Technology",
            posted: "30 days"
        },
        {
            title: "HR Manager",
            company: "Workforce Global",
            experience: "5-7 Yrs",
            salary: "₹10-15 Lacs PA",
            location: "Gurgaon",
            description: "Looking for an experienced HR manager to lead talent acquisition, payroll, and employee engagement.",
            tags: "HR • Talent Acquisition • Payroll • Employee Engagement",
            type: "Full-time",
            industry: "Finance",
            posted: "24 hours"
        },
        {
            title: "Operations Manager",
            company: "LogiTrack",
            experience: "3-5 Yrs",
            salary: "₹9-12 Lacs PA",
            location: "Ahmedabad",
            description: "We need an operations manager to oversee logistics and supply chain processes.",
            tags: "Operations Management • Logistics • Supply Chain",
            type: "Full-time",
            industry: "Manufacturing",
            posted: "30 days"
        },
        {
            title: "Customer Support Representative",
            company: "SupportTech",
            experience: "1-3 Yrs",
            salary: "₹3-5 Lacs PA",
            location: "Pune",
            description: "Hiring customer support reps to handle technical inquiries and provide excellent service.",
            tags: "Customer Support • Technical Support • Communication",
            type: "Full-time",
            industry: "Technology",
            posted: "7 days"
        },
        {
            title: "Graphic Designer",
            company: "CreativePixels",
            rating: "★ 4.7 (150 Reviews)",
            experience: "2-4 Yrs",
            salary: "₹5-7 Lacs PA",
            location: "Bangalore",
            description: "Creative graphic designer required to design marketing materials and social media graphics.",
            tags: "Graphic Design • Adobe Photoshop • Illustrator • Marketing",
            type: "Contract",
            industry: "Retail",
            posted: "7 days"
        }
    ];


    const jobListingsDiv = document.getElementById("job-listings");

    jobs.forEach(job => {
        // Create job card container
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.dataset.jobType = job.type;
        jobCard.dataset.industry = job.industry;
        jobCard.dataset.posted = job.posted;

        // Create job title element
        const jobTitle = document.createElement('h3');
        jobTitle.textContent = job.title;

        // Create company, rating, and experience
        const companyRatingDiv = document.createElement('p');
        companyRatingDiv.innerHTML = `${job.company} ${job.rating ? `<span class="rating">${job.rating}</span>` : ""}`;

        const jobDetails = document.createElement('p');
        jobDetails.innerHTML = `<strong>Experience:</strong> ${job.experience} | <strong>Salary:</strong> ${job.salary} | <strong>Location:</strong> ${job.location}`;

        // Create job description
        const jobDesc = document.createElement('p');
        jobDesc.textContent = job.description;

        // Create tags for job skills/requirements
        const tagsPara = document.createElement('p');
        tagsPara.classList.add('tags');
        tagsPara.textContent = job.tags;

        // Append all elements to the job card
        jobCard.append(jobTitle, companyRatingDiv, jobDetails, jobDesc, tagsPara);

        // Append the job card to the job listings container
        jobListingsDiv.appendChild(jobCard);
    });
});


// Function to apply filters
function applyFilters() {
    const jobType = document.querySelector('input[name="job-type"]:checked');
    const industry = document.getElementById('industry-filter').value;
    const datePosted = document.querySelector('input[name="date-posted"]:checked');
    
    const jobCards = document.querySelectorAll('.job-card');

    jobCards.forEach(card => {
        const cardJobType = card.getAttribute('data-job-type');
        const cardIndustry = card.getAttribute('data-industry');
        const cardPosted = card.getAttribute('data-posted');

        let showCard = true;

        // Filter by Job Type
        if (jobType && jobType.value !== cardJobType) {
            showCard = false;
        }

        // Filter by Industry
        if (industry !== 'All' && industry !== cardIndustry) {
            showCard = false;
        }

        // Filter by Date Posted
        if (datePosted && datePosted.value !== cardPosted) {
            showCard = false;
        }

        // Show or hide job card based on filters
        if (showCard) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

   // Check if the user is logged in
   const userEmail = localStorage.getItem('userEmail');
   const userInfo = document.getElementById('userInfo');
   const emailPopup = document.getElementById('emailPopup');
   const actionBtn = document.getElementById('action-btn');
   const actionBtnLink = document.getElementById('action-btn-link');
   const logoutBtn = document.getElementById('logout');

   if (userEmail) {
       userInfo.style.display = 'block';
       emailPopup.textContent = userEmail;

       // Change button text and link
       actionBtnLink.textContent = 'Start Course';
       actionBtnLink.href = 'Course.html';

       // // Show email on hover
       // document.getElementById('userLogo').addEventListener('mouseover', () => {
       //     emailPopup.style.display = 'block';
       // });
       // document.getElementById('userLogo').addEventListener('mouseout', () => {
       //     emailPopup.style.display = 'none';
       // });

       // Logout logic
       logoutBtn.addEventListener('click', () => {
           // Call API to delete the user session or user data
           fetch('http://localhost:3000/user/logout', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer ${localStorage.getItem('token')}`
               }
           })
           .then(response => {
               if (response.ok) {
                   // Clear local storage and redirect to login page
                   localStorage.removeItem('userEmail');
                   localStorage.removeItem('token');
                   window.location.href = 'login.html';
               } else {
                   alert('Logout failed');
               }
           })
           .catch(error => {
               console.error('Error during logout:', error);
               alert('An error occurred during logout');
           });
       });
   }