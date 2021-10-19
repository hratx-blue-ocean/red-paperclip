const getAllItems = require('./Items/getAllItems');
const getItem = require('./Items/getItem');
const addNewItem = require('./Items/getItem');
const editItem = require('./Items/getItem');

const item = {
  getAllItems,
  getItem,
  addNewItem,
  editItem,
};

const user = {};

const message = {};

const admin = {};

module.exports = {
  item,
};
