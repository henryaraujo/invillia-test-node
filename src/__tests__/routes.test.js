import request from 'supertest';
import app from '../app';

const URL = '/v1/api/';
var token = '';

describe('POST /auth/signin', () => {

    test('expect token user', async () => {
        const user = {
            email: 'henryaraujo@email.com',
            password: '123456'
        }
        const res = await request(app.callback()).post(`${URL}auth/signin`).send(user);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("token");
        token = res.body.token
    });
})



describe('GET routes api', () => {

    test('expect list player', async () => {
        const res = await request(app.callback())
                        .get(`${URL}players`)
                        .set('Authorization', `Bearer ${token}`)
        expect(res.status).toBe(200);
        expect(res.type).toEqual("application/json");
        expect(res.body).toEqual(
            expect.arrayContaining([]),
        );
    });


    test('expect list tournaments', async () => {
        const res = await request(app.callback())
                        .get(`${URL}tournaments`)
                        .set('Authorization', `Bearer ${token}`)
        expect(res.status).toBe(200);
        expect(res.body).toEqual(
            expect.arrayContaining([]),
        );
    });


    test('expect list phases', async () => {
        const res = await request(app.callback())
                        .get(`${URL}phases`)
                        .set('Authorization', `Bearer ${token}`)
        expect(res.status).toBe(200);
        expect(res.body).toEqual(
            expect.arrayContaining([]),
        );
    });


    test('expect list results', async () => {
        const res = await request(app.callback())
                        .get(`${URL}phases`)
                        .set('Authorization', `Bearer ${token}`)
        expect(res.status).toBe(200);
        expect(res.body).toEqual(
            expect.arrayContaining([]),
        );
    });
})


describe('POST routes api', () => {

    test('create new player', async () => {
        const player = {
            name: "Stewie", 
            nicknam: "stewk2", 
            level: 20,
            is_active: true
        }
        const res = await request(app.callback())
                        .post(`${URL}players`)
                        .set('Authorization', `Bearer ${token}`)
                        .send(player);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("_id");
    });


    test('create new tournament', async () => {
        const player ={
            name: "CS GO for Newbies", 
            description: "Rank Prata mode=on", 
            year: "2019",
            game: "CS GO",
            is_active: true,
            phases : [
                "Dq7OJv7fkhJWpYoi",
                "YCvs2w4NqfWHS8ZY"
            ]
        }
        const res = await request(app.callback())
                        .post(`${URL}tournaments`)
                        .set('Authorization', `Bearer ${token}`)
                        .send(player);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("_id");
    });

    test('create new phase', async () => {
        const phase = {
            name: "Oitavas",
            description: "Melhor de 3",
            max_players: 10,
            is_active: true,
            players: [
                "Zva5rKoAg2qvzrIt",
                "l5ZndOcwx4ZZgEOc",
                "mn6VWYysfQdOvLlN"
             ]
        }
        const res = await request(app.callback())
                        .post(`${URL}phases`)
                        .set('Authorization', `Bearer ${token}`)
                        .send(phase);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("_id");
    });

    test('create new results', async () => {
        const result ={
            player_id: "sN0sMEhn4H3NabfT", 
            phase_id: "Dq7OJv7fkhJWpYoi", 
            points: 80,
            is_active: true
        }
        const res = await request(app.callback())
                        .post(`${URL}phases`)
                        .set('Authorization', `Bearer ${token}`)
                        .send(result);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("_id");
    });
})

