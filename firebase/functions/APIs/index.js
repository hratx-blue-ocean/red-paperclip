// Items
const getAllItems = require('./Items/getAllItems');
const changeActiveStatus = require('./Items/changeActiveStatus');
const getItem = require('./Items/getItem');
const getItems = require('./Items/getItems');
const addNewItem = require('./Items/addNewItem');
const editItem = require('./Items/editItem');
const getItemsByCategory = require('./Items/getItemsByCategory');

// Users
const login = require('./Users/login');
const signUp = require('./Users/signUp');
const uploadProfilePhoto = require('./Users/uploadProfilePhoto');
const getUserDetail = require('./Users/getUserDetail');
const updateUserDetails = require('./Users/updateUserDetails');
const editWatchList = require('./Users/editWatchList');

// Admin
const reportItem = require('./Admin/reportItem');
const dismissReport = require('./Admin/dismissReport');
const getItemReports = require('./Admin/getItemReports');

// Messages
const getChatRoom = require('./Messages/getChatRoom');
const getAllChatRooms = require('./Messages/getAllChatRooms');
const addChatMessage = require('./Messages/addChatMessage');

const item = {
  getAllItems,
  getItem,
  getItems,
  addNewItem,
  editItem,
  changeActiveStatus,
  getItemsByCategory,
};

const user = {
  login,
  signUp,
  uploadProfilePhoto,
  getUserDetail,
  updateUserDetails,
  editWatchList,
};

const message = {
  getChatRoom,
  getAllChatRooms,
  addChatMessage,
};

const admin = {
  reportItem,
  getItemReports,
  dismissReport,
};

module.exports = {
  item,
  user,
  message,
  admin,
};
