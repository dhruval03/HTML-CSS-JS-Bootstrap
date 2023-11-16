async function fetchCountryDetails() {
    const countryName = document.getElementById('countryInput').value.trim();
    if (!countryName) {
        alert('Please enter a country name.');
        return;
    }

    const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Country not found: ${response.status}`);
        }
        const [country] = await response.json();

        // Display country details
        displayCountryDetails(country);

    } catch (error) {
        console.error('Error fetching country data:', error);
        document.getElementById('errorMessage').textContent = 'Failed to fetch country details. Please try again.';
    }
}

function displayCountryDetails(country) {
    const detailsContainer = document.getElementById('countryDetails');
    detailsContainer.innerHTML = `
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}" class="flag-image">
        <div class="detail-item">
            <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
        </div>
        <div class="detail-item">
            <p><strong>Region:</strong> ${country.region}</p>
        </div>
        <div class="detail-item">
            <p><strong>Subregion:</strong> ${country.subregion}</p>
        </div>
        <div class="detail-item">
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        </div>
        <div class="detail-item">
            <p><strong>Area:</strong> ${country.area.toLocaleString()} km²</p>
        </div>
        <div class="detail-item">
            <p><strong>Languages:</strong> ${Object.values(country.languages).join(', ')}</p>
        </div>
        <div class="detail-item">
            <p><strong>Currencies:</strong> ${Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(', ')}</p>
        </div>
        <div class="detail-item">
            <p><strong>Borders:</strong> ${country.borders ? country.borders.join(', ') : 'N/A'}</p>
        </div>
    `;
}
