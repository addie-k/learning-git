//importing depenedencies
import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cookieParser from 'cookie-parser';
import connectDb from "./src/config/mongoose.config.js";
import BookRepo from './src/repository/repo.js';
import middleware from './src/middlewares/customMiddleware.js';
import session from 'express-session';
import jwt from 'jsonwebtoken';
import jwtMW from './src/config/jwt.config.js';
//initialising server
const app = express()

//declaring middlewares
app.use(express.json());
app.use(cookieParser());
app.use(middleware);
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));

//defining routes
app.get('/', (req, res) => {
    // res.cookie('alldata','cookie-session-custom')
    req.session.destroy()
    res.clearCookie('connect.sid');
    res.json({
        message: 'session destroyed cookie cleared'
    })
});
app.post('/book', async (req, res) => {
    try {
        const { name, age, place } = req.body;
        const book = { name, age, place }
        const result = await new BookRepo().addBook(book)
        return res.json({ result })
    } catch (error) {
        console.log(error)
    }
})

app.get('/book/:id', async (req, res) => {
    let { id } = req.params;
    const result = await new BookRepo().findById(id)
    return res.status(200).json({ result })
})

app.put('/book/update/:id', async (req, res) => {
    let { id } = req.params;
    let { name } = req.body;
    const result = await new BookRepo().updateById(id, name)
    console.log(result)
    res.status(201).json(result)
})
app.delete('/book/delete/:id', async (req, res) => {
    let id = req.params.id
    const result = await new BookRepo().deleteById(id)
    res.status(200).json(result)
})

// app.get('/booksAll', async (req, res) => {
//     const result = await new BookRepo().getAll()

//     res.cookie('allData', result)
//     // res.clearCookie('all-data')
//     console.log(req.requestTime, 'reqtime custom middleware plus cookie removed')
//     return res.status(200).json(result)
// })

app.get('/booksAll', async (req, res) => {
    const result = await new BookRepo().getAll()
    res.cookie('cookieData', result)
    //     // res.clearCookie('all-data')
    console.log(req.requestTime, 'reqtime custom middleware plus cookie removed')
    return res.status(200).json(result)
})

//port initialisation
app.listen(3000, () => {
    console.log('started listening at 3000')
    connectDb()
})
