const { User } = require('../models');

const userData = [{
        username: 'Sam',
        password: 'ssam'

    },
    {
        username: 'Pharrel',
        password: 'ppharrel'
    },
    {
        username: 'Jennie',
        password: 'jennie'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;