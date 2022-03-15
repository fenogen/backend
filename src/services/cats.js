// Шаг №3.1 - Стандартная запись

// Когда будет создан РЕПОЗИТОРИЙ то мы его подключаем:
const {CatsRepository} = require('../repository')

class CatsService {
    constructor(){
        // repositories - условное название
        this.repositories = {
            cats: new CatsRepository() 
        }
    }

    getAll() {
        const data = this.repositories.cats.getAll()
        // после этого в папке "data" создался db.json 
        return data
    }
    getById({id}) {
        const data = this.repositories.cats.getById(id)
        return data
    }
    create(body) {
        const data = this.repositories.cats.create(body)
        return data
    }
    update({id}, body) {
        const data = this.repositories.cats.update(id, body)
        return data
    }
    remove({id}) {
        const data = this.repositories.cats.remove(id)
        return data
    }
}

module.exports = CatsService


// Шаблон:
// class CatsService {
//     constructor(){}
//     getAll() {
//         return {}
//     }
//     getById({id}) {
//         return {}
//     }
//     create(body) {
//         return {}
//     }
//     update({id}, body) {
//         return {}
//     }
//     remove({id}) {
//         return {}
//     }
// }