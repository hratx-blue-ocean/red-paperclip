const { db } = require('../../../util/admin');

const addNewItem = (req, res) => {
  const newDoc = {
    itemOwner: req.body.user,
    itemName: req.body.name,
    itemCategory: req.body.category,
    itemDescription: req.body.description,
    itemLocation: req.body.location,
    itemPhotos: req.body.photos,
    itemValue: req.body.value,
    createdAt: Date.now(),
    watchCount: 0,
    reports: 0,
    active: true,
  };

  db.collection('items')
    .add(newDoc)
    .then((docRef) => {
      res.send(docRef.id);
    })
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = addNewItem;
