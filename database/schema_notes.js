// Items
// Collections: Regional?
// Documents: Individual items
const items = {
  itemID: 'string',
  itemOwner: 'username',
  itemName: 'string',
  itemCategory: 'string',
  itemDescription: 'string',
  itemLocation: 'geospatial?',
  itemPhotos: 'array of URL strings',
  itemValue: 'number',
  watchCount: 'number',
  reports: 'number',
};

// Messages
// Collections: conversations
// Documents: individual messages
const messages = {
  messageText: 'string',
  createdAt: 'date',
};

// Users
// Collections: Regional?
// Documents: Individual users
const users = {
  uid: 'string',
  userFirstName: 'string',
  userLastName: 'string',
  userNickname: 'string',
  photoURL: 'URL string',
  createdAt: 'date',
  availableItems: 'array of item IDs',
  tradeHistory: 'array of item IDs',
  watchedItems: 'array of item IDs',
  userZIP: 'number',
  userPhone: 'string',
  userEmail: 'string',
};

// Mod tools
// Collections: items vs. messages
// Documents: Individual report
const admin = {
  reportID: 'number',
  reportFeedback: 'string',
  itemID: 'message or item ID',
};

// Auth:
// userPW
// PWsalt
// hash, whatever

const testFunc = () => {};
testFunc(items, messages, users, admin);
