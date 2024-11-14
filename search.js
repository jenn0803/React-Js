let apiData = [];

function fetchApiData() {
    fetch('ApiData.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            return response.json();
        })
        .then(data => {
            apiData = data;
            displayData(apiData);  
        })
        .catch(error => {
            document.getElementById('apiData').innerHTML = '<p>Error fetching data.</p>';
            console.error('Error:', error);
        });
}

//  display all data in a table
function displayData(data) {
    let output = '';
    data.forEach(item => {
        output += `<tr>
                        <td class="td">${item.id}</td>
                        <td class="td">${item.name}</td>
                        <td class="td">${item.city}</td>
                        <td class="td">${item.course}</td>
                        <td class="td">${item.roll_number}</td>
                    </tr>`;
    });
    document.getElementById('apiData').innerHTML = output;
}

// Function to filter data based on search query
function filterData() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    if (searchQuery === '') {
        document.getElementById('searchResult').innerHTML = '';  // Clear suggestions if input is empty
    } else {
        const filteredData = apiData.filter(item =>
            item.name.toLowerCase().includes(searchQuery)
        );
        displaySuggestions(filteredData);
    }
}

// Function to display suggestions in a dropdown list
function displaySuggestions(data) {
    let output = '';
    data.forEach(item => {
        output += `
            <div class="suggestion-item" onclick="selectSuggestion('${item.name}')">
                ${item.name}
            </div>
        `;
    });
    document.getElementById('searchResult').innerHTML = output;
}

// Function to handle suggestion selection
function selectSuggestion(name) {
    document.getElementById('search').value = name;
    document.getElementById('searchResult').innerHTML = '';
    filterData();  // Optionally re-filter the data when a suggestion is selected
}

// Initialize the data fetch on page load
fetchApiData();
