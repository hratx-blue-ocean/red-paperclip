const { db } = require('../../../util/admin');

const deleteItem = (req, res) => {
  db.doc(`items/${req.query.uid}`)
    .delete()
    .then((snap) => res.json(snap.data()))
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = deleteItem;
