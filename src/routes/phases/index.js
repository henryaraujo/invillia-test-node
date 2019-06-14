import Router from 'koa-router';
import phase from '../../controllers/phases';

const phases = new Router();

phases
.get('/', phase.index)
.get('/:id', phase.show)
.post('/', phase.store)
.delete('/:id', phase.remove)


export default phases;