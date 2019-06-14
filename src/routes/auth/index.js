import Router from 'koa-router';
import user from '../../controllers/auth';

const auth = new Router();

auth
.post('/signin', user.authentication)
.post('/signup', user.store)


export default auth;