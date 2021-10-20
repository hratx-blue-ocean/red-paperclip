const { db } = require('../../../util/admin');

const getItem = (req, res) => {
  db.doc(`items/${req.query.uid}`)
    .get()
    .then((snap) => res.json(snap.data()))
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = getItem;
