const axios = require('axios');

const init = async function () {
    const dids = (await axios({
        url: 'https://api.totalvoice.com.br/did/',
        method: 'get',
        headers: {
            'Access-Token': process.env.TOTALVOICE_API_KEY
        },
        data: {
            ura_id: 31468,
            ramal_id: null
        }
    })).data;
    console.log(dids.dados);
};

init();