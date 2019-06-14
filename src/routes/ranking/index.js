import Router from 'koa-router';
import ranking from '../../controllers/ranking';

const ratings = new Router();

ratings
.get('/:id/phases', ranking.phases)
.get('/:id/tournaments', ranking.tournaments)

export default ratings;