import model from '../../models/';
import _ from 'loadsh';

const Result = model('results');
const Player = model('players');

const _sum = ratings => {
    return _.chain(ratings)
            .groupBy('player_id')
            .map((items, key) => ({
                player_id: key, 
                points: _.sumBy(items, 'points')
            }))
            .value();
}

const _merge = (ratings, players ) => {
    return _(_sum(ratings))
                .keyBy('player_id')
                .merge(_.keyBy(players, '_id'))
                .values()
                .value();
};

export default {
    getRatingsByPhases(phases){
        const {_id} = phases;
        return Result.find({phase_id: _id});
    },

    getRatingsByTournaments(tournaments){
        return Result.find({phase_id: {$in: tournaments.phases}});
    },
    
    getPlayers(ratings) {
        const _ratingsPlayer = _.map(ratings, 'player_id');
        return Player.find({_id: {$in: _ratingsPlayer}})
                .then(player => _merge(ratings, player))
    },
        
    createView(items) {
        return _.orderBy(items, 'score', 'desc').map((item, i) => {
            return `${i +1}º Lugar ${item.player} - ${items.length -1 *i} pontos`
        });
    },
    
    calcRating(items) {
        return _.map(items, (item) => {
            return {
                player: `${item.name}(${item.nickname})`,
                score: item.points
            }
        })
    }
}