function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}


// chat bot
const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
let bucketList = [];

function simulateReply() {
  const input = chatInput.value.trim();

  if (input === "") return;

  // Show user input
  appendMessage("user", input);

  const lowerInput = input.toLowerCase();

  if (lowerInput.startsWith("add ")) {
    const item = input.slice(4).trim();
    if (item && !bucketList.includes(item)) {
      bucketList.push(item);
      appendMessage("bot", `✅ Added "${item}" to your bucket list.`);
    } else {
      appendMessage("bot", `⚠️ "${item}" is already on the list or invalid.`);
    }
  } else if (lowerInput.startsWith("remove ")) {
    const item = input.slice(7).trim();
    if (bucketList.includes(item)) {
      bucketList = bucketList.filter(i => i !== item);
      appendMessage("bot", `❌ Removed "${item}" from your list.`);
    } else {
      appendMessage("bot", `🔍 Couldn't find "${item}" in your list.`);
    }
  } else if (lowerInput === "list" || lowerInput === "show list") {
    if (bucketList.length === 0) {
      appendMessage("bot", "🗒️ Your bucket list is empty.");
    } else {
      appendMessage("bot", `📋 Your bucket list:<br>• ${bucketList.join("<br>• ")}`);
    }
  } else {
    appendMessage("bot", '🤖 Sorry, I understand "Add", "Remove", or "Show List".');
  }

  chatInput.value = "";
}

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `msg ${sender}`;
  msg.innerHTML = `<span>${sender === "user" ? "🧍 You" : "🤖 Assistant"}:</span> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}




// CHAT.HTML
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const chatMessages = document.getElementById('chatMessages');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const message = messageInput.value.trim();
  if (!message) return;

  // Add user's outgoing message
  appendMessage(message, 'outgoing');
  messageInput.value = '';

  setTimeout(() => {
    const reply = generateBotReply(message);
    appendMessage(reply, 'incoming');
  }, 1000);
});

function appendMessage(text, type) {
  const msg = document.createElement('div');
  msg.classList.add('msg', type);
  msg.textContent = type === 'incoming' ? `Bot: ${text}` : `You: ${text}`;
  chatMessages.appendChild(msg);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}


function generateBotReply(userMessage) {
  const replies = [
    "That sounds awesome!",
    "Bucket list worthy! 🌟",
    "I've always wanted to try that too!",
    "Tell me more!",
    "Sounds adventurous! 🏞️",
    "🔥 Love that idea!"

  ];
  return replies[Math.floor(Math.random() * replies.length)];
}





// login flip card js
function flipCard() {
  document.getElementById('card').classList.toggle('flipped');
}

// login validation 
function loginValidate(e) {
  e.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  if (username == "admin" && password == "admin") {
    alert("Hi, You're Logged in!!");
    window.location.href = "chat.html";
  }
  else {
    alert("Invalid username or password");
  }
}

// bucket-list
function showInfo(destination) {
  alert("You clicked: " + destination);
}


// chat box

const topics = document.querySelectorAll('#topicList li');
const chatTabs = document.getElementById('chatTabs');

topics.forEach(topic => {
  topic.addEventListener('click', () => {
    const topicName = topic.textContent.trim();

    // Clear previous chat content
    chatTabs.innerHTML = '';

    // Create new chat box
    const newChatBox = document.createElement('div');
    newChatBox.classList.add('chat-room');
    newChatBox.innerHTML = `
          <h3>${topicName} Chat</h3>
          <div class="messages">
            <div class="msg incoming">${topicName} fan: Anyone done this?</div>
          </div>
          <div class="chat-input">
            <input type="text" placeholder="Message about ${topicName}...">
            <button><i class='bx bx-send'></i></button>
          </div>
        `;

    chatTabs.appendChild(newChatBox);
  });
});

// adventure.js

