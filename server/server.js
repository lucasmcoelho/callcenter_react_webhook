const server = require('http').createServer()
const io = require('socket.io')(server);
const axios = require('axios');

const sessions = {};

io.on('connection', socket => {
    const code = `${Math.floor(Math.random() * 999999)}`.padStart(6, '0');
    sessions[code] = {
        socket,
        status: 'waiting_call'
    }

    socket.emit('code', code);
    socket.emit('status', sessions[code]);
});


setInterval(async function () {
    const response = (await axios({
        url: 'https://api.pipedream.com/v1/sources/dc_lVuGLg/event_summaries',
        method: 'get',
        headers: {
            'Authorization': 'Bearer f22e360f33c6dd0576fb0429bebfc66a'
        }
    })).data;
    console.log(response)

}, 1000);

server.listen(3001);