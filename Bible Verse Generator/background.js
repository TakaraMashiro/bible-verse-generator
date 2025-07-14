// Background script for Daily Bible Verse extension
chrome.runtime.onInstalled.addListener(() => {
    console.log('Daily Bible Verse extension installed');
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
    // This will open the popup automatically due to manifest configuration
    console.log('Extension icon clicked');
});

// Optional: Set up daily notifications (requires notification permission)
// Uncomment the following code if you want to add notification permissions to manifest.json
/*
chrome.alarms.create('dailyVerse', {
    delayInMinutes: 1, // First alarm in 1 minute
    periodInMinutes: 1440 // Then every 24 hours
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'dailyVerse') {
        // Show notification with today's verse
        const today = new Date();
        const month = today.toLocaleString('default', { month: 'long' });
        const day = today.getDate().toString().padStart(2, '0');
        const dateKey = `${month} ${day}`;
        
        // You would need to import the verses data here
        // For now, showing a generic notification
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon48.png',
            title: 'Daily Bible Verse',
            message: 'Click to read today\'s encouraging Bible verse!'
        });
    }
});
*/ 