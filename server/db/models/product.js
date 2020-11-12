const Sequelize = require('sequelize')
const db = require('../db')

// Can we add more validations to make this a more robust model?
// Some examples: minimum on quantity (do we want to allow it to dip below 0?)
// Are empty values okay?
// Are categories from a specific list? (ENUM)
// What does "onHold" refer to?
const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10, 2)
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  onHold: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  }
})

module.exports = Product
