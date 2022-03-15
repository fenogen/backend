// Шаг №2 - По сути стандартная запись


const express = require('express')
const controllerCats = require('../../controllers/cats')
const router = express.Router()

// Валидация добавляется в самом финале, это отдельный файл и настройки
const {validateCreateCat, validateUpdateCat, validateUpdateStatusCat} = require('../../validation/cats')

// Делаем роутер - позволяет создавать цепочку, controllerCats - произвольное имя
router
.get('/', controllerCats.getAll)
.get('/:id', controllerCats.getById)
.post('/', validateCreateCat, controllerCats.create)
.put('/:id', validateUpdateCat, controllerCats.update)
.patch('/:id/vaccinated', validateUpdateStatusCat, controllerCats.updateStatus)
.delete('/:id', controllerCats.remove)
// .delete - в данном случае используется для понимания, на рпактике он "просто так" не используется

module.exports = router

