const { db } = require('../../../util/admin');

const dismissReport = (req, res) => {
  db.doc(`admin/items`)
    .get()
    .then(async (snap) => {
      const { reported } = snap.data();
      delete reported[req.body.uid];
      db.doc(`admin/items`)
        .update({ reported })
        .then(() => res.end())
        .catch((err) => {
          throw err;
        });
    })
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = dismissReport;
