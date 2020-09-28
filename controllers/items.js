const itemRouter = require('express').Router()
const Item = require('../models/item')

itemRouter.get('/', (request, response, next) => {
    // response.json(items)
    Item.find({}).then(items => {
        // response.json(notes.map(note => note.toJSON()))
        // response.json(items.map(item => item.toJSON()))
        response.json(items)
    })
})

// app.get('/api/persons/:id', (request, response) => {
//   Item.findById(request.params.id).then(item => {
//     response.json(item.toJSON())
//   })
// })

itemRouter.get('/:id', (request, response, next) => {
    Item.findById(request.params.id)
        .then(item => {
            if (item) {
                response.json(item)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

/*The request could not be understood 
    by the server due to malformed syntax. 
    The client SHOULD NOT repeat the request 
    without modifications.*/

//returnOriginal:false



itemRouter.post('/', (request, response, next) => {
    const body = request.body


    if(body.name === undefined) {
        return response.status(400).json({
            error: 'name missing'
        })
    }

    if(body.number === undefined) {
        return response.status(400).json({
            error: 'number missing'
        })
    }

    const item = new Item({
        name: body.name,
        number: body.number,
        likeNumber: body.likeNumber
    })

    // item.save()
    //   .then(result => {
    //     response.json(result.toJSON())
    //     console.log('person saved')
    //     // mongoose.connection.close()
    //   })
    //   .catch(error => next(error))

    item.save()
        .then(savedItem => savedItem.toJSON())
        .then(savedAndFormattedItem => {
            response.json(savedAndFormattedItem)
        })
        .catch(error => next(error))

})




itemRouter.put('/:id', (request, response, next) => {
    const body = request.body
    Item.findByIdAndUpdate(request.params.id, {'number':body.number, 'likeNumber':body.likeNumber})
        .then(item => {
            if(item) {
                response.json(item)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

itemRouter.delete('/:id', (request, response, next) => {

    Item.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))

})

module.exports = itemRouter