const express = require('express')

module.exports = {

    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_all()
        .then(dbResponse => res.status(200).send(dbResponse))
        .catch(err => {
            res.status(500).send({errormessage: 'Something went Wrong!'})
        })

    },

    deleteHouse(req,res) {
        let db = req.app.get('db')
        let {id} = req.params
        console.log('deleting house from db',id)
        db.delete_house({id}).then( response => {
            res.status(200).send(response)
            console.log('deleted that dump')
        })
    }
}