// Toggle chatbot window
function toggleChat() {
    const header = document.getElementById("chatbot-header");
    const body = document.getElementById("chatbot-body");
    const character = document.getElementById("chatbot-character");
  
    const isVisible = body.style.display === "block";
  
    if (isVisible) {
      header.style.display = "none";
      body.style.display = "none";
      character.style.display = "block";
    } else {
      header.style.display = "block";
      body.style.display = "block";
      character.style.display = "none";
    }
  }
  
  // Handle Enter key for chatbot input
  function handleKey(event) {
    if (event.key === "Enter") {
      const input = document.getElementById("chatbot-input");
      const message = input.value.trim();
      if (message) {
        addMessage(message, "user-msg");
        respondToUser(message);
        input.value = "";
      }
    }
  }
  
  // Handle chatbot send button
  function sendMessage() {
    const input = document.getElementById("chatbot-input");
    const message = input.value.trim();
    if (message) {
      addMessage(message, "user-msg");
      respondToUser(message);
      input.value = "";
    }
  }
  
  // Add message to chat window
  function addMessage(message, className) {
    const chatContainer = document.getElementById("chatbot-messages");
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${className}`;
  
    const text = document.createElement("span");
    text.className = "msg-text";
    text.textContent = message;
  
    const icon = document.createElement("img");
    icon.className = "icon";
    icon.src = className === "user-msg"
      ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" // user
      : "https://cdn-icons-png.flaticon.com/512/4712/4712100.png"; // bot
  
    if (className === "user-msg") {
      msgDiv.appendChild(text);
      msgDiv.appendChild(icon);
    } else {
      msgDiv.appendChild(icon);
      msgDiv.appendChild(text);
    }
  
    chatContainer.appendChild(msgDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  
  // Respond to chatbot queries
  function respondToUser(message) {
    const lowerMsg = message.toLowerCase();
    let responses = [];
  
    if (lowerMsg.includes("project")) {
      responses.push("Sriya’s top projects include Sign Language Detector, Fashion Recommender, and Nutritionist Gemini AI.");
    }
    if (lowerMsg.includes("skills")) {
      responses.push("She is skilled in Python, Java, TensorFlow, ML/DL, YOLOv8, HTML/CSS, GitHub, Canva, and more.");
    }
    if (lowerMsg.includes("contact")) {
      responses.push("You can reach her at sriyaraomuthyala@gmail.com or via LinkedIn.");
    }
    if (lowerMsg.includes("experience") || lowerMsg.includes("intern")) {
      responses.push("Sriya was an ML Intern at SegriTech, building smart crop prediction models using YOLOv8.");
    }
    if (lowerMsg.includes("education") || lowerMsg.includes("college")) {
      responses.push("She’s pursuing CSE (AI & ML) at Guru Nanak Institute of Technology, Hyderabad.");
    }
    if (lowerMsg.includes("roles") || lowerMsg.includes("volunteer")) {
      responses.push("She’s a TEDxGNI designer, IMUN delegate, TPPOC rep, and anchored college fests.");
    }
    if (lowerMsg.includes("hobbies") || lowerMsg.includes("fun")) {
      responses.push("Sriya loves singing, emceeing, design, and learning languages like Korean!");
    }
  
    if (responses.length === 0) {
      responses.push("Sorry, I didn't understand. Try asking about Sriya’s education, roles, tech stack, or hobbies.");
    }
  
    setTimeout(() => {
      responses.forEach(resp => addMessage(resp, "bot-msg"));
    }, 600);
  }
  
  // Toggle navigation menu (hamburger)
  function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
  }
  
  // Copy email to clipboard
  function copyEmail() {
    const email = "sriyaraomuthyala@gmail.com";
    navigator.clipboard.writeText(email).then(function () {
      const feedback = document.getElementById("copy-feedback");
      feedback.style.display = "inline";
      setTimeout(() => {
        feedback.style.display = "none";
      }, 2000);
    }).catch(function (err) {
      alert("Failed to copy email: " + err);
    });
  }
  
