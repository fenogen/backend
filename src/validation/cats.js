// Взято из библиотеки https://joi.dev/api/?v=17.6.0

const Joi = require("joi")

const schemaCreatedCat = Joi.object({
  name: Joi.string().alphanum().min(2).max(30).required(),

  age: Joi.number()
    .integer()
    // Указали мин/макс по годам наших котов
    .min(1)
    .max(45)
    // Указали что это поле обязательное
    .required(),

  // Добавили статус вакцинации, указали что єто буль и что это опциональное свойство(может быть а может и нет)
  isVaccinated: Joi.boolean().optional(),

  // password: Joi.string()
  //     .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  // repeat_password: Joi.ref('password'),

  // access_token: [
  //     Joi.string(),
  //     Joi.number()
  // ],

  // email: Joi.string()
  //     .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
// .with('username', 'birth_year')
// .xor('password', 'access_token')
// .with('password', 'repeat_password');

const schemaUpdateCat = Joi.object({
  name: Joi.string().alphanum().min(2).max(30)
    // Указали опционально
    .optional(),

  age: Joi.number().integer().min(1).max(45)
    // Указали опционально
    .optional(),

  isVaccinated: Joi.boolean().optional(),
})

const schemaUpdateCat = Joi.object({
    name: Joi.string().alphanum().min(2).max(30)
      // Указали опционально
      .optional(),
  
    age: Joi.number().integer().min(1).max(45)
      // Указали опционально
      .optional(),
  
    isVaccinated: Joi.boolean().optional(),
  })
