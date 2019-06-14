import Router from 'koa-router';
import auth from '../routes/auth';
import tournament from '../routes/tournaments';

const router = new Router()

router.prefix('/v1/api');
router.use('/auth', auth.routes())
router.use('/tournaments', tournament.routes())

export default router