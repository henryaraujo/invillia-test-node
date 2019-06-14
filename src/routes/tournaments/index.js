import Router from 'koa-router';
import tournament from '../../controllers/tournaments';

const tournaments = new Router();

tournaments
.get('/', tournament.index)
.get('/:id', tournament.show)
.post('/', tournament.store)
.delete('/:id', tournament.remove)


export default tournaments;