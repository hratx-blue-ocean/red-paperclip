const { db } = require('../../util/admin');

const editWatchList = (req, res) => {
  db.doc(`/users/${req.body.email}`)
    .get()
    .then((snap) => {
      const watchList = snap.data().watchedItems;
      if (req.body.type === 'add') {
        watchList[req.body.uid] = req.body.uid;
      } else {
        delete watchList[req.body.uid];
      }
      db.doc(`/users/${req.body.email}`)
        .update({ watchedItems: watchList })
        .then(() => res.end())
        .catch((err) => {
          res.status(500).json({ error: err.code });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err.code });
    });
};

module.exports = editWatchList;
