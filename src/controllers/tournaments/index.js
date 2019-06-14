import model from '../../models/';

const Tournament = model('tournaments');

const index = async(ctx) => {
    await Tournament.all().then(tournament => {
      ctx.body = tournament
    })
}

const show = async(ctx) => {
    const id = ctx.params.id;
    const payload = {_id: id}
    await Tournament.findOne(payload).then(tournament => {
        ctx.body = tournament
    })
}

const store = async(ctx) => {

    await Tournament.create(ctx.request.body).then(tournament => {
        ctx.body = tournament
    })
 }
 
export default {
    index,
    show,
    store,
}