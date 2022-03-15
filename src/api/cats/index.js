// Шаг №2


const express = require('express')
const router = express.Router()

router.get('/', controllerCats.getAll)
