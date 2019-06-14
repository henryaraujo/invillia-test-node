import Router from 'koa-router';
import player from '../../controllers/players';

const players = new Router();

players
.get('/', player.index)
.get('/:id', player.show)
.post('/', player.store)


export default players;