const fs = require('fs');

// Read the Bible verses file
const versesText = fs.readFileSync('365_Encouraging_Bible_Verses_NIV.txt', 'utf8');

// Parse the verses
const lines = versesText.split('\n').filter(line => line.trim());
const bibleVerses = {};

for (let i = 0; i < lines.length; i += 2) {
    if (i + 1 < lines.length) {
        const dateLine = lines[i];
        const verseLine = lines[i + 1];
        
        if (dateLine.includes(' — ')) {
            const [datePart, reference] = dateLine.split(' — ');
            const text = verseLine.trim().replace(/^"/, '').replace(/"$/, ''); // Remove quotes
            
            if (datePart && reference && text) {
                bibleVerses[datePart] = {
                    reference: reference.trim(),
                    text: text
                };
            }
        }
    }
}

// Generate the JavaScript file content
let jsContent = 'const bibleVerses = {\n';

Object.keys(bibleVerses).forEach(date => {
    const verse = bibleVerses[date];
    jsContent += `    "${date}": {\n`;
    jsContent += `        reference: "${verse.reference}",\n`;
    jsContent += `        text: "${verse.text}"\n`;
    jsContent += `    },\n`;
});

jsContent += '};\n\n';
jsContent += '// Export for use in other files\n';
jsContent += 'if (typeof module !== "undefined" && module.exports) {\n';
jsContent += '    module.exports = bibleVerses;\n';
jsContent += '}\n';

// Write to file
fs.writeFileSync('verses.js', jsContent);

console.log(`Generated verses.js with ${Object.keys(bibleVerses).length} verses`);
console.log('Sample entries:');
console.log(Object.keys(bibleVerses).slice(0, 5)); 