const { db } = require('../../../util/admin');

const reportItem = (req, res) => {
  db.doc(`items/${req.body.uid}`)
    .update('reports', db.FieldValue.increment(1))
    .then(() => res.end())
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = reportItem;
