const axios = require('axios');

const init = async function () {
    const ura = (await axios({
        url: 'https://api.totalvoice.com.br/ura',
        method: 'post',
        headers: {
            'Access-Token': '76d3cd16a68d62916aaaf47f881e3648'
        },
        data: {
            nome: `URA ${Math.floor(Math.random() * 10000)}`,
            dados: [
                {
                    acao: 'tts',
                    coletar_dtmf: "6",
                    timeout: "20",
                    acao_dados: {
                        mensagem: 'Olá, bem vindo teste de call center. Digite o código de seis dígitos que está aparecendo na sua tela'
                    }
                },
                {
                    acao: "dinamico",
                    acao_dados: {
                        url: 'https://c93fa275070d34c99df226cb1d81ee11.m.pipedream.net'
                    }
                }
            ]
        }
    })).data;
    console.log(ura);
};

init();