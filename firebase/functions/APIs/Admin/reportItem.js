const { db } = require('../../util/admin');

const reportItem = (req, res) => {
  db.doc(`admin/items`)
    .get()
    .then(async (snap) => {
      const { reported } = snap.data();
      reported[req.query.uid] = req.query.uid;
      console.log(reported);
      db.doc(`admin/items`)
        .update({ reported })
        .then(() => res.end())
        .catch((err) => {
          throw err;
        });
    })
    .catch((err) => res.status(500).json({ error: err.code }));
};

module.exports = reportItem;
