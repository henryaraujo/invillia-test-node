import Router from 'koa-router';
import auth from '../routes/auth';

const router = new Router()

router.prefix('/v1/api');
router.use('/auth', auth.routes())

export default router