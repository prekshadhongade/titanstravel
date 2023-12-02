// Add this function to script.js
function performLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform your login logic here
    // For simplicity, let's just show an alert
    alert('Login successful for user: ' + username);
}
function register() {
    // Add your registration logic here
    alert('Registration functionality will be implemented here.');
}
// script.js

async function performLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (data.success) {
            alert(data.message);
            // Redirect to another page, update UI, etc.
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
}
