
# ⏰ Multi-Timezone Digital Clock

A beautiful, interactive digital clock application that displays the current time in multiple timezones simultaneously.

## Features

✨ **Multiple Timezones**
- Display current time across different timezones
- Add/remove timezones dynamically
- Default timezones: New York, London, Tokyo, Sydney

🎨 **Beautiful UI**
- Modern gradient design
- Responsive layout (works on mobile, tablet, desktop)
- Smooth animations and transitions
- Dark mode compatible

⚡ **Easy to Use**
- Add timezones by city name or timezone identifier
- Real-time clock updates (every second)
- Shows date and day of the week
- One-click timezone removal

## Supported Cities

### Americas
- New York (America/New_York)
- Los Angeles (America/Los_Angeles)
- Chicago (America/Chicago)
- Denver (America/Denver)
- Toronto (America/Toronto)
- Vancouver (America/Vancouver)
- Mexico City (America/Mexico_City)
- São Paulo (America/Sao_Paulo)
- Anchorage (America/Anchorage)
- Honolulu (Pacific/Honolulu)

### Europe
- London (Europe/London)
- Paris (Europe/Paris)
- Berlin (Europe/Berlin)
- Moscow (Europe/Moscow)
- Istanbul (Europe/Istanbul)

### Asia
- Tokyo (Asia/Tokyo)
- Hong Kong (Asia/Hong_Kong)
- Shanghai (Asia/Shanghai)
- Singapore (Asia/Singapore)
- Bangkok (Asia/Bangkok)
- Seoul (Asia/Seoul)
- Mumbai (Asia/Kolkata)
- Dubai (Asia/Dubai)

### Africa
- Cairo (Africa/Cairo)
- Johannesburg (Africa/Johannesburg)
- Lagos (Africa/Lagos)

### Oceania
- Sydney (Australia/Sydney)
- Auckland (Pacific/Auckland)
- Fiji (Pacific/Fiji)

## How to Use

### 1. Basic Usage
- Open `index.html` in your web browser
- You'll see 4 default clock cards for major cities
- The time updates automatically every second

### 2. Add a New Timezone
- Enter a city name in the input field (e.g., "Tokyo", "Dubai")
- Click "Add Timezone" or press Enter
- A new clock card will appear

### 3. Remove a Timezone
- Click the "✕" button on any clock card
- That timezone will be removed

### 4. Reset to Defaults
- Click "Reset to Defaults" button
- All custom timezones will be removed
- Default 4 clocks will be restored

## File Structure

```
digital-clock/
├── index.html       # HTML structure
├── styles.css       # Styling and responsive design
├── script.js        # Clock logic and timezone handling
└── README.md        # This file
```

## Technical Details

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Flexbox, Grid, Gradients, Animations
- **JavaScript ES6** - Intl API for timezone handling

### Timezone Handling
The app uses the JavaScript `Intl.DateTimeFormat` API to handle timezones accurately, accounting for:
- Daylight Saving Time (DST) automatically
- Current local time conversion
- Proper date formatting per locale

### Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Customization

### Add More Cities
Edit `script.js` and add to the `timezoneMap` object:

```javascript
const timezoneMap = {
    'Your City': 'Continent/City',
    // ... existing entries
};
```

### Change Default Clocks
Modify the `defaultTimezones` array in `script.js`:

```javascript
const defaultTimezones = [
    { city: 'Your City', timezone: 'Continent/City' },
    // ... other defaults
];
```

### Styling
Modify `styles.css` to change:
- Colors and gradients
- Card sizes and spacing
- Font sizes and styles
- Animations and transitions

## Usage Tips

💡 **Tips for Daily Use:**
- Keep this open in a browser tab to track multiple time zones
- Great for remote teams spanning different timezones
- Use for scheduling international meetings
- Perfect for travelers tracking home time and local time

🌍 **Timezone Format:**
- Use city names: "New York", "Tokyo", "Sydney"
- Or use timezone identifiers: "America/New_York", "Asia/Tokyo"
- Full list available in your system's timezone database

⏱️ **Accuracy:**
- Clock is accurate to the second
- Automatically accounts for DST changes
- Uses your system's current time as reference

## Troubleshooting

**Issue:** Timezone not found error
- **Solution:** Check spelling and capitalization
- Try alternative city name or timezone identifier
- Ensure timezone identifier follows "Continent/City" format

**Issue:** Time not updating
- **Solution:** Check browser console for errors
- Ensure JavaScript is enabled
- Refresh the page

**Issue:** Mobile display issues
- **Solution:** App is fully responsive
- Zoom out or use landscape mode for more clocks
- Recent browsers have full support

## Future Enhancements

Potential features to add:
- [ ] Analog clock display option
- [ ] Timezone search with suggestions
- [ ] Save favorite timezones to localStorage
- [ ] 12/24 hour format toggle
- [ ] Alarm functionality
- [ ] Meeting time finder
- [ ] Dark/Light theme toggle
- [ ] World map with timezone indicators

## Performance

- Lightweight (< 50KB total)
- Minimal memory footprint
- Efficient DOM updates
- No external dependencies

## License

Free to use and modify for personal or professional projects.

---

**Last Updated:** 2026-07-15