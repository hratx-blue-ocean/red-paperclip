const { db } = require('../../../util/admin');

const editItem = (req, res) => {
  const field = {};
  if (req.body.title) {
    field.itemName = req.body.title;
  }
  if (req.body.description) {
    field.itemDescription = req.body.description;
  }
  if (req.body.category) {
    field.itemCategory = req.body.category;
  }
  if (req.body.image) {
    field.itemPhoto = req.body.image;
  }

  db.doc(`items/${req.query.uid}`)
    .update(field)
    .then(() => res.end())
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = editItem;
