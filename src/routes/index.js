import Router from 'koa-router';

import auth from '../routes/auth';
import tournament from '../routes/tournaments';
import player from '../routes/players';
import phase from '../routes/phases';
import result from '../routes/results';

const router = new Router()

router.prefix('/v1/api');
router
    .use('/auth', auth.routes())
    .use('/tournaments', tournament.routes())
    .use('/players', player.routes())
    .use('/phases', phase.routes())
    .use('/results', result.routes())

export default router