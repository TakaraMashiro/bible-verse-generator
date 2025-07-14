const { createCanvas } = require('canvas');
const fs = require('fs');

// Create a 48x48 canvas
const canvas = createCanvas(48, 48);
const ctx = canvas.getContext('2d');

// Create gradient background
const gradient = ctx.createLinearGradient(0, 0, 48, 48);
gradient.addColorStop(0, '#ff69b4'); // Pink
gradient.addColorStop(1, '#4169e1'); // Blue

// Fill background
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 48, 48);

// Draw a simple cross symbol
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.lineWidth = 3;

// Vertical line of cross
const centerX = 24;
const centerY = 24;
const crossSize = 16;

ctx.beginPath();
ctx.moveTo(centerX, centerY - crossSize);
ctx.lineTo(centerX, centerY + crossSize);
ctx.stroke();

// Horizontal line of cross
ctx.beginPath();
ctx.moveTo(centerX - crossSize, centerY);
ctx.lineTo(centerX + crossSize, centerY);
ctx.stroke();

// Add a small circle at the center
ctx.beginPath();
ctx.arc(centerX, centerY, 4, 0, 2 * Math.PI);
ctx.fill();

// Save as PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('icon48.png', buffer);

console.log('Created icon48.png successfully!'); 