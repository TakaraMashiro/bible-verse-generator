# Daily Bible Verse Chrome Extension

A beautiful Chrome extension that displays an encouraging Bible verse for each day of the year. Features a stunning pink and blue gradient design with smooth animations.

## Features

- **Daily Bible Verses**: Shows a different encouraging Bible verse for each day of the year
- **Beautiful Design**: Pink and blue gradient background with modern UI
- **Share Functionality**: Copy verses to clipboard or share them
- **Navigation**: Browse through different verses with the "Next Verse" button
- **Responsive Design**: Works well on different screen sizes
- **Smooth Animations**: Fade-in effects and hover animations

## Installation

1. **Download the Extension Files**
   - Make sure all files are in the same directory:
     - `manifest.json`
     - `popup.html`
     - `popup.css`
     - `popup.js`
     - `verses.js`
     - `background.js`
     - Icon files (icon16.png, icon48.png, icon128.png)

2. **Load Extension in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked"
   - Select the folder containing all the extension files

3. **Use the Extension**
   - Click the extension icon in your Chrome toolbar
   - The popup will show today's Bible verse
   - Use the "Share" button to copy the verse
   - Use the "Next Verse" button to browse other verses

## File Structure

```
Daily Bible Verse Extension/
├── manifest.json          # Extension configuration
├── popup.html            # Popup interface
├── popup.css             # Styling with pink/blue theme
├── popup.js              # Popup functionality
├── verses.js             # Bible verses data
├── background.js         # Background service worker
├── icon16.png           # 16x16 icon
├── icon48.png           # 48x48 icon
└── icon128.png          # 128x128 icon
```

## Customization

### Colors
The extension uses a pink and blue gradient theme. You can modify the colors in `popup.css`:
- Main gradient: `linear-gradient(135deg, #ff69b4, #4169e1)`
- Pink accent: `#ff69b4`
- Blue accent: `#4169e1`

### Adding More Verses
To add more Bible verses, edit the `verses.js` file and add entries to the `bibleVerses` object.

### Styling
Modify `popup.css` to change the appearance, animations, or layout of the popup.

## Browser Compatibility

- Chrome 88+ (Manifest V3)
- Other Chromium-based browsers (Edge, Brave, etc.)

## Permissions

The extension requires minimal permissions:
- `storage`: For storing user preferences (future feature)
- `activeTab`: For potential future features

## Development

To modify the extension:
1. Edit the source files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Test your changes

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have suggestions for improvements, please create an issue in the project repository. 