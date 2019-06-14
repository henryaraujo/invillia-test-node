import http from 'http';
import app from './app'

const server = http.createServer(app.callback());
const port = process.env.PORT || '8000';

server.listen(port, () => console.log(`running in port ${port}`))