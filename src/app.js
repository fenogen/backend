// ШАГ №1 - По сути стандартная запись

// Стандартная запись, походу импорт:
const express = require('express')
const cors = require('cors')
const app = express()
// Создали сами и сделали импорт файлов:
const {HttpCode} = require('./helpers/constants')
const routerCats = require('./api/cats')

// Включаем наш корс и Включаем джейсон(именно эти параметры будут отображатся в заголовке запроса и в Postman):
app.use(cors())
app.use(express.json())

// Роутер подключили к мидлваре:
// TODO: Указали нужный нам путь: /api/cats
app.use('/api/cats', routerCats)
// app.use('/api/v.1.5/cats', routerCats) - прописывают версию иногда и потом ее вручную можно поменять

// Делаем обработку ошибок(стандартная запись):
app.use((req, res, next) =>{
    res.status(HttpCode.NOT_FOUND).json({
    status: 'error',
    code: HttpCode.NOT_FOUND,
    message: `Use api on routes ${req.baseUrl}/api/cats`,
    // TODO: Указали нужный нам путь: /api/cats
    data: 'Not Found',
    })
})

app.use((err, req, res, next) =>{
    // Проверяем статус, если у ошибки есть статус то мы его оставляем, если нет то приваеваем 500
    err.status = err.status ? err.status : HttpCode.INTERNAL_SERVER_ERROR

    res.status(err.status).json({
    status: err.status === 500 ? 'fail' : 'error',
    code: err.status,
    message: err.message,
    data: err.status === 500 ? 'Internal Server Error' : err.data,
    })
})

// Параметры для порта:
const PORT = process.env.PORT || 3000
// Запускаем слушателя:
app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`)
}
)