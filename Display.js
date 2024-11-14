// Define the data URL (replace with your actual file or API URL)
const apiUrl = 'ApiData.json'; // Assuming it's in the same folder

// Function to fetch and display data
function fetchData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);
    xhr.responseType = 'json';

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = xhr.response;
            displayData(data);
        } else {
            document.getElementById('data-container').innerHTML = '<p>Failed to load data. Please try again later.</p>';
        }
    };

    xhr.send();
}

// Function to display data
function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear any previous content

    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('data-item');
        div.innerHTML = `
            <h2>${item.name}</h2>
            <p><strong>City:</strong> ${item.city}</p>
            <p><strong>Course:</strong> ${item.course}</p>
            <p><strong>Roll Number:</strong> ${item.roll_number}</p>
        `;
        container.appendChild(div);
    });
}

// Fetch data when the page loads
window.onload = fetchData;
