const { FieldPath } = require('@google-cloud/firestore');
const { db } = require('../../../util/admin');

const getAllItems = (req, res) => {
  const quantity = req.query.quantity || 30;
  const category = req.query.category || 'Food';

  db.collection('items')
    .where('active', '==', true)
    .where('itemCategory', '==', category)
    .orderBy('createdAt', 'desc')
    .limit(quantity)
    .get()
    .then((data) => {
      const items = [];
      data.forEach((doc) => {
        items.push({
          itemName: doc.data().itemName,
          itemOwner: doc.data().itemOwner,
          itemOwnerUID: doc.data().itemOwnerUID,
          itemOwnerPhoto: doc.data().itemOwnerPhoto,
          itemCategory: doc.data().itemCategory,
          itemDescription: doc.data().itemDescription,
          itemLocation: doc.data().itemLocation,
          itemPhoto: doc.data().itemPhoto,
          reports: doc.data().reports,
          // eslint-disable-next-line no-underscore-dangle
          createdAt: doc.data().createdAt,
        });
      });
      return res.json(items);
    })
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = getAllItems;
