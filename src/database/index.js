import Datastore from 'nedb';
import path from 'path';

const factory = filename => {
   const db = new Datastore({
        filename: `${path.resolve()}${process.env.DATABASE_PATH}${filename}.db`,
        autoload: true
    });
    db.loadDatabase();
    return db;
}

export default {
    users: factory('users'),
    tournaments: factory('tournaments'),
    players: factory('players'),
    phases: factory('phases'),
    results: factory('results'),
}