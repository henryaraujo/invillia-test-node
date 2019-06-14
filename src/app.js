import 'dotenv/config';
import koa from 'koa';
import json from 'koa-json';
import body from 'koa-body';
import jwt from 'koa-jwt';

import router from '../src/routes';

const app = new koa();

const secret = process.env.JWT_SECRET || 'aW52aWxsaWEtdGVzdC1ub2Rl';

app.use(body({ 
    multipart: true,
    urlencoded: true
}))
.use(json({ pretty: true, param: 'pretty' }))
.use(jwt({ secret: secret }).unless({ path: [/^\/v1\/api\/auth/] }))
.use(router.routes())
.use(router.allowedMethods());

export default app