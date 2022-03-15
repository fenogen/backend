
const {v4: uuid} = require('uuid')
const db = require('../db')

class CatsRepository {
    // Пока Конструктор не нужен
    // constructor(){}

    getAll() {
        return db.get('cats')
        .value()
    }
    getById(id) {
        return db.get('cats')
        .find({ id})
        .value()
    }
    create(body) {
        const id = uuid()
        // Создаем запись для базы:
        const record = {
            id,
            ...body,
            // Если мы передали свойство о вакцинации то "ок", если нет то добав со значением false
            ...(body.isVaccinated ? {} : {isVaccinated: false}),
        }
        db.get('cats')
        .push(record)
        // .push({ id: 1, title: 'lowdb is awesome'}) - если не делать переменную 'record'
        .write()
        return record
    }

    update(id, body) {
        const record = db.get('cats')
        .find({id})
        .assign(body).value()
        
        db.write()
        return record.id ? record : null
        // record.id ? record : null - сделали условие, так как в Postman всеравно был update с "левым" id
    }
    remove(id) {
        const [record] = db.get('cats')
        .remove({id})
        .write()
        return record
    }
}

module.exports = CatsRepository 