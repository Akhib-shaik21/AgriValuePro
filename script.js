// State and District data (you can add more as needed)
const stateDistricts = {
    "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
    "Karnataka": ["Bangalore", "Mysore", "Mangalore", "Hubli"],
    "Punjab": ["Amritsar", "Ludhiana", "Patiala", "Jalandhar"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
    // Add more states and their districts here
};

// Populate state dropdown
const stateDropdown = document.getElementById("state");
for (let state in stateDistricts) {
    let option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateDropdown.appendChild(option);
}

// Populate district dropdown based on selected state
stateDropdown.addEventListener("change", function () {
    const districtDropdown = document.getElementById("district");
    districtDropdown.innerHTML = '<option value="">--Select District--</option>';
    const selectedState = this.value;

    if (selectedState && stateDistricts[selectedState]) {
        stateDistricts[selectedState].forEach(function (district) {
            let option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtDropdown.appendChild(option);
        });
    }
});

// Handle "Go" button click
document.getElementById('go-btn').addEventListener('click', function() {
    // Get the selected commodity and display the result
    const commodity = document.getElementById('commodity').value || 'Wheat';
    const resultElement = document.getElementById('commodity-result');
    resultElement.innerHTML = `${commodity}: <span style="color: green;">Mill Quality</span> <span style="color: blue;">Max Price</span>`;
});
