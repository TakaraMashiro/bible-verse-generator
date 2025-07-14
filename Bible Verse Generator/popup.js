document.addEventListener('DOMContentLoaded', function() {
    const currentDateElement = document.getElementById('currentDate');
    const verseReferenceElement = document.getElementById('verseReference');
    const verseTextElement = document.getElementById('verseText');
    const shareBtn = document.getElementById('shareBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Get current date
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long' });
    const day = today.getDate().toString().padStart(2, '0');
    const dateKey = `${month} ${day}`;

    // Display current date
    currentDateElement.textContent = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Get today's verse
    let currentVerse = bibleVerses[dateKey];
    if (!currentVerse) {
        // Fallback verse if date not found
        currentVerse = {
            reference: "John 3:16",
            text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
        };
    }

    // Display verse
    displayVerse(currentVerse);

    // Share button functionality
    shareBtn.addEventListener('click', function() {
        const shareText = `"${currentVerse.text}" - ${currentVerse.reference}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Daily Bible Verse',
                text: shareText
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareText).then(() => {
                showNotification('Verse copied to clipboard!');
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = shareText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showNotification('Verse copied to clipboard!');
            });
        }
    });

    // Next verse button functionality
    nextBtn.addEventListener('click', function() {
        const allDates = Object.keys(bibleVerses);
        const currentIndex = allDates.indexOf(dateKey);
        const nextIndex = (currentIndex + 1) % allDates.length;
        const nextDate = allDates[nextIndex];
        const nextVerse = bibleVerses[nextDate];
        
        displayVerse(nextVerse);
        
        // Update date display
        currentDateElement.textContent = `Next: ${nextDate}`;
    });

    function displayVerse(verse) {
        verseReferenceElement.textContent = verse.reference;
        verseTextElement.textContent = verse.text;
        
        // Add fade-in animation
        const container = document.querySelector('.verse-container');
        container.style.animation = 'none';
        container.offsetHeight; // Trigger reflow
        container.style.animation = 'fadeIn 0.5s ease-in';
    }

    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #ff69b4, #4169e1);
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: bold;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        `;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Add CSS animations for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}); 