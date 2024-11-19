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
            posted: "7 days",
            link: "https://example.com/apply/frontend-developer"
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
            posted: "30 days",
            link: "https://example.com/apply/medical-coder"
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
            posted: "24 hours",
            link: "https://example.com/apply/data-analyst"
        },
        {
            title: "Software Engineer",
            company: "InnovateSoft",
            rating: "★ 4.3 (425 Reviews)",
            experience: "4-6 Yrs",
            salary: "₹15-20 Lacs PA",
            location: "Hyderabad",
            description: "Senior software engineer needed for developing scalable cloud solutions with expertise in microservices architecture.",
            tags: "Java • Microservices • Cloud Computing • AWS",
            type: "Contract",
            industry: "Technology",
            posted: "30 days",
            link: "https://example.com/apply/software-engineer"
        },
        {
            title: "Digital Marketing Specialist",
            company: "MarketPro",
            experience: "2-3 Yrs",
            salary: "₹6-9 Lacs PA",
            location: "Delhi",
            description: "Creative digital marketer to develop and implement comprehensive marketing strategies across social media platforms.",
            tags: "Social Media • SEO • Content Marketing • Analytics",
            type: "Full-time",
            industry: "Artificial Intelligence",
            posted: "7 days",
            link: "https://example.com/apply/digital-marketing"
        },
        {
            title: "HR Business Partner",
            company: "Global Enterprises",
            rating: "★ 4.2 (287 Reviews)",
            experience: "5-7 Yrs",
            salary: "₹12-16 Lacs PA",
            location: "Chennai",
            description: "Experienced HR professional to support strategic workforce planning and employee engagement initiatives.",
            tags: "HR Strategy • Talent Acquisition • Employee Relations",
            type: "Full-time",
            industry: "Finance",
            posted: "30 days",
            link: "https://example.com/apply/hr-business-partner"
        },
        {
            title: "Machine Learning Engineer",
            company: "AI Innovations",
            rating: "★ 4.7 (612 Reviews)",
            experience: "3-5 Yrs",
            salary: "₹18-25 Lacs PA",
            location: "Bangalore",
            description: "Cutting-edge ML engineer to develop and implement advanced machine learning algorithms and models.",
            tags: "Python • Machine Learning • Deep Learning • TensorFlow",
            type: "Full-time",
            industry: "Artificial Intelligence",
            posted: "7 days",
            link: "https://example.com/apply/ml-engineer"
        },
        {
            title: "Content Writer",
            company: "MediaPulse",
            experience: "1-2 Yrs",
            salary: "₹4-6 Lacs PA",
            location: "Remote",
            description: "Creative content writer to produce engaging articles, blog posts, and marketing collateral.",
            tags: "Content Writing • Copywriting • SEO • Blog Management",
            type: "Contract",
            industry: "Education",
            posted: "24 hours",
            link: "https://example.com/apply/content-writer"
        },
        {
            title: "Product Manager",
            company: "StartupNest",
            rating: "★ 4.4 (376 Reviews)",
            experience: "4-6 Yrs",
            salary: "₹14-18 Lacs PA",
            location: "Pune",
            description: "Innovative product manager to drive product strategy and development for emerging tech solutions.",
            tags: "Product Development • Agile • User Experience • Strategy",
            type: "Full-time",
            industry: "Technology",
            posted: "7 days",
            link: "https://example.com/apply/product-manager"
        },
        {
            title: "Cybersecurity Analyst",
            company: "SecureNet",
            experience: "3-5 Yrs",
            salary: "₹12-16 Lacs PA",
            location: "Bangalore",
            description: "Dedicated cybersecurity professional to monitor and protect organizational digital infrastructure.",
            tags: "Network Security • Threat Detection • Compliance • Encryption",
            type: "Full-time",
            industry: "Cybersecurity",
            posted: "30 days",
            link: "https://example.com/apply/cybersecurity-analyst"
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

        // Create apply button
        const applyButton = document.createElement('a');
        applyButton.textContent = "Apply Now";
        applyButton.href = job.link;
        applyButton.target = "_blank"; // Open link in a new tab
        applyButton.classList.add('apply-button');

        // Append all elements to the job card
        jobCard.append(jobTitle, companyRatingDiv, jobDetails, jobDesc, tagsPara, applyButton);

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
