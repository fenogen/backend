

// Взято по примеру с библиотеки
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
// Создали константу:
const path = require('path')
// Добавили наш path.join который означает: 
// "Мы находимся в папке(__dirname), выходим один раз с папки(..), второй раз с папки(..), заходим в папку "data"
// и создаем файл 'db.json'
const adapter = new FileSync(path.join(__dirname, '..', '..', 'data', 'db.json'))
const db = low(adapter)
 
// Указали наш "cats"
db.defaults({ cats: [] })
  .write()

module.exports = db

// Оригинал с библиотеки:
// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
 
// const adapter = new FileSync('db.json')
// const db = low(adapter)
 
// db.defaults({ posts: [], user: {} })
//   .write()