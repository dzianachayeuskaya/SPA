export function render(data) {
    console.log(data);
    const container = document.createElement('div');
    container.classList.add(
        'container',
        'd-flex',
        'justify-content-between',
        'flex-wrap',
        'py-4',
    )

    for (const episode of data.results) {
        const episodeCard = document.createElement('div');
        const cardBody = document.createElement('a');
        const title = document.createElement('h5');

        episodeCard.style.width = '75%';
        episodeCard.classList.add('card', 'my-2');
        cardBody.classList.add('card-body');
        title.classList.add('card-title');

        episodeCard.append(cardBody);
        cardBody.append(title);

        let episodeIdByRelease;
        switch (episode.episode_id) {
            case 1:
                episodeIdByRelease = 4;
                break;
            case 2:
                episodeIdByRelease = 5;
                break;
            case 3:
                episodeIdByRelease = 6;
                break;
            case 4:
                episodeIdByRelease = 1;
                break;
            case 5:
                episodeIdByRelease = 2;
                break;
            case 6:
                episodeIdByRelease = 3;
                break;
        };

        title.textContent = episode.episode_id + ': ' + episode.title;

        cardBody.addEventListener('click', async e => {
            e.preventDefault();
            history.pushState({ page: episodeIdByRelease }, '', `?episodeId=${episodeIdByRelease}`);

            const { goToPage } = await import('./main.js');
            goToPage(
                './episode-details.js',
                `https://swapi.dev/api/films/${episodeIdByRelease}`,
                'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css')
        })

        container.append(episodeCard);
    }

    return container;
}
