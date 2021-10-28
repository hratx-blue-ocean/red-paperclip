const { db } = require('../../util/admin');

const getAllItems = (req, res) => {
  const quantity = parseInt(req.query.quantity, 10);
  db.collection('items')
    .where('active', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(quantity)
    .get()
    .then((data) => {
      const items = [];
      data.forEach((doc) => {
        items.push({
          uid: doc.id,
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

module.exports = getAllItems;
