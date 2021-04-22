var client = require('scp2')
client.scp({
    host: 'host',
    username: 'username',
    password: 'password',
    path: '/opt/file.txt'
}, './', function(err) {})
