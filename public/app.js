// Check for success message in the URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success') === '1') {
    alert("✅ Case Registered Successfully! The map has been updated.");
    
    // Clean up the URL (optional, removes the ?success=1 so it doesn't pop up again on refresh)
    window.history.replaceState({}, document.title, window.location.pathname);
}

// ... your existing loadDashboard() code below ...
async function loadDashboard() {
    const response = await fetch('/api/surveillance');
    const data = await response.json();

    // 1. Calculate Epidemiological Stats
    const total = data.length;
    const positives = data.filter(d => d.result === 'Positive');
    const rate = ((positives.length / total) * 100).toFixed(1);

    document.getElementById('total').innerText = total;
    document.getElementById('pos-rate').innerText = rate;

    // 2. Initialize Map (Centered on Kenya)
    const map = L.map('map').setView([-1.2921, 36.8219], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // 3. Add Markers for Positive Cases (Red Circles)
    positives.forEach(patient => {
        L.circleMarker([patient.lat, patient.lng], {
            color: 'red',
            radius: 8,
            fillOpacity: 0.7
        }).addTo(map)
          .bindPopup(`<b>County:</b> ${patient.county}<br><b>Age:</b> ${patient.age}`);
    });
}

loadDashboard();