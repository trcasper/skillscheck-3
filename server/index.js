require('dotenv').config()
const express = require ('express')
const massive = require('massive')
const ctrl = require('./controller')
const app = express()

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log('db connected')
})

//ENDPOINTS
app.get('/api/house', ctrl.getAll)
app.delete('/api/house/:id', ctrl.deleteHouse)
app.post('/api/house', ctrl.add)





app.listen(SERVER_PORT, () => {
    console.log(`Running on port: ${SERVER_PORT}`)
})




