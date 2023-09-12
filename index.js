const signupButton = document.getElementById('signupButton');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorContainer = document.getElementById('errorContainer');

signupButton.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Send a POST request to the server to sign up the user
    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // User registered successfully
            console.log(data.message);
            // Redirect to a success page or perform other actions
        } else {
            // Server returned an error
            console.error(data.error);
            // Display the error message to the user
            errorContainer.textContent = data.error;
        }
    } catch (error) {
        // Network error or other client-side error
        console.error('An error occurred:', error);
        // Handle the error, e.g., show a generic error message
        errorContainer.textContent = 'An error occurred. Please try again later.';
    }
});


