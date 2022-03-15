// Шаг №2 - По сути стандартная запись


const express = require('express')
const controllerCats = require('../../controllers/cats')
const router = express.Router()

// Делаем роутер - позволяет создавать цепочку, controllerCats - произвольное имя
router
.get('/', controllerCats.getAll)
.get('/:id', controllerCats.getById)
.post('/', controllerCats.create)
.put('/:id', controllerCats.update)
.patch('/:id/vaccinated', controllerCats.updateStatus)
.delete('/:id', controllerCats.remove)
// .delete - в данном случае используется для понимания, на рпактике он "просто так" не используется

module.exports = router

