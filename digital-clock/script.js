// Timezone data mapping
const timezoneMap = {
    'New York': 'America/New_York',
    'Los Angeles': 'America/Los_Angeles',
    'Chicago': 'America/Chicago',
    'Denver': 'America/Denver',
    'London': 'Europe/London',
    'Paris': 'Europe/Paris',
    'Berlin': 'Europe/Berlin',
    'Tokyo': 'Asia/Tokyo',
    'Sydney': 'Australia/Sydney',
    'Mumbai': 'Asia/Kolkata',
    'Dubai': 'Asia/Dubai',
    'Hong Kong': 'Asia/Hong_Kong',
    'Singapore': 'Asia/Singapore',
    'Bangkok': 'Asia/Bangkok',
    'Istanbul': 'Europe/Istanbul',
    'Moscow': 'Europe/Moscow',
    'São Paulo': 'America/Sao_Paulo',
    'Mexico City': 'America/Mexico_City',
    'Toronto': 'America/Toronto',
    'Vancouver': 'America/Vancouver',
    'Auckland': 'Pacific/Auckland',
    'Fiji': 'Pacific/Fiji',
    'Honolulu': 'Pacific/Honolulu',
    'Anchorage': 'America/Anchorage',
    'Cairo': 'Africa/Cairo',
    'Johannesburg': 'Africa/Johannesburg',
    'Lagos': 'Africa/Lagos',
    'Bangkok': 'Asia/Bangkok',
    'Seoul': 'Asia/Seoul',
    'Shanghai': 'Asia/Shanghai',
    'Bangkok': 'Asia/Bangkok'
};

// Default timezones
const defaultTimezones = [
    { city: 'New York', timezone: 'America/New_York' },
    { city: 'London', timezone: 'Europe/London' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo' },
    { city: 'Sydney', timezone: 'Australia/Sydney' }
];

let activeTimezones = [...defaultTimezones];

// Initialize the clock
document.addEventListener('DOMContentLoaded', () => {
    renderClocks();
    updateClocks();
    setInterval(updateClocks, 1000);

    // Event listeners
    document.getElementById('addBtn').addEventListener('click', addTimezone);
    document.getElementById('resetBtn').addEventListener('click', resetTimezones);
    document.getElementById('cityInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTimezone();
    });
});

function renderClocks() {
    const clockGrid = document.getElementById('clockGrid');
    clockGrid.innerHTML = '';

    activeTimezones.forEach((tzData, index) => {
        const clockCard = document.createElement('div');
        clockCard.className = 'clock-card active';
        clockCard.innerHTML = `
            <div class="clock-header">
                <div>
                    <div class="city-name">${tzData.city}</div>
                    <div class="timezone-info">${tzData.timezone}</div>
                </div>
                <button class="remove-btn" onclick="removeTimezone(${index})">✕</button>
            </div>
            <div class="digital-clock" id="clock-${index}">--:--:--</div>
            <div class="date-info">
                <div class="day-of-week" id="day-${index}">--</div>
                <div id="date-${index}">--/--/----</div>
            </div>
        `;
        clockGrid.appendChild(clockCard);
    });
}

function updateClocks() {
    activeTimezones.forEach((tzData, index) => {
        const now = new Date();
        
        try {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: tzData.timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
                weekday: 'long',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });

            const parts = formatter.formatToParts(now);
            const timeObject = {};
            parts.forEach(part => {
                timeObject[part.type] = part.value;
            });

            const time = `${timeObject.hour}:${timeObject.minute}:${timeObject.second}`;
            const date = `${timeObject.month}/${timeObject.day}/${timeObject.year}`;
            const day = timeObject.weekday;

            document.getElementById(`clock-${index}`).textContent = time;
            document.getElementById(`date-${index}`).textContent = date;
            document.getElementById(`day-${index}`).textContent = day;
        } catch (e) {
            console.error(`Error updating timezone ${tzData.timezone}:`, e);
            document.getElementById(`clock-${index}`).textContent = 'ERROR';
        }
    });
}

function addTimezone() {
    const input = document.getElementById('cityInput').value.trim();
    
    if (!input) {
        alert('Please enter a city name or timezone');
        return;
    }

    let timezone = null;
    let cityName = input;

    // Check if it's in our map
    if (timezoneMap[input]) {
        timezone = timezoneMap[input];
    } else {
        // Try to use it directly as a timezone
        try {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: input
            });
            timezone = input;
            cityName = input;
        } catch (e) {
            alert('Timezone not found. Please try a different city or timezone name.');
            return;
        }
    }

    // Check if timezone already exists
    if (activeTimezones.some(tz => tz.timezone === timezone)) {
        alert('This timezone is already added!');
        return;
    }

    activeTimezones.push({ city: cityName, timezone: timezone });
    document.getElementById('cityInput').value = '';
    renderClocks();
    updateClocks();
}

function removeTimezone(index) {
    activeTimezones.splice(index, 1);
    renderClocks();
    updateClocks();
}

function resetTimezones() {
    activeTimezones = [...defaultTimezones];
    document.getElementById('cityInput').value = '';
    renderClocks();
    updateClocks();
}

// Format time with leading zeros
function formatTime(num) {
    return String(num).padStart(2, '0');
}
