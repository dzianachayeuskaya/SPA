const cssPromises = {};

function loadResource(src) {
  if (src.endsWith('.js')) {
    return import(src);
  }

  if (src.endsWith('.css')) {
    if (!cssPromises[src]) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = src;

      cssPromises[src] = new Promise((resolve) => {
        link.addEventListener('load', () => resolve());
      });
      document.head.append(link);
    }

    return cssPromises[src];
  }

  return fetch(src).then(res => res.json());
}

const appContainer = document.getElementById('app');

function renderPage(moduleName, apiUrl, css) {
  Promise.all([moduleName, apiUrl, css].map(src => loadResource(src)))
    .then(async ([pageModule, data]) => {
      appContainer.innerHTML = '';
      if (data.planets) {
        const planetsData = await loadListData(data.planets);
        const speciesData = await loadListData(data.species);
        appContainer.append(pageModule.render(data, planetsData, speciesData));
      } else appContainer.append(pageModule.render(data));
    }
    )
}

function loadListData(data) {
  return Promise.all(data.map(src => loadResource(src)))
    .then(res => {
      return res
    });
}

export function goToPage() {
  const searchParams = new URLSearchParams(location.search);
  let episodeId = searchParams.get('episodeId');

  if (episodeId) {
    renderPage(
      './episode-details.js',
      `https://swapi.dev/api/films/${episodeId}`,
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css')
  } else {
    renderPage(
      './episode-list.js',
      'https://swapi.dev/api/films',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css'
    )
  };
}

goToPage();

window.addEventListener('popstate', goToPage);

