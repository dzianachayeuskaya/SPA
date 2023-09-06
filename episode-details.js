export function render(data, planetsData, speciesData) {
    console.log(data);
    const container = document.createElement('div');
    const title = document.createElement('h1');
    const episodeId = document.createElement('h2');
    const descr = document.createElement('p');
    const planetsTitle = document.createElement('h2');
    const planetsList = createList(planetsData);
    const speciesTitle = document.createElement('h2');
    const speciesList = createList(speciesData);
    const backButton = document.createElement('button');

    container.classList.add('container', 'py-4')
    backButton.classList.add('btn', 'btn-primary');

    title.textContent = data.title;
    episodeId.textContent = 'Episode: ' + data.episode_id;
    descr.textContent = data.opening_crawl;
    planetsTitle.textContent = 'Planets';
    speciesTitle.textContent = 'Species';
    backButton.textContent = 'Back to episodes';
    backButton.addEventListener('click', async e => {
        e.preventDefault();
        history.pushState({ page: 'main' }, '', `/`);

        const { goToPage } = await import('./main.js');
        goToPage(
            './episode-list.js',
            'https://swapi.dev/api/films',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css')
    });

    container.append(title);
    container.append(episodeId);
    container.append(descr);
    container.append(planetsTitle);
    container.append(planetsList);
    container.append(speciesTitle);
    container.append(speciesList);
    container.append(backButton);

    return container;
}

function createList(data) {
    const elemList = document.createElement('ul');
    elemList.classList.add('list-group', 'list-group-flush');
    for (const item of data) {
        const itemName = document.createElement('li');
        itemName.classList.add('list-group-item');
        itemName.textContent = item.name;
        elemList.append(itemName);
    }
    return elemList;
}
