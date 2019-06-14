import http from 'http';
import app from './app'

const server = http.createServer(app.callback());

server.listen('8000', () => console.log('running in port 8000'))