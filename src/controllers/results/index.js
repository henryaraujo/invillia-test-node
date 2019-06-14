import model from '../../models/';

const Result = model('results');

const index = async(ctx) => {
    await Result.all().then(result => {
      ctx.body = result
    })
}

const show = async(ctx) => {
    const id = ctx.params.id;
    const payload = {_id: id}
    await Result.findOne(payload).then(result => {
        ctx.body = result
    })
}

const store = async(ctx) => {
    await Result.create(ctx.request.body).then(result => {
        ctx.body = result
    })
}

const remove = async(ctx) => {
    const id = ctx.params.id;
    const payload = {_id: id}
    await Result.remove(payload).then(result => {
        ctx.body = result
    })
}

export default {
    index,
    show,
    store,
    remove
}