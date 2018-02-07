/* eslint-disable no-restricted-syntax */
const express = require('express')

const app = express()
const compression = require('compression')
app.use(compression())

require('dotenv').config()

const mongoose = require('mongoose')
require('./models')

const Player = mongoose.model('Player')

if (process.env.NODE_ENV === 'development') {
    mongoose.connect('mongodb://mongo:27017/one-tricks')
} else {
    try {
        mongoose.connect(process.env.MONGO_URI)
    } catch (ex) {
        console.error('exception..:', ex)
    }
}

import generator from './OneTricksGenerator'
import { setInterval } from 'timers'

app.set('port', process.env.PORT || 3001)

app.get('/all', (req, res, next) => {
    if (req.query.multiple) {
        const _regions = req.query.region.split(',') || null

        if (_regions) {
            Player.find({ region: { $in: _regions } }, (err, players) => {
                if (err) return next(err)
                res.json(players)
            })
        }
    } else {
        const region = req.query.region || null

        if (region && region !== 'all') {
            Player.find(
                {
                    region,
                },
                (err, players) => {
                    if (err) return next(err)
                    res.json(players)
                },
            )
        } else {
            Player.find((err, players) => {
                if (err) return next(err)
                res.json(players)
            })
        }
    }
})

app.use((req, res, next) => res.render('404', { status: 404, url: req.url }))

app.use((err, req, res, next) => {
    res.render('500', {
        status: err.status || 500,
        error: err,
    })
})

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})

const main = async () => {
    try {
        console.log('starting script')
        const done = await generator()
        console.log('script done:', done)
        setInterval(async () => {
            // console.log('run script...');
            // await generator();
        }, 2147483647)
    } catch (exception) {
        console.log(exception)
    }
}

main()
