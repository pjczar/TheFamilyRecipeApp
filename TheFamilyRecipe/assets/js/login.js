document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    // Add event listener for the login form
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting normally
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        
        // Implement login logic here (e.g., send a POST request to your backend)
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => {
            if (response.ok) {
                // Login successful, redirect or perform other actions
                window.location.href = '/profile'; // Example: Redirect to the user's profile page
            } else {
                // Handle login failure
                response.json().then(data => {
                    // Display error message to the user (you should have an element for this)
                    const errorMessageElement = document.getElementById('errorMessage');
                    errorMessageElement.textContent = data.error;
                });
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
            // Handle network or other client-side errors
        });
    });

    // Add event listener for the signup form
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting normally
        const username = signupForm.querySelector('input[type="text"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;
        
        // Implement signup logic here (e.g., send a POST request to your backend)
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        })
        .then(response => {
            if (response.ok) {
                // Signup successful, redirect or perform other actions
                window.location.href = '/profile'; // Example: Redirect to the user's profile page
            } else {
                // Handle signup failure
                response.json().then(data => {
                    // Display error message to the user (you should have an element for this)
                    const errorMessageElement = document.getElementById('errorMessage');
                    errorMessageElement.textContent = data.error;
                });
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
            // Handle network or other client-side errors
        });
    });
});
