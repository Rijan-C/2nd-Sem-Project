// Mobile menu toggle
function openmenu() {
    document.getElementById("sidemenu").classList.add("active");
}

function closemenu() {
    document.getElementById("sidemenu").classList.remove("active");
}

// Simulate login status (replace with real logic if using auth)
let isLoggedIn = false;

// Intercept link clicks
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (!isLoggedIn) {
            e.preventDefault(); // Prevent default navigation
            window.location.href = 'login.html'; // Redirect to login
        }
    });
});

// Background Slideshow
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 4 seconds
    setInterval(nextSlide, 4000);

 


});


// Simulate chat bot replies
function simulateReply() {
    const input = document.getElementById('chatInput');
    const chatBox = document.getElementById('chatBox');

    if (input.value.trim() === '') return;

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'bubble';
    userMsg.textContent = `You: ${input.value}`;
    chatBox.appendChild(userMsg);

    // Generate bot response
    let botResponse = '';
    if (input.value.toLowerCase().includes('add')) {
        const item = input.value.replace('add', '').trim() || 'item';
        botResponse = `Added "${item}" to your bucket list! 🎉`;
    } else if (input.value.toLowerCase().includes('remove')) {
        const item = input.value.replace('remove', '').trim() || 'item';
        botResponse = `Removed "${item}" from your bucket list. ✅`;
    } else {
        botResponse = "I can help you manage your bucket list! Try saying 'Add hiking' or 'Remove skydiving'";
    }

    // Add bot message after delay
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'bubble';
        botMsg.textContent = `Bot: ${botResponse}`;
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);

    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Allow Enter key to send message
document.getElementById('chatInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        simulateReply();
    }
});





// Auth and Dashboard functionality
document.addEventListener('DOMContentLoaded', function () {
    // Check if user is logged in (you would replace this with actual auth check)
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username') || 'Adventurer';

    const authSection = document.getElementById('authSection');
    const dashboardDropdown = document.getElementById('dashboardDropdown');

    if (isLoggedIn) {
        // Show user dashboard
        authSection.innerHTML = `
            <div class="user-info" id="userInfo">
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=random" 
                     alt="${username}" class="user-avatar">
                <span class="user-name">${username}</span>
                <i class='bx bx-chevron-down'></i>
            </div>
        `;

        // Set username in dropdown
        document.getElementById('usernameDisplay').textContent = username;

        // Toggle dashboard dropdown
        document.getElementById('userInfo').addEventListener('click', function (e) {
            e.stopPropagation();
            dashboardDropdown.classList.toggle('show');
        });

        // Logout functionality
        document.getElementById('logoutBtn').addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            window.location.href = 'index.html';
        });
    } else {
        // Show login button
        authSection.innerHTML = `<a class="btn" href="login.html">Login</a>`;
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function () {
        dashboardDropdown.classList.remove('show');
    });
});

// For login page (login.html) - you would add this to your login page's JS
function handleLogin() {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        window.location.href = 'index.html';
    }
}