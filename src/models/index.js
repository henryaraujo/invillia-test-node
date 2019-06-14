
import db from '../database';

export default (name) => {
    return {

        all() {
            return new Promise((resolve, reject) => {
                db[name].find({}, (err, doc) => {
                    if (err) reject(err)
                    resolve(doc)
                })
            })
        },

        find(data) {
            return new Promise((resolve, reject) => {
                db[name].find(data, (err, doc) => {
                    if (err) reject(err)
                    resolve(doc)
                })
            })
        },

        findOne(data) {
            return new Promise((resolve, reject) => {
                db[name].findOne(data, (err, doc) => {
                    if (err) reject(err)
                    resolve(doc)
                })
            })
        },

        create(data) {
            return new Promise((resolve, reject) => {
                db[name].insert(data, (err, doc) => {
                    if (err) reject(err)
                    resolve(doc)
                })
            })
        },

    }
}