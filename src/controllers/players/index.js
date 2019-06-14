import model from '../../models/';

const Player = model('players');

const index = async(ctx) => {
    await Player.all().then(player => {
      ctx.body = player
    })
}

const show = async(ctx) => {
    const id = ctx.params.id;
    const payload = {_id: id}
    await Player.findOne(payload).then(player => {
        ctx.body = player
    })
}

const store = async(ctx) => {

    await Player.create(ctx.request.body).then(player => {
        ctx.body = player
    })
 }
 
export default {
    index,
    show,
    store,
}