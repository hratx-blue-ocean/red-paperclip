const { db } = require('../../../util/admin');

const reportItem = (req, res) => {
  db.doc(`items/${req.query.uid}`)
    .get()
    .then(async (snap) => {
      db.doc(`items/${snap.id}`)
        .update({ reports: snap.data().reports + 1 })
        .then(() => res.end())
        .catch((err) => {
          throw err;
        });
    })
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = reportItem;
