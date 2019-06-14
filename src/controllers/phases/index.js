import model from '../../models/';

const Phase = model('phases');

const index = async(ctx) => {
    await Phase.all().then(phase => {
      ctx.body = phase
    })
}

const show = async(ctx) => {
    const id = ctx.params.id;
    const payload = {_id: id}
    await Phase.findOne(payload).then(phase => {
        ctx.body = phase
    })
}

const store = async(ctx) => {
    await Phase.create(ctx.request.body).then(phase => {
        ctx.body = phase
    })
 }

const remove = async(ctx) => {
    const id = ctx.params.id;
    const payload = {_id: id}
    await Phase.remove(payload).then(phase => {
        ctx.body = phase
    })
}
 
export default {
    index,
    show,
    store,
    remove,
}