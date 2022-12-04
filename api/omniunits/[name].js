const fetch = require('node-fetch');

const ENDPOINT = 'https://raw.githubusercontent.com/satyakresna/xbravefrontier/main/data/omniunits/raw.json';

module.exports = async (req, res) => {
    let response = await fetch(ENDPOINT);
    let body = await response.text();
    const omniUnits = JSON.parse(body);

    const urlPaths = req.url.split('/');

    let name = urlPaths[4];
    let selectedUnit = {};
    for (let omniUnit of omniUnits) {
        if (omniUnit.name === name.split('_').join(' ').trim()) {
            selectedUnit = omniUnit;
        }
    }

    const statusCode = (selectedUnit.hasOwnProperty('name')) ? 200 : 404;
    const result = (selectedUnit.hasOwnProperty('name')) 
        ? selectedUnit 
        : { message : `Unit ${name} not found` };

    res.status(statusCode).send(result);
}