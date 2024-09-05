document.getElementById('fetchDataButton').addEventListener('click', fetchBaconIpsumData);

function fetchBaconIpsumData() {
    const url = 'https://baconipsum.com/api/?type=all';
    const loadingIndicator = document.getElementById('loading');
    const dataContainer = document.getElementById('dataContainer');

    loadingIndicator.style.display = 'block'; 
    dataContainer.innerHTML = ''; 

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            loadingIndicator.style.display = 'none'; 
            displayBaconIpsumData(data);
        })
        .catch(error => {
            loadingIndicator.style.display = 'none'; 
            dataContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
        });
}

function displayBaconIpsumData(data) {
    const dataContainer = document.getElementById('dataContainer');
    const paragraph = document.createElement('p');

    paragraph.textContent = data.join(' '); 
    dataContainer.appendChild(paragraph);
}
