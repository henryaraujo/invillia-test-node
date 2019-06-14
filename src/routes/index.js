import Router from 'koa-router';

import auth from '../routes/auth';
import tournament from '../routes/tournaments';
import player from '../routes/players';

const router = new Router()

router.prefix('/v1/api');
router.use('/auth', auth.routes())
router.use('/tournaments', tournament.routes())
router.use('/players', player.routes())

export default router