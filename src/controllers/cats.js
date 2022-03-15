// Шаг №4 - стандарьтный (Контроллеры просто отдают результат)
//

// Импортируем
const { HttpCode } = require("../helpers/constants")
const { CatsService } = require("../services")

// Создали экзепляр (не понятно зачем)
const catsService = new CatsService()

// Создаем контроллеры:
// Наименование должно соответствовать "роутерам" в cats/index.js
// const getAll = (req, res, next) => {}
// const getById = (req, res, next) => {}
// const create = (req, res, next) => {}
// const update = (req, res, next) => {}
// const updateStatus = (req, res, next) => {}
// const remove = (req, res, next) => {}
const getAll = (req, res, next) => {
  try {
    const cat = catsService.getAll()
    res.status(HttpCode.OK).json({
      status: "succes",
      code: HttpCode.OK,
      data: {
        cat,
      },
      // data - это как доп.информация(полезная нагрузка)
    })
  } catch (e) {
    next(e)
  }
}
const getById = (req, res, next) => {
  try {
    const cat = catsService.getById(req.params)
    // Делаем условие, если информация найдена
    if (cat) {
      return res.status(HttpCode.OK).json({
        status: "succes",
        code: HttpCode.OK,
        data: {
          cat,
        },
      })
    } else {
      return next({
        status: HttpCode.NOT_FOUND,
        message: "Not found cat",
        data: "Not Found",
      })
    }
  } catch (e) {
    next(e)
  }
}
const create = (req, res, next) => {
    try {
        const cat = catsService.create(req.body)
        res.status(HttpCode.CREATED).json({
          status: "succes",
          code: HttpCode.CREATED,
          data: {
            cat,
          },
        })
      } catch (e) {
        next(e)
      }
}
const update = (req, res, next) => {
    try {
        const cat = catsService.update(req.params, req.body)
        // Делаем условие, если информация найдена
        if (cat) {
          return res.status(HttpCode.OK).json({
            status: "succes",
            code: HttpCode.OK,
            data: {
              cat,
            },
          })
        } else {
          return next({
            status: HttpCode.NOT_FOUND,
            message: "Not found cat",
            data: "Not Found",
          })
        }
      } catch (e) {
        next(e)
      }   
}
const updateStatus = (req, res, next) => {
    try {
        const cat = catsService.update(req.params, req.body)
        // Делаем условие, если информация найдена
        if (cat) {
          return res.status(HttpCode.OK).json({
            status: "succes",
            code: HttpCode.OK,
            data: {
              cat,
            },
          })
        } else {
          return next({
            status: HttpCode.NOT_FOUND,
            message: "Not found cat",
            data: "Not Found",
          })
        }
      } catch (e) {
        next(e)
      }  
}
const remove = (req, res, next) => {
    try {
        const cat = catsService.remove(req.params)
        // Делаем условие, если информация найдена
        if (cat) {
          return res.status(HttpCode.OK).json({
            status: "succes",
            code: HttpCode.OK,
            data: {
              cat,
            },
          })
        } else {
          return next({
            status: HttpCode.NOT_FOUND,
            message: "Not found cat",
            data: "Not Found",
          })
        }
      } catch (e) {
        next(e)
      }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  updateStatus,
  remove,
}
