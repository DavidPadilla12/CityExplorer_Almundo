const url = 'https://city-explorer-api-xwjtfkfinb.now.sh/api/cityexplorer/';

function getCities() {
    return fetch(`${url}/cities`)
        .then(res => res.json())
        .then(cities => cities)
}

export {getCities};
