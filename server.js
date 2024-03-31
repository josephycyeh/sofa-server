import express from 'express'
import knex from './knex.js'
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    const trade_events = await knex.select('*').from('sofamon_trade_events')
    console.log(trade_events)
    res.send(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})