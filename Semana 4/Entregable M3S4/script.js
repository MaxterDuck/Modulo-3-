// Function to show messages dynamically to the user
function showMessage(message, type = 'info') {
    const msg = document.createElement('p');
    msg.textContent = message;
    msg.className = `message ${type}`;
    const form = document.getElementById('userForm');
    form.appendChild(msg);
    setTimeout(() => msg.remove(), 3000); // Auto-remove message after 3 seconds
}

// Function to sanitize HTML input to prevent XSS attacks
function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function (m) {
        return ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[m];
    });
}

// Function to validate user input before saving
function validateInput(name, age) {
    if (typeof name !== 'string' || name.length < 2 || /^\d+$/.test(name)) {
        showMessage('❌ Name must be at least 2 characters and not only numbers.', 'error');
        return false;
    }
    if (isNaN(age) || age < 0 || age > 120) {
        showMessage('❌ Age must be a number between 0 and 120.', 'error');
        return false;
    }
    return true;
}

// Event handler for saving user data
// Performs validation, prevents duplicates, and limits to 100 users
document.getElementById('saveButton').addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    if (!validateInput(name, age)) return;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user already exists
    if (users.some(user => user.name.toLowerCase() === name.toLowerCase() && user.age === age)) {
        showMessage('⚠️ This user is already registered.', 'error');
        return;
    }

    // Prevent storing more than 100 users
    if (users.length >= 100) {
        showMessage('⚠️ User limit reached (100).', 'error');
        return;
    }

    // Store the new user
    users.push({ name, age });
    localStorage.setItem('users', JSON.stringify(users));

    displayData(); // Refresh user list

    nameInput.value = '';
    ageInput.value = '';
    nameInput.focus();

    showMessage('✅ User saved successfully.', 'success');
});

// Display all stored users in a table format
function displayData() {
    const outputDiv = document.getElementById('output');
    const users = JSON.parse(localStorage.getItem('users'));

    if (Array.isArray(users) && users.length > 0) {
        let tableHTML = `
            <h2>Registered Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    ${users.map(user => {
                        if (!validateInput(user.name, user.age)) return '';
                        return `
                            <tr>
                                <td>${escapeHTML(user.name)}</td>
                                <td>${user.age}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
        outputDiv.innerHTML = tableHTML;
    } else {
        outputDiv.innerHTML = '<p>No users registered.</p>';
    }
}

// Track and display user interaction count using sessionStorage
function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem('interactionCount')) || 0;
    count = (count >= 0 && count < 1000) ? count + 1 : 1; // Reset if invalid
    sessionStorage.setItem('interactionCount', count);
    document.getElementById('interactionCount').textContent =
        `🔄 Interactions this session: ${count}`;
}

// Clear all users from localStorage and refresh the UI
document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.removeItem('users');
    displayData();
    updateInteractionCount();
    showMessage('🗑️ All users have been removed.', 'success');
});

// Initialize user list and interaction count on page load
window.onload = () => {
    displayData();
    updateInteractionCount();
};
