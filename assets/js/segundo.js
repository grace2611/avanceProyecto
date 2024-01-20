document.addEventListener('DOMContentLoaded', function () {
    // Obtén datos de la API
    fetch('https://api.rawg.io/api/games?key=YOUR_API_KEY&ordering=rating&page_size=3')
        .then(response => response.json())
        .then(data => {
            const cardElements = document.querySelectorAll('.card');

            // Llena las tarjetas con datos de la API
            for (let i = 0; i < cardElements.length; i++) {
                const card = cardElements[i];
                const game = data.results[i];

                card.innerHTML = `
                    <h2>${game.name}</h2>
                    <p>Género: ${game.genres.map(genre => genre.name).join(', ')}</p>
                    <p>Clasificación: ${game.esrb_rating ? game.esrb_rating.name : 'No disponible'}</p>
                    <p>Puntuación: ${game.rating}</p>
                `;
            }
        })
        .catch(error => console.error('Error al obtener datos de la API:', error));
});
