const { db } = require('../../../util/admin');

const getItemsCategory = (req, res) => {
  const quantity = parseInt(req.query.quantity, 10);
  const { category } = req.query;
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
          createdAt: doc.data().createdAt,
        });
      });
      return res.json(items);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.code });
    });
};

module.exports = getItemsCategory;
