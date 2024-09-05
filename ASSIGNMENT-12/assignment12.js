document.getElementById('fetchButton').addEventListener('click', fetchBaconIpsum);


async function fetchBaconIpsum() {
    const baconContent = document.getElementById('baconContent');
    const loadingIndicator = document.getElementById('loading');
    
 
    baconContent.innerHTML = '';
    loadingIndicator.style.display = 'block';

    try {

        const response = await fetch('https://baconipsum.com/api/?type=all');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json(); 

        loadingIndicator.style.display = 'none';

    
        data.forEach(paragraph => {
            const paraElement = document.createElement('p');
            paraElement.textContent = paragraph;
            baconContent.appendChild(paraElement);
        });
    } catch (error) {
 
        loadingIndicator.style.display = 'none';
        baconContent.innerHTML = `<p style="color: red;">Failed to fetch data: ${error.message}</p>`;
    }
}
