document.addEventListener('DOMContentLoaded', function() {
    const firstCard = document.getElementById('first-card');
    const secondCard = document.getElementById('second-card');
    const messageContainer = document.getElementById('message-container');
    const greetButton = document.getElementById('greet-button');
    const nextMessageButton = document.getElementById('next-message-button');
    const messageText = document.getElementById('message-text');
    const messages = [
        "Hey cutie, you're amazing! Keep it up! 🔥",
        "Remember, your smile brightens the day! 💖",
        "You're much greater than you think! 🌺",
        "Just a reminder that you're doing great, gorgeous! ✨",
        "You deserve all the happiness in the world! 🎀",
        "Your effort's worth more than you can imagine! 🌟",
        "Never forget how special and unique you are! 💕",
        "Be proud of yourself! You're doing amazing! 💗",
        "No gem shines brighter than you! 💎",
        "Keep shining bright like the star you are! ⭐",
        "I believe in you, even when you don't believe in yourself! 🤗",
        "Take a moment to appreciate how far you've come! 💓",
        "Never give up, gorgeous! You're stronger than you think! 💪",
    ];
    
    const firstMessage = messages[0];

    let remainingMessages = [...messages.slice(1)];
    shuffleArray(remainingMessages);
    
    let isFirstClick = true;
    
    // When greet button is clicked, switch to second card
    greetButton.addEventListener('click', () => {
        firstCard.classList.remove('active');
        secondCard.classList.add('active');
        
        // Show first message (not random)
        messageText.textContent = firstMessage;
        messageContainer.classList.add('message-pop');
        
        // Reset animation
        setTimeout(() => {
            messageContainer.classList.remove('message-pop');
        }, 500);
        
        isFirstClick = false;
    });
    
    // When next message button is clicked, show next random message
    nextMessageButton.addEventListener('click', () => {
        displayNextMessage();
    });
    
    // Function to display the next message with animation
    function displayNextMessage() {
        // If we've used all messages, reshuffle and start again
        if (remainingMessages.length === 0) {
            // For subsequent rounds, include the first message in the shuffle
            remainingMessages = [...messages];
            shuffleArray(remainingMessages);
        }
        
        // Get and remove the first message from the shuffled array
        const message = remainingMessages.shift();
        
        // Display the message with animation
        messageText.textContent = message;
        messageContainer.classList.add('message-pop');
        
        // Reset animation
        setTimeout(() => {
            messageContainer.classList.remove('message-pop');
        }, 500);
    }
    
    // Fisher-Yates shuffle algorithm to randomize array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});