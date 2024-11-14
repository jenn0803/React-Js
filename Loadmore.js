let currentPage = 1;         
const itemsPerPage = 2;      
const apiData = 'ApiData.json'; 

// fetch data from the local JSON file
function fetchItems() {
    fetch(apiData)
        .then(response => response.json())
        .then(data => {
            const paginatedData = paginate(data, currentPage, itemsPerPage);
            appendItems(paginatedData);
        })
        .catch(error => console.error('Error fetching items:', error));
}

//paginate the data
function paginate(data, page, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
}

// append items to the list
function appendItems(items) {
    const itemList = document.getElementById('itemList');
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.city} - ${item.course} - Roll No: ${item.roll_number}`;
        itemList.appendChild(listItem);
    });
}

document.getElementById('loadMoreBtn').addEventListener('click', () => {
    currentPage++;
    fetchItems();
});

fetchItems();