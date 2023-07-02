//coloque o código deste arquivo dentro de cypress/pluns

const { addMochawesome } = require('mochawesome/addon');

module.exports = (on, config) => {
    on('after:run', (results) => {
        addMochawesome(results);
    });
};
