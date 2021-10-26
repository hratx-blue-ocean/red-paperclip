const { db } = require('../../../util/admin');

const addNewItem = (req, res) => {
  const newDoc = {
    itemOwner: req.body.user,
    itemOwnerUID: req.body.ownerUID,
    itemOwnerPhoto: req.body.profilePhoto,
    itemName: req.body.name,
    itemCategory: req.body.category,
    itemDescription: req.body.description,
    itemLocation: req.body.location,
    createdAt: new Date().toISOString(),
    reports: 0,
    active: true,
  };

  console.log(newDoc);

  db.collection('items')
    .add(newDoc)
    .then((docRef) => {
      db.doc(`user/${req.body.ownerUID}`)
        .update({ availableItem: docRef.id })
        .then(() => {
          res.end();
        })
        .catch((err) => {
          throw err;
        });
    })
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = addNewItem;
