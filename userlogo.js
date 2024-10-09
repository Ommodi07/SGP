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