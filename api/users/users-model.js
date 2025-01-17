const db = require('../../data/dbConfig.js')

function getAll() {
    return db('users')
}

function findBy(filter) {
    return db('users')
        .where(filter)
        .first()
}

function findById(id) {
    return db('users')
        .where({ id })
        .first()
}

async function add(user) {
    const [id] = await db('users').insert(user, 'id')
    return findById(id);
}

module.exports = {
  getAll,
  findBy,
  findById,
  add
}