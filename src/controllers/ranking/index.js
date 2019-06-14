import model from '../../models/';
import utils from './utils';

const Phase = model('phases');
const Tournament = model('tournaments');

const phases = async(ctx) => {
    const id = ctx.params.id;
    const payload = {_id: id}
    await Phase.findOne(payload)
               .then(utils.getRatingsByPhases)
               .then(utils.getPlayers)
               .then(utils.calcRating)
               .then(utils.createView)
               .then(item => ctx.body = item)
}

const tournaments = async(ctx) => {
    const id = ctx.params.id;
    const payload = {_id: id}
    await Tournament.findOne(payload)
                    .then(utils.getRatingsByTournaments)
                    .then(utils.getPlayers)
                    .then(utils.calcRating)
                    .then(utils.createView)
                    .then(item => ctx.body = item)
}

export default {
    phases,
    tournaments,
}