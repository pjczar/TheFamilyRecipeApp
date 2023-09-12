document.addEventListener("DOMContentLoaded", function () {
    const isAuthenticated = false; // Replace with your authentication logic to check if the user is logged in

    // Find the "Login" menu item
    const loginMenuItem = document.querySelector('ul li a[href="login.html"]');

    if (loginMenuItem) {
        // If the user is authenticated, change the menu item to "Profile" and set its href
        if (isAuthenticated) {
            loginMenuItem.textContent = "Profile";
            loginMenuItem.href = "profile.html"; // Change this to the actual URL of the user's profile page
        }
    }
});
