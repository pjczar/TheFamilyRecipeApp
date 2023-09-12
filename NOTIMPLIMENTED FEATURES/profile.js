document.addEventListener("DOMContentLoaded", function () {
    // Function to edit user profile
    function editUserProfile() {
        const editProfileModal = document.getElementById("editProfileModal");
        editProfileModal.style.display = "block";

        const saveProfileBtn = document.getElementById("saveProfileBtn");
        saveProfileBtn.addEventListener("click", function () {
            const updatedData = {
                name: document.getElementById("newNameInput").value,
                email: document.getElementById("newEmailInput").value,
                // Add more fields as needed
            };

            fetch('/update-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            })
            .then(response => {
                if (response.ok) {
                    editProfileModal.style.display = "none";
                    // Optionally, update displayed user information on the profile page
                } else {
                    // Handle update failure, display an error message
                    const errorMessageElement = document.getElementById('errorMessage');
                    errorMessageElement.textContent = 'Failed to update user information. Please try again.';
                }
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
        });
    }

    // Function to log out
    function logOut() {
        fetch('/logout', {
            method: 'POST',
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '/login';
            } else {
                alert('Failed to log out. Please try again.');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
    }

    // Function to confirm and delete account
    function confirmDeleteAccount() {
        const confirmDelete = confirm('Are you sure you want to delete your account? This action cannot be undone.');
        if (confirmDelete) {
            fetch('/delete-account', {
                method: 'POST',
            })
            .then(response => {
                if (response.ok) {
                    window.location.href = '/account-deleted';
                } else {
                    alert('Failed to delete your account. Please try again.');
                }
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
        }
    }

    const editProfileBtn = document.getElementById("editProfileBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const deleteAccountBtn = document.getElementById("deleteAccountBtn");

    if (editProfileBtn) {
        editProfileBtn.addEventListener("click", editUserProfile);
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", logOut);
    }

    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener("click", confirmDeleteAccount);
    }
});
