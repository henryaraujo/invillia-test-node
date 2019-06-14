import Router from 'koa-router';
import tournament from '../../controllers/tournaments';

const tournaments = new Router();

tournaments
.get('/', tournament.index)
.get('/:id', tournament.show)
.post('/', tournament.store)


export default tournaments;