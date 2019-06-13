import koa from 'koa';
import json from 'koa-json';
import body from 'koa-body';

import router from '../src/routes';

const app = new koa();

app.use(body({ 
    multipart: true,
    urlencoded: true
}))
.use(json({ pretty: true, param: 'pretty' }))
.use(router.routes())
.use(router.allowedMethods());

export default app