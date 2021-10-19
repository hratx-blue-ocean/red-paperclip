const { db } = require('../../../util/admin');

const getAllItems = (req, res) => {
  const start = req.query.page * 30 || 0;
  const category = req.query.category || 'null';
  let comparison = '!==';
  if (category) {
    comparison = '===';
  }
  db.collection('items')
    .where('active', '===', true)
    .orderBy('createdAt', 'desc')
    .where('itemCategory', comparison, category)
    .limit(30)
    .offset(start)
    .get()
    .then((data) => {
      const items = [];
      data.forEach((doc) => {
        items.push({
          itemName: doc.data().itemName,
          itemOwner: doc.data().itemOwner,
          itemCategory: doc.data().itemCategory,
          itemDescription: doc.data().itemDescription,
          itemLocation: doc.data().itemLocation,
          itemPhotos: doc.data().itemPhotos,
          itemValue: doc.data().itemValue,
          watchCount: doc.data().watchCount,
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
