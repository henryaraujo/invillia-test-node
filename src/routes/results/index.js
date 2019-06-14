import Router from 'koa-router';
import result from '../../controllers/results';

const results = new Router();

results
.get('/', result.index)
.get('/:id', result.show)
.post('/', result.store)
.delete('/:id', result.remove)


export default results;