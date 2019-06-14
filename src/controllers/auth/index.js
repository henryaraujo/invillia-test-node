import jwt from 'jsonwebtoken';
import model from '../../models/';

const User = model('users');

const store = async(ctx) => {
    const { name, email, password } = ctx.request.body
    if (!password) ctx.throw(400, 'password required')
    await User.create(ctx.request.body).then(user => {
        ctx.body = user
    })
}

const authentication = async(ctx) => {
    const { email, password } = ctx.request.body;
    if (!password || !email) ctx.throw(400, 'email or password invalid')
    await User.find(ctx.request.body).then(([user]) => {
        const payload = {
            name: user.name,
            email: user.email,
            _id: user._id
        };
        ctx.body = {
            token: jwt.sign(payload, process.env.JWT_SECRET)
        }
    })
}



export default {
    store,
    authentication,
}